import "@testing-library/jest-dom/vitest";
import { beforeEach, vi } from "vitest";

beforeEach(() => {
  localStorage.clear();
  window.desktop = {
    getAppMeta: vi
      .fn()
      .mockResolvedValue({ name: "DesktopTemplate", version: "0.1.0", platform: "darwin" }),
    setThemeSource: vi.fn().mockImplementation(async (source) => source),
  };
});
