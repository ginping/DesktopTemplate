# DesktopTemplate collaboration contract

Read `docs/PROJECT-PROGRESS.md` first. Use `docs/PROJECT-CONTEXT.md` for architecture and `docs/RUNBOOK-INDEX.md` for packaging and incidents.

- Define a verifiable outcome before editing. Preserve unrelated work.
- Use mise, pnpm, and `rg`. Prefer a regression test for fixes.
- Keep Electron main, preload, and renderer responsibilities separate.
- Renderer code never imports Node.js or Electron. Add one typed preload method per allowed capability; never expose `ipcRenderer` directly.
- Keep `contextIsolation`, sandboxing, web security, denied permissions, denied popups, and restricted navigation enabled.
- Public copy is a complete `Record<PublicLocale, T>`. Check English and Chinese, narrow windows, light/dark/system themes, keyboard focus, and reduced motion.
- Keep the app local-first. Cloud sync and hosted services require an explicit requirement and architecture decision. Payments and GCP are out of scope.
- Fast gate: `mise exec -- pnpm check:fast`. Full gate: `mise exec -- pnpm check`. Packaging gate: `mise exec -- pnpm package`.
- Never commit secrets, signing certificates, notarization credentials, local user data, or test artifacts.
- Write reader-facing final-state docs. Current facts live in progress, durable decisions in ADRs, and operations in runbooks.
