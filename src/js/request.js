import axios from 'axios'

const request = axios.create({
  // TODO 生产环境开发环境的baseURL切换问题要注意
  // 生产阶段生效，开发阶段不生效，开发阶段在vue.config.js的proxy.target，
  // baseURL: process.env.NODE_ENV == 'production' ? process.env.VUE_APP_BASE_URL : "/",
  baseURL: process.env.VUE_APP_BASE_URL,
  // headers:{'X-Requested-With':'XMLHttpRequest'},
  timeout: 15000,
  withCredentials: true,
})

// request 请求拦截器·前端传给后端
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8';
  //配置请求头，告诉服务端当前是axios请求
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['lang'] = localStorage.getItem('lang');
  
 // config.headers['token'] = user.token;  // 设置请求头
  return config
}, error => {
  return Promise.reject(error)
});

// response 响应拦截器·后端传给前端
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  response => {
    let res = response.data;
    // 如果是返回的文件
    if (response.config.responseType === 'blob') {
      return res
    }
    // 兼容服务端返回的字符串数据
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }
        return res;
    },
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
)

export default request