import customImage from '@/components/customImage/index.vue'

const ci = {
  install: function (Vue) {
    Vue.component('customImage',customImage)
  }
}

export default ci
