import Vue from 'vue'
import axios from "axios";
import qs from "qs";
import { LoadingPlugin, ToastPlugin } from 'vux'
import config from '../../static/config'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

const Axios = axios.create({
  // baseURL: "http://192.168.1.54:8080",
  baseURL: config.AXIOSURl,
  timeout: 5000,
  responseType: "json",
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

Axios.interceptors.request.use( // POST传参序列化(添加请求拦截器)
  config => {
    // 在发送请求之前做某件事
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    // 若是有做鉴权token , 就给头部带上token
    // if (localStorage.token) {
    //   config.headers.Authorization = localStorage.token;
    // }

    Vue.$vux.loading.show({
      text: '正在加载...'
    })

    return config;
  },
  error => {
    console.log(error)
    Vue.$vux.toast.show({
      text: error,
      type: 'warn',
      time: 5000,
      position: 'default'
    })
    Vue.$vux.loading.hide()
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use( // 响应拦截器
  response => {
    Vue.$vux.loading.hide()
    // if (res.status != 200) {
    //   alert(res.statusText);
    //   return Promise.reject(res);
    // }
    if (response.data == null && response.config.responseType === 'json' && response.request.responseText != null) {
      try {
        // eslint-disable-next-line no-param-reassign
        response.data = JSON.parse(response.request.responseText);
      } catch (e) {
        // ignored
      }
    }
    return response;
  },
  error => {
    Vue.$vux.loading.hide()
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

      // switch (error.response.status) {
      //   case 400: error.message = '请求错误(400)'; break;
      //   case 401: error.message = '未授权，请重新登录(401)'; break;
      //   case 403: error.message = '拒绝访问(403)'; break;
      //   case 404: error.message = '请求出错(404)'; break;
      //   case 408: error.message = '请求超时(408)'; break;
      //   case 500: error.message = '服务器错误(500)'; break;
      //   case 501: error.message = '服务未实现(501)'; break;
      //   case 502: error.message = '网络错误(502)'; break;
      //   case 503: error.message = '服务不可用(503)'; break;
      //   case 504: error.message = '网络超时(504)'; break;
      //   case 505: error.message = 'HTTP版本不受支持(505)'; break;
      //   default: error.message = `连接出错(${err.response.status})!`; break;
      // }

    } else {
      //一些错误是在设置请求的时候触发
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

    Vue.$vux.toast.show({
      text: error.message + ',请刷新重试',
      type: 'warn',
      time: 5000,
      position: 'default'
    })

    return Promise.reject(error);
  }
);

// const apiService = new Proxy(Axios, { // 所有的接口响应做Proxy处理
//   get (target, propKey, receiver) {
//     return function (...args) {
//       return target[propKey](...args)
//         .then((res) => {
//           const resData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
//           return resData;
//           // return typeof resData.obj === 'string' ? JSON.parse(resData.obj) : resData.obj;
//         })
//         .catch((err) => {
//           throw err;
//         });
//     }
//   }
// });

export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
