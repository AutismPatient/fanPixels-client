// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import '@/assets/js/filter'
import store from "@/store"

import 'viewerjs/dist/viewer.css'
import viewer from 'v-viewer'
Vue.use(viewer,{
  defaultOptions: {
    zIndex: 2015
  }
})

import ci from "@/components/customImage";
Vue.use(ci)

import moment from 'moment'

Vue.prototype.$moment = moment

moment.locale('zh-cn')

import login from '@/components/login/login'
Vue.prototype.$login = login

import '@/assets/css/index.scss'

import scrollLoadMore from './directive/scrollDirective'
Vue.directive('scroll-load-more', scrollLoadMore)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')
