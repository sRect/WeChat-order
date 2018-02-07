// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { WechatPlugin, LoadingPlugin, ToastPlugin } from 'vux'
import VueLazyload from 'vue-lazyload'
import VuxTab from './components/vuxtab'

require('./assets/js/fontSize')
const FastClick = require('fastclick')

Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(WechatPlugin)
Vue.use(VueLazyload)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(VuxTab)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
