<!--APP.vue 入口 -->
<template>
  <v-app id="app" class="fp-main" v-scroll="onScroll">
    <router-view/>
    <!-- 回到顶部按钮 -->
    <v-btn large dark color="primary" fab bottom right fixed v-show="showTop" @click="goto">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>
<script>
import {sayHello} from '@/assets/js/console'
import {getTargetValue} from "@/utils/directiveUtils";
export default {
  name: 'App',
  data(){
    return {
      showTop: false
    }
  },
  mounted() {
    sayHello()
  },
  methods: {
    onScroll(e){
      this.showTop = getTargetValue(e.target) > 300
    },
    goto(){
      this.$vuetify.goTo(0)
    }
  }
}
</script>
