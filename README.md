# DesktopTemplate

[![CI](https://github.com/ginping/DesktopTemplate/actions/workflows/ci.yml/badge.svg)](https://github.com/ginping/DesktopTemplate/actions/workflows/ci.yml)

A local-first Electron starter for building a secure, tested, cross-platform desktop application. It includes a narrow preload bridge, hardened renderer defaults, responsive UI, themes, typed internationalization, real-window tests, packaging checks, Git hooks, and multi-platform CI.

## Included

- Electron 44, Electron Forge, Vite, React, and strict TypeScript.
- Sandboxed renderer, context isolation, web security, denied permissions/navigation/popups, and typed preload IPC.
- English, Chinese, Spanish, Portuguese, German, French, Japanese, and Korean UI copy.
- Light, dark, and system themes with persisted choice and responsive narrow-window behavior.
- Biome, TypeScript, Vitest, Testing Library, Playwright Electron, axe, docs checks, and Git hooks.
- GitHub Actions quality checks, real Electron window tests, and packaging on Linux, macOS, and Windows.

The template is offline by default. Cloud sync, payment, signing, notarization, auto-update, and product analytics are intentionally absent.

## Prerequisites

- Node.js 22.23.2
- pnpm 10.6.5
- [mise](https://mise.jdx.dev/) is recommended and configured in `.mise.toml`

## Quick start

```bash
git clone https://github.com/ginping/DesktopTemplate.git
cd DesktopTemplate
mise install
mise exec -- pnpm install
mise exec -- pnpm run bootstrap
mise exec -- pnpm dev
```

## Validate and package

```bash
mise exec -- pnpm check:fast
mise exec -- pnpm check
mise exec -- pnpm package
```

`check:fast` validates source and unit contracts. `check` also packages and launches a real Electron window through Playwright. Unsigned development packages are written to `out/`.

## Create a product from this template

- Rename the package, product name, window title, metadata, and starter copy.
- Add native capabilities through narrow methods in `src/shared/contracts.ts`, `src/preload.ts`, and validated main-process handlers.
- Keep product state local until sync is a real requirement.
- Add signing, notarization, update publication, and release channels together as one explicit release-system change.
- Record current scope in [project progress](docs/PROJECT-PROGRESS.md).

## License

MIT
