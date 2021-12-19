// 仅用于函数式调用 2021年12月14日14:47:02
import login from './login.vue'

const a_login = {
  install: function (Vue) {
    Vue.component('login',login)
  }
}

export default a_login
