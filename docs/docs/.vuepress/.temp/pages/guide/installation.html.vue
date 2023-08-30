<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<h2 id="克隆仓库" tabindex="-1"><a class="header-anchor" href="#克隆仓库" aria-hidden="true">#</a> 克隆仓库</h2>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/nnjjjcc/Elephant4Vue.git
</code></pre></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>如果提示pnpm未安装, 使用<code v-pre>npm i -g pnpm</code></p>
</div>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm -w i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="脚本命令" tabindex="-1"><a class="header-anchor" href="#脚本命令" aria-hidden="true">#</a> 脚本命令</h2>
<h3 id="构建组件库" tabindex="-1"><a class="header-anchor" href="#构建组件库" aria-hidden="true">#</a> 构建组件库</h3>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> build:ui
</code></pre></div><h3 id="构建demo" tabindex="-1"><a class="header-anchor" href="#构建demo" aria-hidden="true">#</a> 构建Demo</h3>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> build:demo
</code></pre></div><h3 id="构建文档" tabindex="-1"><a class="header-anchor" href="#构建文档" aria-hidden="true">#</a> 构建文档</h3>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> build:docs
</code></pre></div><h3 id="测试demo" tabindex="-1"><a class="header-anchor" href="#测试demo" aria-hidden="true">#</a> 测试Demo</h3>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> dev:demo
</code></pre></div><h3 id="测试文档" tabindex="-1"><a class="header-anchor" href="#测试文档" aria-hidden="true">#</a> 测试文档</h3>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> dev:docs
</code></pre></div></div></template>


