// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import httpRequestUtils from './http/httpRequestUtil'


// 初始化axios对象 并且添加的Vue全局属性中
Vue.prototype.axiosIns = httpRequestUtils.initAxiosIns()

Vue.config.productionTip = false
import 'jquery'

import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';
Vue.use(EasyUI);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import { Table,Form } from 'element-ui';
Vue.use(Table);
Vue.use(Form);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

