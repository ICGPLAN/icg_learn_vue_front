const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {                //设置本地默认端口 选填
      port: 8851,
      proxy: { //设置代理
          '/api': { //设置拦截器 斜杠+拦截器名字，名字可以自己定
              target: process.env.VUE_APP_BASE_URL, //代理的目标地址:开发阶段生效，生产阶段不生效，生产阶段在request.js的baseURL
              changeOrigin: true, //是否设置同源
              ws: false,
              // pathRewrite: { //路径重写
              //   // 用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'http://127.0.0.1:8080/user/add'
              //   '^/api': '/api' //选择忽略拦截器里面的内容 
              // }
          }
      }
  }
})