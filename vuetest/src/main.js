// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局引入
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 初始化
Vue.prototype.axiosIns = axios.create({
  baseURL: 'https://easy-mock.com/mock/5c67cb3fadf6a5499fb8d31e/vuetest',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
