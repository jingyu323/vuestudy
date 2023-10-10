// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

Vue.config.productionTip = false
Vue.prototype.openLoading = function () {
  const loading = this.$loading({           // 声明一个loading对象
    lock: true,                             // 是否锁屏
    text: '加载中...',                     // 加载动画的文字
    spinner: 'el-icon-loading',             // 引入的loading图标
    background: 'rgba(0, 0, 0, 0.5)',       // 背景颜色
    target: '.sub-main',                    // 需要遮罩的区域
    body: true,
    customClass: 'mask'                     // 遮罩层新增类名
  })
  setTimeout(function () {                  // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
    loading.close()                        // 关闭遮罩层
  }, 5000)
  return loading
}
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
