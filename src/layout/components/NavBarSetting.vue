<!--系统设置组件-->
<template>
  <v-navigation-drawer width="300px" right fixed temporary hide-overlay flat v-model="showDrawer"
                       class="drawer_content">
    <v-toolbar outlined>
      <v-toolbar-title>
        个性化设置
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="showDrawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <div>
      <div class="drawer_content--sub--title">
        <v-subheader>系统字体</v-subheader>
      </div>
      <v-btn-toggle class="pl-3 pr-3" v-model="toggleFont" color="primary" group>
        <v-btn :value="fontList[0]" large>
          默认
          <v-icon>mdi-format-size</v-icon>
        </v-btn>
        <v-btn :value="fontList[1]" large>
          宋体
          <v-icon>mdi-format-font</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
    <div class="mt-2 mb-3 mx-n3">
      <v-divider></v-divider>
    </div>
    <div>
      <div class="drawer_content--sub--title">
        <v-subheader>主题</v-subheader>
      </div>
      <v-btn-toggle class="pl-3 pr-3" style="display: inline-block" v-model="toggleTheme" color="primary" group
                    background-color="#ddd">
        <v-btn :value="themeList[0]" large>
          浅色主题
          <v-icon>mdi-white-balance-sunny</v-icon>
        </v-btn>
        <v-btn :value="themeList[1]" large>
          黑色主题
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
        <v-btn :value="themeList[2]" large>
          跟随系统
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
        <v-btn :value="themeList[3]" large>
          混合主题
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
    <div class="mt-2 mb-3 mx-n3">
      <v-divider></v-divider>
    </div>
    <div class="pl-3 pr-3">
      <v-btn block color="primary" depressed>
        重新恢复默认
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavBarSetting",
  data() {
    return {
      showDrawer: false,
      toggleFont: 'system',
      fontList: [
        'system', 'simSun'
      ],
      toggleTheme: 'light',
      themeList: [
        'light',
        'dark',
        'system',
        'mixture'
      ]
    }
  },
  methods: {
    open() {
      this.showDrawer = true
    }
  }
}
</script>

<style scoped>

</style>
