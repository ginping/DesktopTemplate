# ADR 0001: Local-first Electron boundary

## Decision

Use Electron Forge with a sandboxed React renderer, context isolation, narrow typed preload APIs, validated IPC handlers, and local-first product state.

## Rationale

This supports cross-platform product ideas without a hosted backend while containing Electron's privileged surface. Forge is Electron's recommended packaging path and provides platform makers and fuse hardening.

## Consequences

Native capabilities require contract changes across shared types, preload, main-process validation, and tests. Cloud synchronization is introduced only through a separately authenticated API. Public distribution additionally requires signing, notarization, update publication, and rollback.
