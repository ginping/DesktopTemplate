# Engineering Quality

Evaluate changes across experience, performance, security, cost, and stability.

1. Define the visible outcome and failure/recovery states.
2. Test pure behavior at the lowest layer.
3. Run `pnpm check:fast` while iterating.
4. Run `pnpm check` before merging to package and exercise a real window.
5. Produce platform artifacts in CI before release work.

Local-first simplicity is a quality property. Avoid native modules, background services, sync, auto-update, and new IPC until a concrete workflow needs them. Use [the review checklist](REVIEW-CHECKLIST.md) and [security contract](SECURITY.md).
