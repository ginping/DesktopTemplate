import { useEffect, useState } from "react";
import { dictionaries, isPublicLocale, type PublicLocale, publicLocales } from "./lib/i18n";
import { type AppMeta, type ThemeSource, themeSources } from "./shared/contracts";

function storedLocale(): PublicLocale {
  const value = localStorage.getItem("locale");
  return value && isPublicLocale(value) ? value : "en";
}

function storedTheme(): ThemeSource {
  const value = localStorage.getItem("theme");
  return value === "light" || value === "dark" ? value : "system";
}

export function App() {
  const [locale, setLocale] = useState<PublicLocale>(storedLocale);
  const [theme, setTheme] = useState<ThemeSource>(storedTheme);
  const [meta, setMeta] = useState<AppMeta | null>(null);
  const copy = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    void window.desktop.setThemeSource(theme);
  }, [theme]);

  useEffect(() => {
    void window.desktop.getAppMeta().then(setMeta);
  }, []);

  return (
    <main className="app-shell">
      <header className="titlebar">
        <div className="wordmark">
          <span>DT</span>DesktopTemplate
        </div>
        <div className="window-meta">
          {meta ? `${meta.platform} · v${meta.version}` : "local runtime"}
        </div>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <i />
            {copy.eyebrow}
          </p>
          <h1>{copy.title}</h1>
          <p className="lede">{copy.description}</p>
        </div>
        <aside className="controls">
          <div>
            <p className="control-label">{copy.themeLabel}</p>
            <div className="segmented">
              {themeSources.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={theme === item}
                  data-active={theme === item}
                  onClick={() => setTheme(item)}
                >
                  {item === "system" ? copy.system : item === "light" ? copy.light : copy.dark}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="control-label" htmlFor="locale">
              {copy.languageLabel}
            </label>
            <select
              id="locale"
              value={locale}
              onChange={(event) => setLocale(event.target.value as PublicLocale)}
            >
              {publicLocales.map((item) => (
                <option key={item} value={item}>
                  {dictionaries[item].languageName}
                </option>
              ))}
            </select>
          </div>
        </aside>
      </section>
      <section className="principles">
        <article>
          <span>01</span>
          <h2>{copy.localFirst}</h2>
          <p>{copy.localFirstBody}</p>
        </article>
        <article>
          <span>02</span>
          <h2>{copy.security}</h2>
          <p>{copy.securityBody}</p>
        </article>
      </section>
      <footer>
        <span className="ready-dot" />
        {copy.ready}
        <small>Electron · React · Forge</small>
      </footer>
    </main>
  );
}
