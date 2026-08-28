# 安全契约

Renderer 不可信。它不启用 Node.js integration，运行时开启 context isolation 和 sandbox，并且只能调用 preload 明确暴露的方法。

- 禁止暴露 `ipcRenderer`、通用 send/invoke 方法、文件系统路径、shell 执行或不受限制的 URL。
- 主进程必须验证发送方身份和每一个参数。
- 除非功能定义了 allowlist，否则拒绝权限请求、导航和新窗口。
- 只加载应用打包内容。引入远程内容前必须单独进行威胁评审。
- 打包版本保持 ASAR 完整性校验和限制性 Electron fuses。
- 禁止在 renderer 存储中保存 secrets，也不得将 secrets 打包进应用。
- 在 Electron Forge 稳定版本解决安全归档工具链之前，保留当前依赖 overrides。仓库中的 pnpm patch 只负责将 Forge 7 callback hooks 适配为 Electron Packager 20 promise hooks；兼容的 Forge 稳定版本发布后应移除该补丁。CI 拒绝高危安全公告，打包检查负责验证这层兼容桥。
- 公开分发前必须配置代码签名和公证。

怀疑应用被入侵时，立即停止分发、撤销凭证、保留不含敏感信息的证据，并按照[故障响应手册](../runbooks/incident-response.md)处理。
