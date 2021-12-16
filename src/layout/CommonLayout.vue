<!--通用模板页 2021年12月15日19:01:02 -->
<template>
  <v-app>
    <!-- 导航栏  -->
    <bar ref="app_bar"/>
    <!-- 内容主体   -->
    <v-main :style="{backgroundColor: '#eaeaea'}" class="pa-0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import bar from './components/AppBar'
export default {
  name: "CommonLayout",
  components: {bar},
  methods: {

  }
}
</script>

<style scoped>

</style>
