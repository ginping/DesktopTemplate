# Packaging and Release

## Development acceptance

```bash
mise exec -- pnpm install --frozen-lockfile
mise exec -- pnpm check
mise exec -- pnpm package
```

The Forge Vite plugin packages only the Vite bundles and application metadata. `pnpm package` then inspects `app.asar` and fails if source, tests, reports, or `node_modules` leaked into the artifact. If a feature introduces an unbundled native runtime dependency, make the externalization decision explicit and update the packaged-app contract before accepting the change.

Inspect the current platform output in `out/`. Confirm startup, close/reopen, English, Chinese, theme persistence, narrow-window layout, and the product's critical workflow.

## Public distribution prerequisites

- Stable application identity and versioning.
- macOS signing and notarization, Windows code signing, and Linux package metadata.
- A protected update publication location and explicit release channels.
- Update signature verification, rollout verification, and rollback.
- Privacy and support documentation appropriate to stored user data.

Unsigned CI artifacts are development evidence, not public release candidates.
