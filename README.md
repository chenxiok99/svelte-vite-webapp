# svelte-vite-webapp

### 简介

基于Svelte + Vite搭建的多页面应用，适合用于C端活动页

### 相关文档

svelte: https://www.sveltejs.cn/

vite: https://vitejs.bootcss.com/

### 开发环境配置

vscode开发需要在vscode插件市场搜索安装Svelte for VS Code、Svelte 3 Snippets

工作区setting.json添加如下设置

``` json
"[svelte]": {
  "editor.defaultFormatter": "svelte.svelte-vscode"
},
```

本项目需要在nodejs16.x上启动,首先安装nvm

`nvm install v16.18.1`

`nvm use v16.18.1`

### 启动

`yarn`

打开指定页面 
注意：这里的${pageName}为pages目录下文件夹名称

`npm run start --serve=${pageName}`

创建页面 
注意：这里的${pageName}为你自己命名的页面名称

`npm run create-page ${pageName}`

### 提交代码

提交代码请用`npm run commit`命令，规范提交，按步骤填写commit信息