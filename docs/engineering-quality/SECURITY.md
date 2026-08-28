# Security Contract

The renderer is untrusted. It has no Node.js integration, runs with context isolation and sandboxing, and receives only explicit methods from preload.

- Never expose `ipcRenderer`, generic send/invoke methods, filesystem paths, shell execution, or unrestricted URLs.
- Validate sender identity and every argument in the main process.
- Deny permissions, navigation, and new windows unless a feature defines an allowlist.
- Load bundled content only. Remote content requires a separate threat review.
- Keep ASAR integrity and restrictive Electron fuses enabled in packaged builds.
- Never store secrets in renderer storage or package them into the application.
- Keep the dependency overrides until Electron Forge resolves hardened archive tooling on its stable line. The checked-in pnpm patch only adapts Forge 7 callback hooks to Electron Packager 20 promise hooks; remove it when a compatible stable Forge release is available. CI rejects high-severity advisories and packaging verifies this compatibility bridge.
- Add signing and notarization before public distribution.

For a suspected compromise, stop distribution, revoke credentials, preserve non-sensitive evidence, and follow the [incident runbook](../runbooks/incident-response.md).
