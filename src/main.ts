import path from "node:path";
import { app, BrowserWindow, ipcMain, nativeTheme, session } from "electron";
import started from "electron-squirrel-startup";
import { isThemeSource } from "./shared/contracts";

if (started) app.quit();
app.enableSandbox();

let mainWindow: BrowserWindow | null = null;

function isTrustedSender(senderId: number): boolean {
  return mainWindow !== null && mainWindow.webContents.id === senderId;
}

function registerIpc() {
  ipcMain.handle("app:get-meta", (event) => {
    if (!isTrustedSender(event.sender.id)) throw new Error("Untrusted IPC sender");
    return { name: app.getName(), version: app.getVersion(), platform: process.platform };
  });
  ipcMain.handle("theme:set", (event, source: unknown) => {
    if (!isTrustedSender(event.sender.id)) throw new Error("Untrusted IPC sender");
    if (!isThemeSource(source)) throw new TypeError("Invalid theme source");
    nativeTheme.themeSource = source;
    return source;
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 760,
    minWidth: 640,
    minHeight: 560,
    show: false,
    title: "DesktopTemplate",
    backgroundColor: nativeTheme.shouldUseDarkColors ? "#121b1d" : "#f5f0e6",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true,
    },
  });

  mainWindow.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  mainWindow.webContents.on("will-navigate", (event) => event.preventDefault());
  mainWindow.once("ready-to-show", () => mainWindow?.show());
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    void mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    void mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((_contents, _permission, callback) =>
    callback(false),
  );
  registerIpc();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
