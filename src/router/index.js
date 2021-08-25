import Vue from 'vue'
import Router from 'vue-router'

// import goTo from 'vuetify/lib/services/goto'

Vue.use(Router)

const routes = [
  {
    name: 'test',
    path: "/",
    meta: {title: '你好世界', icon: ''},
    component: (resolve) => require(['@/views/HelloWorld'], resolve),
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  // scrollBehavior: (to, from, savedPosition) => {
  //   let scrollTo = 0
  //
  //   if (to.hash) {
  //     scrollTo = to.hash
  //   } else if (savedPosition) {
  //     scrollTo = savedPosition.y
  //   }
  //
  //   return goTo(scrollTo)
  // },
  routes: routes,
})
