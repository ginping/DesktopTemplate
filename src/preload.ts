import { contextBridge, ipcRenderer } from "electron";
import type { DesktopApi } from "./shared/contracts";
import { isThemeSource } from "./shared/contracts";

const api: DesktopApi = {
  getAppMeta: () => ipcRenderer.invoke("app:get-meta"),
  setThemeSource: (source) => {
    if (!isThemeSource(source)) return Promise.reject(new TypeError("Invalid theme source"));
    return ipcRenderer.invoke("theme:set", source);
  },
};

contextBridge.exposeInMainWorld("desktop", api);
