# DesktopTemplate 协作约束

开始工作前先阅读 `docs/PROJECT-PROGRESS.md`。架构入口见 `docs/PROJECT-CONTEXT.md`，打包和故障处理入口见 `docs/RUNBOOK-INDEX.md`。

- 修改前先定义可验证的目标，并保留所有无关工作区变更。
- 使用 mise、pnpm 和 `rg`。修复问题时优先补充回归测试。
- 严格分离 Electron 主进程、preload 和 renderer 的职责。
- Renderer 代码不得导入 Node.js 或 Electron。每项允许的能力都通过单独的类型化 preload 方法暴露，禁止直接暴露 `ipcRenderer`。
- 保持 `contextIsolation`、sandbox、Web 安全、默认拒绝权限、默认拒绝弹窗和受限导航。
- 公开文案必须是完整的 `Record<PublicLocale, T>`。UI 变更需要检查中英文、窄窗口、浅色/深色/跟随系统主题、键盘焦点和减少动态效果。
- 应用保持本地优先。云同步和托管服务需要明确需求和架构决策。支付和 GCP 不在模板范围内。
- 快速门禁：`mise exec -- pnpm check:fast`；完整门禁：`mise exec -- pnpm check`；打包门禁：`mise exec -- pnpm package`。
- 禁止提交 secrets、签名证书、公证凭证、本地用户数据和测试产物。
- 文档使用面向读者的最终态表述。当前事实写入项目进展，长期决策写入 ADR，运维操作写入 runbook。
