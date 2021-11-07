import Vue from 'vue'
import Router from 'vue-router'

import home from "../views/home/index"
import homeLayout from '@/layout/HomeLayout'

Vue.use(Router)

const routes = [
  {
    name: 'layout',
    path: '/',
    component: homeLayout,
    redirect: 'index',
    children: [
      {
        path: '/index',
        component: home,
        name: '首页',
        meta: {title: '首页'}
      }
    ]
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: routes,
})
