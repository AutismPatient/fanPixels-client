<!--通用分享-->
<template>
  <v-dialog v-model="show" content-class="share__dialog" width="640px">
    <v-card class="pa-8">
      <div class="text-center">
        <v-avatar size="68">
          <v-img src="https://images.pexels.com/users/avatars/3141959/sergey-makashin-492.jpeg?auto=compress&fit=crop&h=256&w=256"></v-img>
        </v-avatar>
        <div class="text-h5 mt-4 mb-2">对 朱大肠 表示感谢</div>
        <v-subheader>我们的创作者喜欢收到你的反馈，以及了解你如何使用他们的图片。通过捐赠、发推文和关注来表达你的欣赏和感谢吧！</v-subheader>

        <div class="mt-4">
          <v-btn color="green" dark outlined>
            <v-icon>mdi-wechat</v-icon> 微信
          </v-btn>
          <v-btn color="blue darken-1" outlined>
            <v-icon>mdi-credit-card-outline</v-icon> 支付宝
          </v-btn>
        </div>
        <v-divider class="mt-8 mb-8"></v-divider>
      </div>

      <div class="share__dialog--photo">
        <h4>分享图片</h4>
        <div class="share__btn">
          <div class="share__btn-item">
            <v-btn icon large outlined color="primary" dark>
              <v-icon size="22">mdi-twitter</v-icon>
            </v-btn>
            <span>Twitter</span>
          </div>
          <div class="share__btn-item">
            <v-btn icon large outlined color="indigo" dark>
              <v-icon size="22">mdi-facebook</v-icon>
            </v-btn>
            <span>Facebook</span>
          </div>
          <div class="share__btn-item">
            <v-btn icon large outlined color="red" dark>
              <v-icon size="22">mdi-qqchat</v-icon>
            </v-btn>
            <span>QQ</span>
          </div>
          <div class="share__btn-item">
            <v-btn icon large outlined color="pink" dark>
              <v-icon size="22">mdi-sina-weibo</v-icon>
            </v-btn>
            <span>微博</span>
          </div>
          <div class="share__btn-item">
            <v-btn icon large outlined color="black">
              <v-icon size="22">mdi-email</v-icon>
            </v-btn>
            <span>Email</span>
          </div>
        </div>
        <v-subheader class="pl-0 mt-2">设置一个返回此图片的链接。你可以使用以下文本:</v-subheader>
        <div class="share__dialog--copy">
          <div class="copy--title"><strong><a href="#" class="black--text">FanPixels</a></strong> 上的 <strong><a href="#" class="black--text">朱大肠</a></strong> 拍摄的图片</div>
          <div class="d-inline-block float-right">
            <v-btn small dark color="grey darken-3">复制</v-btn>
          </div>
        </div>
        <v-subheader class="mt-2 justify-center">
          <a href="#" class="text--secondary text-decoration-underline">如果下载没有自动开始，请单击此处»</a>
        </v-subheader>
      </div>

      <v-btn icon class="share__dialog--close" @click="hideD">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card>
  </v-dialog>
</template>
<style lang="scss" src="../../assets/css/share.scss"></style>
<script>
export default {
  name: "share",
  props: {
    info: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showD() {
      this.show = true
    },
    hideD() {
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
