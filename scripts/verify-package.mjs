import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { listPackage } from "@electron/asar";

const outputRoot = path.resolve("out");

async function findAsarFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const matches = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) matches.push(...(await findAsarFiles(entryPath)));
    if (entry.isFile() && entry.name === "app.asar") matches.push(entryPath);
  }

  return matches;
}

const asarFiles = await findAsarFiles(outputRoot);
if (asarFiles.length === 0) throw new Error("No packaged app.asar was found under out/");

const requiredEntries = [
  "/.vite/build/main.js",
  "/.vite/build/preload.js",
  "/.vite/renderer/main_window/index.html",
  "/package.json",
];
const forbiddenPrefixes = [
  "/node_modules/",
  "/playwright-report/",
  "/src/",
  "/test-results/",
  "/tests/",
];

for (const asarFile of asarFiles) {
  const entries = listPackage(asarFile);
  const missing = requiredEntries.filter((entry) => !entries.includes(entry));
  const leaked = entries.filter((entry) =>
    forbiddenPrefixes.some((prefix) => entry.startsWith(prefix)),
  );
  const details = await stat(asarFile);

  if (details.size < 1024) throw new Error(`${asarFile} is unexpectedly small`);
  if (missing.length > 0) throw new Error(`${asarFile} is missing: ${missing.join(", ")}`);
  if (leaked.length > 0)
    throw new Error(`${asarFile} contains forbidden files: ${leaked.join(", ")}`);
}

console.log(`Packaged application contract passed (${asarFiles.length} ASAR file).`);
