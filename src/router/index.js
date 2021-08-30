import Vue from 'vue'
import Router from 'vue-router'

import demo from "../views/home/index";
import helloWorld from "../views/HelloWorld"

Vue.use(Router)

const routes = [
  {
    name: 'test',
    path: "/",
    meta: {title: '你好世界', icon: ''},
    component: helloWorld,
  },
  {
    name: 'demo',
    path: '/demo',
    meta: {title: "demo"},
    component: demo
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: routes,
})
