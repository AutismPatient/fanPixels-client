import router from "@/router/index"

import {sumTitle} from '@/setting'

/* 路由发生变化修改页面title */
let beforeEach = router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + sumTitle
  }
  next()
})
