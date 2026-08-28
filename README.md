# DesktopTemplate

[![CI](https://github.com/ginping/DesktopTemplate/actions/workflows/ci.yml/badge.svg)](https://github.com/ginping/DesktopTemplate/actions/workflows/ci.yml)

一个本地优先的 Electron 工程模板，适合快速开发安全、可测试的跨平台桌面应用。模板预置了窄接口 preload bridge、加固后的 renderer 默认配置、响应式界面、主题、类型安全的国际化、真实窗口测试、打包检查、Git hooks 和多平台 CI。

## 包含内容

- Electron 44、Electron Forge、Vite、React 和 TypeScript 严格模式。
- 运行在 sandbox 中的 renderer、context isolation、Web 安全、默认拒绝权限/导航/弹窗，以及类型化 preload IPC。
- 英文、中文、西班牙语、葡萄牙语、德语、法语、日语和韩语界面文案。
- 浅色、深色和跟随系统三种主题，并持久化用户选择和适配窄窗口。
- Biome、TypeScript、Vitest、Testing Library、Playwright Electron、axe、文档检查和 Git hooks。
- GitHub Actions 工程质量检查、真实 Electron 窗口测试，以及 Linux、macOS、Windows 三平台打包。

模板默认可以离线运行，不包含云同步、支付、代码签名、公证、自动更新和产品分析。只有在产品需求明确后才应引入这些能力。

## 环境要求

- Node.js 22.23.2
- pnpm 10.6.5
- 推荐使用 [mise](https://mise.jdx.dev/)；仓库已提供 `.mise.toml`

## 快速开始

```bash
git clone https://github.com/ginping/DesktopTemplate.git
cd DesktopTemplate
mise install
mise exec -- pnpm install
mise exec -- pnpm run bootstrap
mise exec -- pnpm dev
```

## 检查与打包

```bash
mise exec -- pnpm check:fast
mise exec -- pnpm check
mise exec -- pnpm package
```

`check:fast` 验证源码和单元契约；`check` 还会打包应用，并通过 Playwright 启动真实 Electron 窗口。未签名的开发包输出到 `out/`。

## 基于模板创建新产品

- 修改包名、产品名、窗口标题、metadata 和起始文案。
- 新增原生能力时，通过 `src/shared/contracts.ts`、`src/preload.ts` 和经过验证的主进程 handler 定义窄接口。
- 在同步成为真实需求之前，产品状态保持本地存储。
- 代码签名、公证、更新发布和发布渠道应作为一套完整的发布系统统一引入。
- 在[项目进展](docs/PROJECT-PROGRESS.md)中记录当前范围和事实。

## 许可证

MIT
