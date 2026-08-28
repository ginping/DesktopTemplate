# Project Context

| Area | Location | Responsibility |
| --- | --- | --- |
| Main process | `src/main.ts` | Lifecycle, windows, privileged APIs, permission and navigation policy |
| Preload | `src/preload.ts` | Narrow context bridge implementation |
| Contracts | `src/shared/contracts.ts` | Serializable IPC request and response types |
| Renderer | `src/app.tsx`, `src/renderer.tsx` | Unprivileged React UI |
| Locale contract | `src/lib/i18n.ts` | Complete dictionaries and public locales |
| Tests | `tests/` | Pure contracts, React behavior, real Electron, accessibility, and security settings |
| Packaging | `forge.config.ts` | Makers, ASAR, Vite builds, and Electron fuses |
| Automation | `.github/workflows/ci.yml` | Quality, real-window testing, and three-OS packaging |

The renderer is treated like an untrusted browser surface. It cannot access Node.js. Preload exposes explicit methods; main validates sender identity and input before privileged work.

The template starts local-first. Use bounded files or a local database only after defining schema ownership, migration, backup, corruption recovery, and size limits. A future Cloudflare sync API is a separate trust boundary, not direct renderer access to storage.
