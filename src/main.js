import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
// import Animate from 'animate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import i18n from './locals'
import util from '@/js/util.js'
// import request from '@/js/request'

const app = createApp(App)
app.use(Router)
app.use(i18n)
app.config.globalProperties.$util = util// 共通Jsファイル導入
// app.config.globalProperties.$axios = request

app.mount('#app')
