<template>
  <div>
    <!--  导航栏  -->
    <v-app-bar app :flat="!showOffset && isOffset" light :absolute="!fixed" :fixed="fixed" :class="!showOffset && isOffset ? 'offset__class': ''"
               :style="{backgroundColor: showOffset && isOffset ? '#232a34':'transparent'}">
      <!--  LOGO   -->
      <a href="/">
        <span class="logo-text">FAN <br/> PIXELS</span>
      </a>
      <SearchBar v-if="showOffset && isOffset" class="ml-8"/>
      <!--  间隔片  -->
      <v-spacer></v-spacer>

<!--      <v-divider v-if="showOffset && isOffset" inset vertical class="mr-5 ml-5 mt-5" style="height: 16px;background-color: white"></v-divider>-->
      <!--  右导航内容   -->
      <div class="app-bar--sub app-nav--content">
        <!--  探索      -->
        <v-menu transition="slide-y-transition" offset-y left open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" v-bind="attrs" v-on="on">
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
            <v-btn text v-bind="attrs" v-on="on" color="white">
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
            <v-btn text v-bind="attrs" v-on="on" icon color="white">
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
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text icon @click="openSetting" v-bind="attrs" v-on="on" color="white">
              <v-icon size="24">mdi-cog-outline</v-icon>
            </v-btn>
          </template>
          <span>设置</span>
        </v-tooltip>
        <!--  个人信息      -->
        <v-menu transition="slide-y-transition" v-if="isLogin" offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" icon color="white">
              <v-avatar
                size="24" class="border-2"
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
          {{ loginText }}
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
    <NavBarSetting ref="setting"/>
  </div>
</template>
<style lang="scss" src="../../assets/css/app__bar.scss"></style>
<script>
import SearchBar from '@/components/search/SearchBar'
import NavBarSetting from "@/layout/components/NavBarSetting"

export default {
  name: "AppBar",
  components: {
    SearchBar, NavBarSetting
  },
  props: {
    fixed: { // 布局形式是否为 fixed 否则为 absolute
      type: Boolean,
      default: true
    },
    isOffset: { // 是否开启程序滚动检测
      type: Boolean,
      default: false
    }
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
    showOffset: false // 显示控制
  }),
  mounted() {
  },
  methods: {
    openSetting() {
      this.$refs.setting.open()
    },
    offset() {
      this.showOffset = true
    },
    closeOffset() {
      this.showOffset = false
    }
  }
}
</script>
