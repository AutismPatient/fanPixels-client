// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import '@/assets/js/filter'
import store from "@/store"

import '@/assets/css/index.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')
