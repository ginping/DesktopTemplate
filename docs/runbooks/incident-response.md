# Desktop Incident Response

1. Record OS, architecture, app version, install source, startup stage, and reproducible action.
2. Separate main-process failure, preload/IPC failure, renderer failure, local-data corruption, and packaging/signing failure.
3. Reproduce with a clean profile without deleting the affected user's data.
4. Compare the installed artifact with the last accepted release and CI package.
5. Stop rollout or restore the last accepted release when the current artifact is causal.
6. Add a regression test at the narrowest layer and verify all supported platforms in proportion to risk.

A successful local dev session or package command does not prove an installed release is healthy.
