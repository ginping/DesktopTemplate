# Engineering Quality Review Checklist

## Experience

- Happy, empty, loading, error, retry, offline, and recovery behavior are defined.
- English and Chinese, all typed dictionaries, narrow windows, keyboard focus, dark mode, and reduced motion are checked.
- Window close/reopen and persisted-state behavior are intentional.

## Security and privacy

- Renderer code contains no Node.js or raw Electron access.
- Every IPC method has a narrow contract, sender validation, input validation, and serializable output.
- Navigation, popups, permissions, remote content, clipboard, files, shell, and external URLs are denied or allowlisted.
- Secrets and private data stay out of renderer bundles, logs, screenshots, crash output, and artifacts.

## Performance and stability

- Startup and first-window work is bounded.
- Local files and databases have schema migration, size limits, backup, and corruption recovery.
- Listeners are removed and windows/processes close cleanly.
- Unit and real-window tests protect the changed contract.
- Linux, macOS, and Windows packaging succeeds before release.

## Release

- `pnpm check` passes from a clean install.
- Signing, notarization, update publication, and rollback are configured before public distribution.
- Current facts, architecture, and operations are documented canonically.
