// 仅用于函数式调用 2021年12月14日14:47:02
import Vue from 'vue'
import Login from './login.vue'

let EditionTipConstructor = Vue.extend(Login)
let instance
const editionTip = function(options = {}) {
  instance = new EditionTipConstructor({
    data: options
  })
  document.body.appendChild(instance.$mount().$el)
}

export default editionTip
