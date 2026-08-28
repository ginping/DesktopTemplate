# 项目上下文

| 领域 | 位置 | 职责 |
| --- | --- | --- |
| 主进程 | `src/main.ts` | 生命周期、窗口、高权限 API、权限和导航策略 |
| Preload | `src/preload.ts` | 窄接口 context bridge 实现 |
| 契约 | `src/shared/contracts.ts` | 可序列化 IPC 请求和响应类型 |
| Renderer | `src/app.tsx`、`src/renderer.tsx` | 无特权 React UI |
| 语言契约 | `src/lib/i18n.ts` | 完整字典和公开语言 |
| 测试 | `tests/` | 纯函数契约、React 行为、真实 Electron、可访问性和安全配置 |
| 打包 | `forge.config.ts` | Makers、ASAR、Vite 构建和 Electron fuses |
| 自动化 | `.github/workflows/ci.yml` | 工程质量、真实窗口测试和三平台打包 |

Renderer 被视为不可信浏览器界面，不能访问 Node.js。Preload 只暴露明确方法；主进程在执行高权限操作前验证发送方身份和输入。

模板以本地优先方式启动。只有在明确 schema 所有权、迁移、备份、数据损坏恢复和容量限制后，才能添加受控文件或本地数据库。未来的 Cloudflare 同步 API 是独立信任边界，renderer 不得直接访问云端存储。
