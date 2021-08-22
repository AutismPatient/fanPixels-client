/**
 * vuetify 配置项
 */
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// 一个包含修改全局引导配置的对象
Vuetify.config.silent = true

Vue.use(Vuetify)

const opts = {
  rtl: false, // 语言双向性 true(从右到左)
  theme: { dark: false }, // 主题
}

export default new Vuetify(opts)
