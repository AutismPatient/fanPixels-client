<template>
  <div>
    <!--  导航栏  -->
    <v-app-bar app flat light>
      <!--  LOGO   -->
      <a href="/">
        <span class="logo-text">FAN PIXELS</span>
      </a>
      <!--  间隔片  -->
      <v-spacer></v-spacer>
      <!--  右导航内容   -->
      <div class="app-bar--sub">
        <v-menu transition="slide-y-transition" offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="secondary" v-bind="attrs" v-on="on">
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
        <v-menu transition="slide-y-transition" offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              许可证
            </v-btn>
          </template>
          <v-sheet class="app-bar--sub--list" elevation="4" rounded>
            <v-list dense max-width="200px">
              <v-subheader class="font-weight-black">FanPixels</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-btn block text small>关于我们</v-btn>
                  <v-btn block text small>隐私政策</v-btn>
                  <v-btn block text small>责任声明</v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-menu>
        <v-menu transition="slide-y-transition" offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" icon>
              <v-icon size="24">mdi-bell-badge-outline</v-icon>
            </v-btn>
          </template>
          <v-sheet class="app-bar--sub--list" elevation="4" rounded>

          </v-sheet>
        </v-menu>
        <v-btn text icon>
          <v-icon size="24">mdi-cog-outline</v-icon>
        </v-btn>
        <v-menu transition="slide-y-transition" offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" icon>
              <v-avatar
                size="24"
              ><img
                src="https://images.pexels.com/users/avatars/3790863/zeyun-meng-696.jpeg?auto=compress&fit=crop&h=60&w=60"
                alt="猪大肠"></v-avatar>
            </v-btn>
          </template>
          <v-sheet class="app-bar--sub--list" elevation="4" rounded>
            <v-list dense max-width="200px">
              <v-subheader class="font-weight-black">猪大肠 <br/> (1010014622@qq.com)</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-btn block text small>个人资料</v-btn>
                  <v-btn block text small>我的收藏夹</v-btn>
                  <v-btn block text small>设置</v-btn>
                  <v-btn block text small>更改语言</v-btn>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="mt-3 mb-2 ml-2 mr-n2"></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-btn block text small color="error">注销当前账户</v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-menu>

        <v-btn depressed outlined color="indigo" small  class="ml-2">
          上传内容
        </v-btn>
      </div>
    </v-app-bar>

  </div>
</template>
<style lang="scss" src="@/assets/css/app__bar.scss"></style>
<script>
export default {
  name: "AppBar",
  data: () => ({

  }),
  mounted() {
  },
  methods: {}
}
</script>
