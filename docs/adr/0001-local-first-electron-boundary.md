# ADR 0001：本地优先的 Electron 边界

## 决策

使用 Electron Forge，renderer 运行在 sandbox 中并启用 context isolation。原生能力通过窄而明确的类型化 preload API 暴露，IPC handler 必须验证输入，产品状态默认保存在本地。

## 原因

该方案无需托管后端即可支持跨平台产品想法，同时限制 Electron 高权限能力的暴露范围。Forge 是 Electron 推荐的打包路径，并提供多平台 maker 和 fuse 加固能力。

## 影响

新增原生能力时，必须同步修改共享类型、preload、主进程验证和测试。云同步只能通过单独认证的 API 引入。公开分发还需要代码签名、公证、更新发布和回滚能力。
