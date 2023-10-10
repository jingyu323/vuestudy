import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import easydemo from '@/components/easydemo'
import HelloWorld2 from '@/components/HelloWorld2'
import VideoPlayer from '@/components/VideoPlayer'
import VideoPlayer2 from '@/components/VideoPlayer2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/VideoPlayer',
      name: 'VideoPlayer',
      component: VideoPlayer
    },
    {
      path: '/VideoPlayer2',
      name: 'VideoPlayer2',
      component: VideoPlayer2
    },
    {
      path: '/easydemo',
      name: 'easydemo',
      component: easydemo
    }
  ]
})
