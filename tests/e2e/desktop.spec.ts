import { mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { expect, test } from "@playwright/test";
import axe from "axe-core";
import { type ElectronApplication, _electron as electron, type Page } from "playwright";

let electronApp: ElectronApplication;
let window: Page;
let userDataDir: string;

test.beforeEach(async () => {
  const root = path.resolve(__dirname, "../..");
  userDataDir = await mkdtemp(path.join(os.tmpdir(), "desktop-template-test-"));
  electronApp = await electron.launch({
    args: [path.join(root, ".vite/build/main.js"), `--user-data-dir=${userDataDir}`],
    cwd: root,
  });
  window = await electronApp.firstWindow();
});

test.afterEach(async () => {
  await electronApp.close();
  await rm(userDataDir, { force: true, recursive: true });
});

test("starts a secure localized window without runtime errors", async () => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  window.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  window.on("pageerror", (error) => pageErrors.push(error.message));

  await expect(window).toHaveTitle("DesktopTemplate");
  await expect(window.getByRole("heading", { level: 1 })).toContainText("native shell");
  const preferences = await electronApp.evaluate(({ BrowserWindow }) => {
    const current = BrowserWindow.getAllWindows()[0];
    if (!current) throw new Error("Main window was not created");
    return (
      current.webContents as unknown as {
        getLastWebPreferences: () => Record<string, unknown>;
      }
    ).getLastWebPreferences();
  });
  expect(preferences).toMatchObject({
    contextIsolation: true,
    nodeIntegration: false,
    sandbox: true,
    webSecurity: true,
  });
  const policy = await window
    .locator('meta[http-equiv="Content-Security-Policy"]')
    .getAttribute("content");
  expect(policy).toContain("script-src 'self'");
  expect(policy).not.toContain("unsafe-eval");
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("switches locale and theme at a narrow window size", async () => {
  await electronApp.evaluate(({ BrowserWindow }) =>
    BrowserWindow.getAllWindows()[0]?.setSize(650, 600),
  );
  await window.getByLabel("Language").selectOption("zh");
  await expect(window.getByRole("heading", { level: 1 })).toContainText("原生外壳");
  await window.getByRole("button", { name: "深色" }).click();
  await expect(window.locator("html")).toHaveAttribute("data-theme", "dark");
  const width = await window.evaluate(() => ({
    client: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
  }));
  expect(width.scroll).toBeLessThanOrEqual(width.client);
});

test("meets the renderer accessibility baseline", async () => {
  await window.evaluate(axe.source);
  const results = await window.evaluate(async () => {
    const axeRuntime = (
      window as typeof window & {
        axe: { run: () => Promise<{ violations: unknown[] }> };
      }
    ).axe;
    return axeRuntime.run();
  });
  expect(results.violations).toEqual([]);
});
