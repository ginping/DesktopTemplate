# 打包与发布

## 开发验收

```bash
mise exec -- pnpm install --frozen-lockfile
mise exec -- pnpm check
mise exec -- pnpm package
```

Forge Vite plugin 只打包 Vite bundle 和应用 metadata。随后，`pnpm package` 会检查 `app.asar`；如果源码、测试、报告或 `node_modules` 泄漏到产物中，命令会失败。如果功能引入未打包的原生运行时依赖，必须明确外部化方案，并先更新打包应用契约再接受变更。

检查 `out/` 中当前平台的输出。确认应用启动、关闭与重新打开、中英文、主题持久化、窄窗口布局和产品关键流程。

## 公开分发前置条件

- 稳定的应用标识和版本规则。
- macOS 签名与公证、Windows 代码签名和 Linux 包 metadata。
- 受保护的更新发布位置和明确的发布渠道。
- 更新签名验证、发布验收和回滚能力。
- 与本地存储用户数据相匹配的隐私和支持文档。

未签名的 CI 产物只能作为开发证据，不能作为公开发布候选版本。
