<!-- 模板页(homeLayout) -->
<template>
  <v-app>
    <!-- 导航栏  -->
    <bar/>
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
  components: {bar}
}
</script>

<style scoped>

</style>
