// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import httpRequestUtils from './http/httpRequestUtil'

// 初始化axios对象 并且添加的Vue全局属性中
Vue.prototype.axiosIns = httpRequestUtils.initAxiosIns()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
