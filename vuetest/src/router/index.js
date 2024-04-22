import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Btn from '@/components/btn'
import axiosvue from '@/components/axios'
import promisetest from '@/components/promisetest'

import echartdot from '@/components/echartdot'
import echartdotMap from '@/components/echartdotMap'
import echartdotSingleAxiz from '@/components/echartdotSingleAxiz'
import echartdAiq from '@/components/echartdAiq'
import echartdotChinaMap from '@/components/echartdotChinaMap'
import echartChinaGEOMap from '@/components/echartChinaGEOMap'
import echartRailwayMap from '@/components/map/echartRailwayMap'
import echartRailwayLineMap from '@/components/map/echartRailwayLineMap'
import echartNetMap from '@/components/map/echartNetMap'
import edittable from '@/components/edittable'
import edittable2 from '@/components/edittable2'
import monthdata from '@/components/monthdata'
import edittable3 from '@/components/edittable3'
import avatartest from '@/components/avatartest'

import lrcshow from '@/components/lrcshow'
import house from '@/components/house'
import animation from '@/components/animationtest/animation'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/animation',
      name: 'animation',
      component: animation
    },
    {
      path: '/lrcshow',
      name: 'lrcshow',
      component: lrcshow
    },
    {
      path: '/house',
      name: 'house',
      component: house
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/avatartest',
      name: 'avatartest',
      component: avatartest
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
    } ,
    {
      path: '/echartdAiq',
      name: 'echartdAiq',
      component: echartdAiq
    },
    {
      path: '/echartdotChinaMap',
      name: 'echartdotChinaMap',
      component: echartdotChinaMap
    } ,
    {
      path: '/echartChinaGEOMap',
      name: 'echartChinaGEOMap',
      component: echartChinaGEOMap
    },
    {
      path: '/echartRailwayMap',
      name: 'echartRailwayMap',
      component: echartRailwayMap
    },
    {
      path: '/echartRailwayLineMap',
      name: 'echartRailwayLineMap',
      component: echartRailwayLineMap
    },
    {
      path: '/echartNetMap',
      name: 'echartNetMap',
      component: echartNetMap
    },
    {
      path: '/edittable',
      name: 'edittable',
      component: edittable
    },
    {
      path: '/monthdata',
      name: 'monthdata',
      component: monthdata
    },
    {
      path: '/edittable2',
      name: 'edittable2',
      component: edittable2
    },
    {
      path: '/edittable3',
      name: 'edittable3',
      component: edittable3
    },
  ]
})
