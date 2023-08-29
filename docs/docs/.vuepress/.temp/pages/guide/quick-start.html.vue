<template><div><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>此文档仍在完善中，感谢您的理解与耐心。</p>
</div>
<h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2>
<p><img src="https://img.shields.io/badge/-Node.js v18.17.0-339933?style=flat-square&amp;logo=node.js&amp;logoColor=fff" alt="Node.js v18.17.0">
<img src="https://img.shields.io/badge/-pnpm v8.6.12-4c1?style=flat-square&amp;logo=pnpm&amp;logoColor=fff" alt="pnpm v8.6.12"></p>
<h2 id="克隆仓库" tabindex="-1"><a class="header-anchor" href="#克隆仓库" aria-hidden="true">#</a> 克隆仓库</h2>
<p>首先，你需要将 Elephant4Vue 的代码库克隆到你的本地环境。在终端中运行以下命令：</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/nnjjjcc/Elephant4Vue.git
</code></pre></div><p>这将会把 Elephant4Vue 的代码库下载到你的本地。</p>
<h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>如果系统提示 <code v-pre>pnpm</code> 尚未安装，你可以使用 <code v-pre>npm</code> 来全局安装 <code v-pre>pnpm</code>：<code v-pre>npm i -g pnpm</code></p>
</div>
<p>在项目的根目录下，运行下面的命令来安装项目的依赖：</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token parameter variable">-w</span> i
</code></pre></div><h2 id="脚本命令" tabindex="-1"><a class="header-anchor" href="#脚本命令" aria-hidden="true">#</a> 脚本命令</h2>
<h3 id="构建组件库" tabindex="-1"><a class="header-anchor" href="#构建组件库" aria-hidden="true">#</a> 构建组件库</h3>
<p>要构建 Elephant4Vue 的组件库，运行以下命令：</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> build:ui
</code></pre></div><h3 id="构建demo" tabindex="-1"><a class="header-anchor" href="#构建demo" aria-hidden="true">#</a> 构建Demo</h3>
<p>要构建 Elephant4Vue 的示例应用，运行以下命令：</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> build:demo
</code></pre></div><h3 id="构建文档" tabindex="-1"><a class="header-anchor" href="#构建文档" aria-hidden="true">#</a> 构建文档</h3>
<p>要构建 Elephant4Vue 的文档，运行以下命令：</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> build:docs
</code></pre></div><h3 id="测试demo" tabindex="-1"><a class="header-anchor" href="#测试demo" aria-hidden="true">#</a> 测试Demo</h3>
<p>要在本地运行 Elephant4Vue 的示例应用，运行以下命令：</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> dev:demo
</code></pre></div><h3 id="测试文档" tabindex="-1"><a class="header-anchor" href="#测试文档" aria-hidden="true">#</a> 测试文档</h3>
<p>要在本地运行 Elephant4Vue 的文档，运行以下命令：</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> dev:docs
</code></pre></div><p>以上就是 Elephant4Vue 的基本设置和使用方法。如果你在使用过程中遇到问题，欢迎提出 issue 或者参与项目的贡献。</p>
</div></template>


