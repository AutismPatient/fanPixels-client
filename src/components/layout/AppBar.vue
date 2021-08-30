<template>
  <v-app-bar app :color="barColor" flat>
    <!--  容器    -->
    <v-container class="py-0 fill-height">
      <a href="/">
        <v-avatar color="primary" rounded size="42">
          <span class="logo-span white--text">F<small>an</small></span>
        </v-avatar>
        <span class="logo-text">FanPixels</span>
      </a>
      <!--  间隔片  -->
      <v-spacer></v-spacer>
    </v-container>
  </v-app-bar>
</template>
<style lang="scss" src="@/assets/css/app__bar.scss"></style>
<script>
export default {
  name: "AppBar",
  data: ()=> ({
    // barColor: 'white'
    barColor: '#232a34'
  })
}
</script>
