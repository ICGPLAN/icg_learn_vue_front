### 本项目为 IT 类学习项目。

### 使用 Vue3 框架, BootStrap5 前端框架, vue-i18n 国际化插件， vue-slider 滑动验证插件(感觉这个插件有点 Bug?)

### 一、本地部署说明。

### 1.安装 Node.js

https://nodejs.org/ja

### 2.Vue3 环境搭建(下面为日版网站)

https://ja.vuejs.org/

### 3.把本项目下载到本地

### 4.初始化项目

npm install

### 5.启动项目

npm run serve

### 6.打开浏览器

访问 http://localhost:8851

### 「联系我们」页面涉及了与后台连接，发送后台请求请先本地部署JAVA项目「icg_learn_java_back」

### 二、项目文件说明

> -assets 资产文件夹
>
> - > -fonts/.. 存放了字体文件
> - > -img/.. 存放了图片文件

> -components 组件文件夹
>
> - > -Footer.vue 底部组件
> - > -Header.vue 顶部栏组件
> - > -Slider.vue 滑动验证组件

> -css css 式样文件夹

> -js JavaScript 文件夹
>
> - > -models/contact.data.js 問い合わせ表单用的实体类文件
> - > -api.js 与后台 JAVA 交互用的 api
> - > -request.js 重中之重，与后台 JAVA 交互用的底层文件
> - > -util.js 工具类

> -locals 国际化多语言配置文件夹
>
> - > -en.js 英语配置
> - > -index.js 国际化的底层配置
> - > -ja.js 日语配置
> - > -zh.js 中文配置

> -views 主视图文件夹。存放了各个画面
>
> - > -company/.. 各个画面
> - > -error/4xx.vue 错误页面
> - > -samples/I18nTest.vue 只是个国际化语言的测试画面，可以忽略

- App.vue Vue 的入口页面
- main.js Vue 的配置文件
- router.js Vue 路由(控制页面跳转)
- .env.dev 系统配置文件
- vue.config.js Vue 的配置文件

### 其他文件不用理

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
