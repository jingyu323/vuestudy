import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Btn from '@/components/btn'
import axiosvue from '@/components/axios'
import promisetest from '@/components/promisetest'

import echartdot from '@/components/echartdot'
import echartdotMap from '@/components/echartdotMap'
import echartdotSingleAxiz from '@/components/echartdotSingleAxiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Btn',
      name: 'Btn',
      component: Btn
    },
    {
      path: '/axiosvue',
      name: 'axiosvue',
      component: axiosvue
    },
    {
      path: '/promisetest',
      name: 'promisetest',
      component: promisetest
    },
    {
      path: '/echartdot',
      name: 'echartdot',
      component: echartdot
    },
    {
      path: '/echartdotMap',
      name: 'echartdotMap',
      component: echartdotMap
    },
    {
      path: '/echartdotSingleAxiz',
      name: 'echartdotSingleAxiz',
      component: echartdotSingleAxiz
    }
  ]
})
