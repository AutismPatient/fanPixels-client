<!--通用登录注册弹出框-->
<template>
  <v-dialog persistent v-model="showLogin" content-class="login__dialog" width="768px">
    <v-card height="600px">
      <div class="d-flex login__dialog--main">
        <div class="login__dialog--action">
          <div class="pa-8 flex-grow-1">
            <div v-show="loginStep === 1">
              <span class="text-h5">只需几秒即可登录或注册</span>
              <v-subheader class="mt-3 mb-3 pa-0">使用你的电子邮件或其他方式登陆或注册 FanPixels（完全免费）！</v-subheader>
              <div class="login__dialog--action--external mb-3">
                <v-btn icon outlined large color="green">
                  <v-icon>mdi-wechat</v-icon>
                </v-btn>
                <v-btn icon outlined large color="red">
                  <v-icon>mdi-qqchat</v-icon>
                </v-btn>
                <v-btn icon outlined large color="black">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </div>
              <v-btn color="primary" block depressed class="mb-3" @click="loginStep ++">
                用电子邮件或手机号登录
              </v-btn>
              <v-subheader class="pa-0">
                <small>继续即表示你同意 FanPixels 的<a class="text-decoration-underline black--text">使用条款</a>。请阅读我们的<a
                  class="text-decoration-underline black--text">隐私政策</a>。</small>
              </v-subheader>
            </div>
            <div v-show="loginStep === 2">
                <span class="text-h5">
                    <v-btn icon @click="loginStep --" color="black">
                      <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                  手机号或电子邮箱登录
                </span>
              <v-text-field class="mt-6 mb-6"
                            label="电话号码或电子邮件" autofocus clearable
                            persistent-hint
                            hide-details
                            outlined
                            dense
              ></v-text-field>
              <v-btn color="primary" block depressed @click="loginStep ++">
                继续
              </v-btn>
            </div>
            <div v-show="loginStep === 3">
                <span class="text-h5">
                    <v-btn icon @click="loginStep --" color="black">
                      <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                  创建账户
                </span>
              <v-text-field class="mt-3 mb-3"
                            label="填写展示昵称"
                            hint="使用 +86 18269145680 注册" clearable
                            persistent-hint
                            outlined
                            dense
              ></v-text-field>
              <v-btn color="success" block depressed @click="loginStep = 1">
                开始探索！
              </v-btn>
              <v-subheader class="pa-0">
                <small>继续即表示你同意 FanPixels 的<a class="text-decoration-underline black--text">使用条款</a>。请阅读我们的<a
                  class="text-decoration-underline black--text">隐私政策</a>。</small>
              </v-subheader>
            </div>
          </div>
        </div>
        <div class="login__dialog--image">
          <v-img
            src="https://images.pexels.com/photos/9297974/pexels-photo-9297974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></v-img>
        </div>
      </div>
    </v-card>
    <div class="login__dialog--close-btn">
      <v-btn dark color="white" icon>
        <v-icon small>
          mdi-share
        </v-icon>
      </v-btn>
      <v-btn dark color="white" icon @click="hide">
        <v-icon small>
          mdi-close
        </v-icon>
      </v-btn>
    </div>
  </v-dialog>
</template>
<style lang="scss" src="../../assets/css/login.scss"></style>
<script>
export default {
  name: "login",
  data() {
    return {
      showLogin: false,
      loginStep: 1
    }
  },
  methods: {
    show(){
      this.showLogin = true
    },
    hide(){
      this.showLogin = false
      this.loginStep = 1
    }
  }
}
</script>
