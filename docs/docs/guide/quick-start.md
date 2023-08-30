# 快速开始

::: warning
此文档仍在完善中，感谢您的理解与耐心。
:::

## 环境

![Node.js v18.17.0](https://img.shields.io/badge/-Node.js%20v18.17.0-339933?style=flat-square&logo=node.js&logoColor=fff)
![pnpm v8.6.12](https://img.shields.io/badge/-pnpm%20v8.6.12-4c1?style=flat-square&logo=pnpm&logoColor=fff)

## 克隆仓库

首先，你需要将 Elephant4Vue 的代码库克隆到你的本地环境。在终端中运行以下命令：

```bash:no-line-numbers
git clone https://github.com/nnjjjcc/Elephant4Vue.git
```

这将会把 Elephant4Vue 的代码库下载到你的本地。

## 安装依赖

::: warning
如果系统提示 `pnpm` 尚未安装，你可以使用 `npm` 来全局安装 `pnpm`：`npm i -g pnpm`
:::

在项目的根目录下，运行下面的命令来安装项目的依赖：

```bash:no-line-numbers
pnpm -w i
```

## 脚本命令

### 构建组件库

要构建 Elephant4Vue 的组件库，运行以下命令：

```bash:no-line-numbers
pnpm build:ui
```

### 构建Demo

要构建 Elephant4Vue 的示例应用，运行以下命令：

```bash:no-line-numbers
pnpm build:demo
```

### 构建文档

要构建 Elephant4Vue 的文档，运行以下命令：

```bash:no-line-numbers
pnpm build:docs
```

### 测试Demo

要在本地运行 Elephant4Vue 的示例应用，运行以下命令：

```bash:no-line-numbers
pnpm dev:demo
```

### 测试文档

要在本地运行 Elephant4Vue 的文档，运行以下命令：

```bash:no-line-numbers
pnpm dev:docs
```

以上就是 Elephant4Vue 的基本设置和使用方法。如果你在使用过程中遇到问题，欢迎提出 issue 或者参与项目的贡献。
