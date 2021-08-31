<template>
  <v-app-bar app :color="barColor" flat>
    <!--  容器    -->
    <v-container class="py-0 fill-height">
      <!--  LOGO   -->
      <a href="/">
        <v-avatar color="primary" rounded size="42">
          <span class="logo-span white--text">F</span>
        </v-avatar>
        <span class="logo-text">FanPixels</span>
      </a>
      <!--  间隔片  -->
      <v-spacer></v-spacer>
      <!--  右导航内容   -->
      <div class="app-bar--sub">
        <v-menu left transition="scale-transition" open-on-hover bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" v-bind="attrs" v-on="on">
              探索
            </v-btn>
          </template>
          <v-sheet class="app-bar--sub--list">
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Single-line item</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Two-line item</v-list-item-title>
                  <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>
<style lang="scss" src="@/assets/css/app__bar.scss"></style>
<script>
export default {
  name: "AppBar",
  data: () => ({
    // barColor: 'white'
    barColor: '#232a34'
  })
}
</script>
