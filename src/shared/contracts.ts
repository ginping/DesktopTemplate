export const themeSources = ["system", "light", "dark"] as const;
export type ThemeSource = (typeof themeSources)[number];

export type AppMeta = { name: string; version: string; platform: NodeJS.Platform };

export type DesktopApi = {
  getAppMeta: () => Promise<AppMeta>;
  setThemeSource: (source: ThemeSource) => Promise<ThemeSource>;
};

export function isThemeSource(value: unknown): value is ThemeSource {
  return typeof value === "string" && themeSources.some((source) => source === value);
}
