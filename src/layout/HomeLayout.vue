<!-- 模板页(homeLayout) -->
<template>
  <v-app v-scroll="onScroll">
    <!-- 导航栏  -->
    <bar is-offset ref="app_bar"/>
    <!-- 内容主体   -->
    <v-main :style="{backgroundColor: '#eaeaea'}" class="pa-0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import bar from './components/AppBar'

export default {
  name: "HomeLayout",
  components: {bar},
  methods: {
    onScroll(e) {
      if (this.getScrollTop() > 300) {
        this.$refs.app_bar.offset()
      } else {
        this.$refs.app_bar.closeOffset()
      }
    },
    getScrollTop(){
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    }
  }
}
</script>

<style scoped>

</style>
