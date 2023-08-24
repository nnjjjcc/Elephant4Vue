# 工程化基础设施

> 很多组件库拥有一套成熟的工程化体系，覆盖了依赖管理、代码规范、打包构建、版本管理与发布、自动测试等多种场景。
> 因此选取组件库的场景进行工程化相关知识进行实践。
> 逐步掌握工程化的思路与实践，自由地定制前端工程的各种细节，最终完全应用到自己日常开发中

考虑项目间依赖分析、依赖安装、构建流程、测试流程、CI 及发布流程等诸多工程环节，同时还要考虑项目规模到达一定程度后的性能问题，比如项目`构建/测试`时间过长需要进行**增量构建/测试**、**按需执行 CI**等等，在实现全面工程化能力的同时，也需要兼顾到性能问题。

## monorepo 应用模式-**单仓库多模块应用**

Monorepo 是一种项目代码管理方式，指单个仓库中管理多个项目，有助于简化代码共享、版本控制、构建和部署等方面的复杂性，并提供更好的可重用性和协作性。

将多个项目集成到一个仓库下，共享工程配置，同时又快捷地共享模块代码，成为趋势，这种代码管理方式称之为 MonoRepo。

`element-plus`  这样将大型项目的多个模块集中在一个仓中进行开发的方式，我们称之为  `monorepo`  模式。

Monorepo 的开发模式就是将各自独立的项目，变成一个统一的工程整体，解决 MultiRepo 下出现的各种痛点，提升研发效率和工程质量。

### 优劣分析

**工作流的一致性**，由于所有的项目放在一个仓库当中，复用起来非常方便，如果有依赖的代码变动，那么用到这个依赖的项目当中会立马感知到。

**项目基建成本的降低**，所有项目复用一套标准的工具和规范，无需切换开发环境，如果有新的项目接入，也可以直接复用已有的基建流程。

**团队协作也更加容易**，一方面大家都在一个仓库开发，能够方便地共享和复用代码，方便检索项目源码，另一方面，git commit 的历史记录也支持以功能为单位进行提交，之前对于某个功能的提交，需要改好几个仓库，提交多个 commit，现在只需要提交一次，简化了 commit 记录，方便协作。

### 方案

1.[`lerna`](https://link.juejin.cn/?target=https%3A%2F%2Flerna.js.org%2F "https://lerna.js.org/")，封装了 Monorepo 中的依赖安装、脚本批量执行等等基本的功能，但没有一套构建、测试、部署的工具链，整体 Monorepo 功能比较弱，但要用到业务项目当中，往往需要基于它进行顶层能力的封装，提供全面工程能力的支撑。

2.集成的 Monorepo 方案，比如[`nx`](https://link.juejin.cn?target=https%3A%2F%2Fnx.dev%2Flatest%2Freact%2Fgetting-started%2Fgetting-started "https://nx.dev/latest/react/getting-started/getting-started")、[`rushstack`](https://link.juejin.cn?target=https%3A%2F%2Frushstack.io%2F "https://rushstack.io/")，提供从初始化、开发、构建、测试到部署的全流程能力，有一套比较完整的 Monorepo 基础设施，适合直接拿来进行业务项目的开发。不过由于这些顶层方案内部各种流程和工具链都已经非常完善了，如果要基于这些方案来定制，适配和维护的成本过高，基本是不可行的。

## 搭建 monorepo

1、安装 pnpm

```
npm install -g pnpm
```

2、初始化项目

```
pnpm init
```

在根目录下存在  `pnpm-workspace.yaml`  文件，用来指定工作空间的目录

```

packages:
  - 'packages/*'
```

3、创建 packages 目录
在  `packages`  目录下创建  `button`  和  `input`  两个文件（代表两个子工程），分别执行  `pnpm init`  命令，初始化工程

在 button 和 input 的 src 目录下创建  `index.ts`  文件，作为项目的入口文件

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f92948f87a754a96b22f6345f0bbbb8b~tplv-k3u1fbpfcp-watermark.image?)

```

export function button() {
  console.log("I am button");
}

```

```
import { button } from "@elephant4vue/button";
function input() {
  button();
  console.log("I am input");
}
export default input;

```

4、修改 button 和 input 中 `package.json` 的 `name` 属性

分别将 name 修改为 `@elephant4vue/button` 、 `@elephant4vue/input`，这里的 `@elephant4vue` 是在 npm 官网上创建的组件名

**注意: 这个组织名一定要提前创建好，否则各工程相互引用时会报错**

5、修改 button 和 input 中 `package.json` 中的 `main` 属性

`main` 属性为该工程的入口文件，默认为 `"main": "index.js"`， 修改为 `"main": "src/index.ts"`，并添加 `publishConfig` 属性

6、各工程间相互引用

```
// pkg2/src/index.ts
import {pk1} from '../../pk1/src'
```

这种相对路径的写法很繁琐且不易维护，如果当某一工程的目录结构发生变化时，其他所有引用该工程的文件都要修改

pnpm  通过  workspace 的实现，可以通过直接引用子工程的 name 名称，就可以实现各工程的相互引用，代码如下

```
import { button } from "@elephant4vue/button";
```

`pnpm`  提供了  [--filter](https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fzh%2Ffiltering "https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fzh%2Ffiltering")  参数，可以用来对特定的 package 进行操作

button 中将 input 作为依赖进行安装，在根目录下执行:

```
pnpm install @elephant4vue/button --filter @elephant4vue/input

```

此时查看 input 的  `package.json`，可以看到  `dependencies`  字段自动添加了 button 的引用，证明相互引用添加成功:

```
  "dependencies": {
    "@elephant4vue/button": "workspace:^"
  }


```

6、打包验证

这里使用  `rollup`  打包，安装依赖，`pnpm`  提供了  [-w](https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fzh%2Fpnpm-cli%23-w---workspace-root "https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fzh%2Fpnpm-cli%23-w---workspace-root")  参数，可以将依赖包安装到工程的根目录下，作为所有 package 的公共依赖

```
pnpm install rollup@2.78.0 rollup-plugin-typescript2@0.34.1 typescript@4.9.4 -wD
```

创建`rollup.config.js`

```

import fs from 'fs';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';
const packagesDir = path.resolve(__dirname, 'packages');
const packageFiles = fs.readdirSync(packagesDir);
function output(path) {
  return [
    {
      input: [`./packages/${path}/src/index.ts`],
      output: [
        {
          file: `./packages/${path}/dist/index.js`,
          format: 'umd',
          name: 'web-see',
          sourcemap: true
        }
      ],
      plugins: [
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              module: 'ESNext'
            }
          },
          useTsconfigDeclarationDir: true
        })
      ]
    }
  ];
}

export default [...packageFiles.map((path) => output(path)).flat()];
```

rollup.config.js 会读取 packages 文件中各子目录的名称，并将每一个目录设置成打包的入口文件，并配置对应的出口路径

在根目录 package.json 中配置打包命令

```

"scripts": {
   "build": "rollup -c"
 }
```

执行 `pnpm run build`，会在 `packages` 各目录下生成对应的 dist 文件

## changesets 用来进行版本控制和管理

暂定--需要 main 分支

### 介绍

Changesets 是一个用于 Monorepo 项目下版本以及 Changelog 文件管理的工具。目前一些比较火的 Monorepo 仓库都在使用该工具进行项目的发包例如 pnpm、mobx 等。

### Lerna 发包方案缺陷

- `ignoreChanges` 不能做到文件的完全忽略，存在优先级问题

- `lerna version` 根据 commit 以及 tag 更新出来的包版本不符合预期

- 生成的 CHANGELOG 文件信息不完整

- `lifecycle scripts` 经常命中一些用户自定义的 script(例如 `publish` 等)

- CI 中自动化发包场景需要很高的定制成本

- lerna 本身不支持 workspace 协议，导致基于 pnpm 开发的一些仓库无法使用

## pnpm 分析

> 现代的包管理工具，名字叫做 pnpm。
>
> pnpm 相比较于 yarn/npm 这两个常用的包管理工具在性能上也有了极大的提升，根据目前官方提供的  [benchmark](https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fbenchmarks "https://pnpm.io/benchmarks")  数据可以看出在一些综合场景下比 npm/yarn 快了大概两倍

### 安装依赖的优化

#### hard link 机制

优化提升离不开，**[Hard link](https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHard_link "https://en.wikipedia.org/wiki/Hard_link")**  的机制，`hard link`  使得用户可以通过不同的路径引用方式去找到某个文件。pnpm 会在全局的 store 目录里存储项目  `node_modules`  文件的  `hard links` 。

例如项目里面有个 1MB 的依赖 a，在 pnpm 中，看上去这个 a 依赖同时占用了 1MB 的 node_modules 目录以及全局 store 目录 1MB 的空间(加起来是 2MB)，但因为 `hard link` 的机制使得两个目录下相同的 1MB 空间能从两个不同位置进行寻址，因此实际上这个 a 依赖只用占用 1MB 的空间，而不是 2MB。

#### Store 目录

一般 store 目录默认是设置在 `${os.homedir}/.pnpm-store` 这个目录下，具体可以参考 `@pnpm/store-path` 这个 pnpm 子包中的代码:

```


const homedir = os.homedir()
if (await canLinkToSubdir(tempFile, homedir)) {
  await fs.unlink(tempFile)
  // If the project is on the drive on which the OS home directory
  // then the store is placed in the home directory
  return path.join(homedir, relStore, STORE_VERSION)
}
```

当然用户也可以在 `.npmrc` 设置这个 store 目录位置，不过一般而言 store 目录对于用户来说感知程度是比较小的。

因为这样一个机制，导致每次安装依赖的时候，如果是个相同的依赖，有好多项目都用到这个依赖，那么这个依赖实际上最优情况(即版本相同)只用安装一次。

如果是 npm 或 yarn，那么这个依赖在多个项目中使用，在每次安装的时候都会被重新下载一次。
在使用 pnpm 对项目安装依赖的时候，如果某个依赖在 sotre 目录中存在了话，那么就会直接从 store 目录里面去 hard-link，避免了二次安装带来的时间消耗，如果依赖在 store 目录里面不存在的话，就会去下载一次。

#### 解决 store 目录越来越大

提供了一个命令来解决这个问题: [pnpm store | pnpm](https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fcli%2Fstore "https://pnpm.io/cli/store")。

同时该命令提供了一个选项，使用方法为  `pnpm store prune` ，它提供了一种用于删除一些不被全局项目所引用到的 packages 的功能，例如有个包 `axios@1.0.0` 被一个项目所引用了，但是某次修改使得项目里这个包被更新到了 `1.0.1` ，那么 store 里面的 1.0.0 的 axios 就就成了个不被引用的包，执行 `pnpm store prune` 就可以在 store 里面删掉它了。

#### node_modules 结构

在项目中使用 pnpm 安装了一个叫做 `express` 的依赖，那么最后会在 node_modules 中形成这样两个目录结构:

```

node_modules/express/...
node_modules/.pnpm/express@4.17.1/node_modules/xxx
```

其中第一个路径是 nodejs 正常寻找路径会去找的一个目录，如果去查看这个目录下的内容，会发现里面连个 `node_modules` 文件都没有：

```

▾ express
    ▸ lib
      History.md
      index.js
      LICENSE
      package.json
      Readme.md
```

实际上这个文件只是个软连接，它会形成一个到第二个目录的一个软连接(类似于软件的快捷方式)，这样 node 在找路径的时候，最终会找到 .pnpm 这个目录下的内容。

其中这个 `.pnpm` 是个虚拟磁盘目录，然后 express 这个依赖的一些依赖会被平铺到 `.pnpm/express@4.17.1/node_modules/` 这个目录下面，这样保证了依赖能够 require 到，同时也不会形成很深的依赖层级。似于软件的快捷方式)，这样 node 在找路径的时候，最终会找到 .pnpm 这个目录下的内容。

其中这个 `.pnpm` 是个虚拟磁盘目录，然后 express 这个依赖的一些依赖会被平铺到 `.pnpm/express@4.17.1/node_modules/` 这个目录下面，这样保证了依赖能够 require 到，同时也不会形成很深的依赖层级。
本质上 pnpm 的  `node_modules`  结构是个网状 + 平铺的目录结构。这种依赖结构主要基于软连接(即 symlink)的方式来完成。

#### symlink 和 hard link 机制

pnpm 是通过 hardlink 在全局里面搞个 store 目录来存储 node_modules 依赖里面的 hard link 地址，然后在引用依赖的时候则是通过 symlink 去找到对应虚拟磁盘目录下(.pnpm 目录)的依赖地址
，假如有一个项目依赖了 `bar@1.0.0` 和 `foo@1.0.0` ，那么最后的 node_modules 结构呈现出来的依赖结构可能会是这样的:

```
bash

node_modules
└── bar // symlink to .pnpm/bar@1.0.0/node_modules/bar
└── foo // symlink to .pnpm/foo@1.0.0/node_modules/foo
└── .pnpm
    ├── bar@1.0.0
    │   └── node_modules
    │       └── bar -> <store>/bar
    │           ├── index.js
    │           └── package.json
    └── foo@1.0.0
        └── node_modules
            └── foo -> <store>/foo
                ├── index.js
                └── package.json
```

`node_modules` 中的 bar 和 foo 两个目录会软连接到 .pnpm 这个目录下的真实依赖中，而这些真实依赖则是通过 hard link 存储到全局的 store 目录中。

#### Monorepo 支持

`pnpm` 在 monorepo 场景可以说算得上是个完美的解决方案了，因为其本身的设计机制，导致很多关键或者说致命的问题都得到了相当有效的解决。

#### workspace 支持

对于 monorepo 类型的项目，pnpm 提供了 workspace 来支持
