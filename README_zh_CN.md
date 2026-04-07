# onelight-siyuan

[English](https://github.com/yck99/onelight-siyuan/blob/main/README.md) | 中文

这是一个非官方的双模式思源主题，用于将 Typora 的 `onelight` 与 `onelight-dark` 一并迁移到思源笔记。

## 特性

- 按照思源原生 DOM 重新适配，而不是直接照搬 Typora 选择器
- 单个主题包同时提供浅色和深色模式
- 覆盖正文、标题、列表、引用、表格、行内代码和代码块
- 同步适配工具栏、页签、文件树、对话框和菜单
- 保留上游 Typora 主题的装饰人物图和所需字体资源
- 在简体中文界面下，将 `MiaoZi-GuoZhiTi` 放在字体栈前面，因此中文界面文字会和思源默认主题不同

## 上游来源

- 原始主题：<https://github.com/caolib/typora-onelight-theme>
- 本仓库是面向思源笔记的非官方移植版本，与原作者无隶属关系

## 授权与图片说明

- 上游 Typora 主题仓库声明采用 WTFPL
- 本移植版本在该上游授权背景下进行分发
- 为了保持原主题观感，仓库中保留了上游主题使用的部分装饰图片资源
- 如果原作者或相关权利人对这些图片资源的收录有异议，请直接在本仓库提出 issue，我会第一时间删除

## 安装方式

- 发布到思源集市后可直接在集市安装
- 或从最新 GitHub Release 下载 `package.zip` 手动导入：
  <https://github.com/yck99/onelight-siyuan/releases/latest>

## 文件入口

- 主题配置：<https://github.com/yck99/onelight-siyuan/blob/main/theme.json>
- 主题样式：<https://github.com/yck99/onelight-siyuan/blob/main/theme.css>
- 英文 README：<https://github.com/yck99/onelight-siyuan/blob/main/README.md>

## 鸣谢

- 感谢 onelight 原主题作者提供了出色的 Typora 主题设计与基础素材
- 感谢 ChatGPT 与 Claude 在需求沟通、整理发布信息和协作推进中的帮助
- 本项目的实际移植、适配、排错、打包与发布准备工作由 Codex 与 Claude Code 完成
