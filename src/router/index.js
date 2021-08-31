import Vue from 'vue'
import Router from 'vue-router'

import home from "../views/home/index";
import helloWorld from "../views/HelloWorld"

Vue.use(Router)

const routes = [
  {
    name: 'test',
    path: "/hello",
    meta: {title: '你好世界', icon: ''},
    component: helloWorld,
  },
  {
    name: 'index',
    path: '/',
    meta: {title: "首页"},
    component: home
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: routes,
})
