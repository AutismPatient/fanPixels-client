<template>
  <v-app-bar app flat dark>
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
        <v-menu transition="slide-y-transition" offset-y bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white"  v-bind="attrs" v-on="on" class="ma-1" plain>
              探索
            </v-btn>
          </template>
          <v-sheet class="app-bar--sub--list" elevation="4" rounded>
            <v-list dense max-width="200px">
              <v-subheader class="font-weight-black">探索发现</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-btn block text small>精美图片</v-btn>
                  <v-btn block text small>超热门视频</v-btn>
                  <v-btn block text small>热门搜索</v-btn>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="mt-3 mb-2 ml-2 mr-n2"></v-divider>
              <v-subheader class="font-weight-black">活动与竞技</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-btn block text small>创作者排行榜</v-btn>
                  <v-btn block text small>挑战赛</v-btn>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="mt-3 mb-2 ml-2 mr-n2"></v-divider>
              <v-subheader class="font-weight-black">资源与链接</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-btn block text small>fanPixels 官方博客</v-btn>
                  <v-btn block text small>问题反馈</v-btn>
                  <v-btn block text small color="error">在 github 上提 issues</v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-menu>
        <v-btn text color="white">
          许可证
        </v-btn>
        <v-menu transition="slide-y-transition" offset-y bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" v-bind="attrs" v-on="on">
              <v-avatar
                size="24"
              ><img src="https://images.pexels.com/users/avatars/3790863/zeyun-meng-696.jpeg?auto=compress&fit=crop&h=60&w=60" alt="猪大肠"></v-avatar>
<!--              <v-icon>mdi-account</v-icon>-->
            </v-btn>
          </template>
          <v-sheet class="app-bar--sub--list">

          </v-sheet>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>
<style lang="scss" src="@/assets/css/app__bar.scss"></style>
<script>
// import { mdiChevronDown } from '@mdi/js';
export default {
  name: "AppBar",
  data: () => ({
    // barColor: 'white'
    barColor: '#232a34'
  })
}
</script>
