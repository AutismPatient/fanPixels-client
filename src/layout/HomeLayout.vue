<!-- 模板页(homeLayout) -->
<template>
  <v-app>
    <!-- 导航栏  -->
    <bar/>
    <!-- 内容主体   -->
    <v-main style="background-color: #e4e6f3">
      <v-container>
        <router-view/>
      </v-container>
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
