<template>
  <div>
    <!--  导航栏  -->
    <v-app-bar app flat light color="white">
      <!--  LOGO   -->
      <a href="/">
        <span class="logo-text">FAN <br /> PIXELS</span>
      </a>
      <!--  间隔片  -->
      <v-spacer></v-spacer>
      <SearchBar />
      <v-divider inset vertical class="mr-5 ml-5 mt-5" style="height: 16px"></v-divider>
      <!--  右导航内容   -->
      <div class="app-bar--sub app-nav--content">
        <!--  探索      -->
        <v-menu transition="slide-y-transition" offset-y left open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="secondary" v-bind="attrs" v-on="on" class="text--secondary">
              探索
            </v-btn>
          </template>
          <v-sheet class="app-bar--sub--list" rounded>
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
        <!--  许可证      -->
        <v-menu transition="slide-y-transition" offset-y left open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" class="text--secondary">
              许可证
            </v-btn>
          </template>
          <v-sheet class="app-bar--sub--list" rounded>
            <v-list dense width="100px">
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
        <!--  我的消息      -->
        <v-menu transition="slide-y-transition" offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" icon>
              <v-icon size="24">mdi-bell-badge-outline</v-icon>
            </v-btn>
          </template>
          <v-sheet class="bar-msg" roundedc max-width="500px">
            <v-toolbar color="primary" dark short>
              <v-toolbar-title>我的消息 （15 未读）</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-expand-all</v-icon>
                  </v-btn>
                </template>
                <span>查看全部</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on" @click.stop="dialogMessage = true">
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                  </v-btn>
                </template>
                <span>全部已读</span>
              </v-tooltip>
            </v-toolbar>
            <v-list two-line dense>
              <v-list-item-group>
                <template v-for="(item, index) in messageData">
                  <v-list-item :key="item.title">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>

                        <v-list-item-subtitle
                          class="bar-msg--subtitle"
                          v-text="item.headline"
                        ></v-list-item-subtitle>

                        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index < messageData.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </v-menu>
        <!--  系统设置      -->
        <v-btn text icon @click="showDrawer = true">
          <v-icon size="24">mdi-cog-outline</v-icon>
        </v-btn>
        <!--  个人信息      -->
        <v-menu transition="slide-y-transition" v-if="isLogin" offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" icon>
              <v-avatar
                size="24"
              ><img
                src="https://images.pexels.com/users/avatars/3790863/zeyun-meng-696.jpeg?auto=compress&fit=crop&h=60&w=60"
                alt="猪大肠"></v-avatar>
            </v-btn>
          </template>
          <v-sheet class="app-bar--sub--list" elevation="1" rounded>
            <v-list dense width="160px">
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
                <v-list-item-content class="pb-0">
                  <v-btn block text small color="error">注销当前账户</v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-menu>

        <!--  登录或上传内容    -->
        <v-btn depressed color="primary" small class="ml-2">
          {{loginText}}
        </v-btn>
      </div>
    </v-app-bar>
    <!-- 消息确认框   -->
    <v-dialog
      v-model="dialogMessage" persistent max-width="300px"
    >
      <v-card>
        <v-card-title>
          确认要清除所有未读消息吗?
        </v-card-title>

        <v-card-text>
          包含 15 条未读消息
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="dialogMessage = false"
          >
            取消
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialogMessage = false"
          >
            确认
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 系统设置导航抽屉   -->
    <v-navigation-drawer width="300px" right fixed temporary hide-overlay flat v-model="showDrawer" class="drawer_content">
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
        <v-btn-toggle class="pl-3 pr-3" style="display: inline-block" v-model="toggleTheme" color="primary" group background-color="#ddd">
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
      <div class="mt-2 mb-3 mx-n3"><v-divider></v-divider></div>
      <div class="pl-3 pr-3">
        <v-btn block color="primary" depressed>
          重新恢复默认
        </v-btn>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<style lang="scss" src="../../assets/css/app__bar.scss"></style>
<script>
import SearchBar from '@/layout/components/SearchBar'
export default {
  name: "AppBar",
  components: {
    SearchBar
  },
  data: () => ({
    messageData: [
      {
        action: '15 分钟前',
        headline: '来自 YU-889',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: '永续合约止盈止损触发提醒【统一账户】',
      }
    ],
    isLogin: true,
    loginText: '上传内容',
    dialogMessage: false,
    showDrawer: false,
    toggleFont: 'system',
    fontList: [
      'system','simSun'
    ],
    toggleTheme: 'light',
    themeList: [
      'light',
      'dark',
      'system',
      'mixture'
    ]
  }),
  mounted() {
  },
  methods: {}
}
</script>
