import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Vheader from '@/components/Vheader'



//首页展示 home


Vue.use(Router)

export default new Router({
  mode: "hash",

  routes: [ 
    {
      path: '/',
      redirect:'/index',
    },
    {
      path: '/index',
      component: Hello
    }
  ]
})
