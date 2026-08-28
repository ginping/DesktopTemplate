# Project Progress

## Current stage

The repository is a reusable cross-platform desktop foundation with no product domain, hosted backend, payment, signing, notarization, or auto-update service.

## Active priorities

1. Replace the starter surface with one coherent local-first workflow.
2. Preserve the process, IPC, locale, theme, responsive, accessibility, test, and packaging contracts.
3. Add native capabilities only through narrow typed interfaces.

## Current facts

- Electron Forge packages Linux, macOS, and Windows targets from one codebase.
- The renderer is sandboxed and receives two typed capabilities: app metadata and theme preference.
- Product state is local and the app can run offline.
- Distribution artifacts are unsigned development packages.

Keep durable decisions in `docs/adr/`, operations in `docs/runbooks/`, and release history in `docs/CHANGELOG.md`.
