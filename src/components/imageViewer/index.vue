<!--图片详情弹出框（通用）-->
<template>
  <div>
    <!--加载框-->
    <v-dialog v-model="showDetailLoading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text class="pt-3">
          数据加载中，请稍候...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--主体-->
    <v-dialog light v-model="showDetail" width="66%" persistent content-class="photo__detail--dialog">

      <v-toolbar dark src="/static/images/vbanner.jpg">
        <v-btn icon @click="closeDetail">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-export</v-icon>
              </v-btn>
            </template>
            <span>打开新标签页</span>
          </v-tooltip>
        </v-toolbar-items>
      </v-toolbar>

      <v-container class="mt-6 detail__image">
        <div class="detail__image--content">
          <div>
            <v-avatar size="128" class="mb-2">
              <img
                :src="authorInfo.avatar"
                :alt="authorInfo.fullName">
            </v-avatar>
            <h3 class="mb-1 sub__name">
              {{ authorInfo.fullName }}
              <v-icon color="primary" v-if="authorInfo.sex === 1">mdi-gender-male</v-icon>
              <v-icon color="pink" v-else>mdi-gender-female</v-icon>
            </h3>
            <div class="sub__info">
            <span>
              <v-icon>mdi-account-multiple-plus</v-icon>
              {{ authorInfo.focus }}人关注
            </span>
              <span>
              <v-icon>mdi-map-marker-outline</v-icon>
              {{ authorInfo.region }}
            </span>
            </div>
            <div>
              <v-btn small depressed color="success">
                关注
              </v-btn>
              <v-btn small depressed color="secondary">
                捐赠
              </v-btn>
            </div>
          </div>
          <div class="image__info mt-4">
            <v-img :max-width="imageInfo.style.width / shrink" :max-height="imageInfo.style.height / shrink"
                   :lazy-src="imageInfo.lazySrc"
                   :src="imageInfo.src" @click="viewImage">
            </v-img>
            <div class="sub__info image__info--sub mt-4">
            <span>
              <v-icon>mdi-eye</v-icon>
              {{ imageInfo.views }} 次浏览
            </span>
              <span>
              <v-icon>mdi-map-marker</v-icon>
              {{ imageInfo.place }}
            </span>
              <span v-if="imageInfo.free">
              <v-icon>mdi-checkbox-marked-circle</v-icon>
              免费使用
            </span>
              <span v-else style="color: red">
              <v-icon color="red">mdi-handshake</v-icon>
              商业授权
            </span>
            </div>
            <div>
              <v-btn small depressed>
                <v-icon small dense class="mr-1">
                  mdi-share
                </v-icon>
                分享
              </v-btn>
              <v-btn small depressed color="info">
                <v-icon small dense class="mr-1">
                  mdi-information-outline
                </v-icon>
                信息
              </v-btn>
            </div>
          </div>
        </div>
        <v-speed-dial
          v-model="showFab"
          bottom
          right
          absolute
          direction="left"
          transition="slide-x-reverse-transition"
        >
          <template v-slot:activator>
            <v-btn
              v-model="showFab"
              color="blue darken-2"
              dark
              small
              fab
            >
              <v-icon v-if="showFab" small>
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-dots-horizontal
              </v-icon>
            </v-btn>
          </template>
          <v-badge class="mr-2"
            bordered
            left
            color="error"
            content="99+"
            offset-x="60"
            offset-y="20"
          >
            <v-btn
              fab
              dark
              x-small
            >
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </v-badge>
          <v-badge
            bordered class="mr-2"
            left
            color="error"
            content="56"
            offset-x="50"
            offset-y="20"
          >
            <v-btn
              fab
              dark
              x-small
            >
              <v-icon>mdi-cards-heart-outline</v-icon>
            </v-btn>
          </v-badge>
          <v-btn
            fab
            dark class="mr-2"
            x-small
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-speed-dial>
      </v-container>

    </v-dialog>

    <v-dialog light v-model="showMore" max-width="460px">

    </v-dialog>
  </div>
</template>
<style src="../../assets/css/image_viewer.scss" lang="scss"></style>
<script>
export default {
  name: "ImageViewer",
  props: {
    shrink: { // 图像收缩倍数
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      showDetailLoading: false,
      showDetail: false,
      images: [],
      authorInfo: {
        id: 44556652,
        fullName: '猪大肠',
        sex: 1,
        avatar: 'https://images.pexels.com/users/avatars/894518/lola-russian-313.jpeg?auto=compress&fit=crop&h=256&w=256',
        focus: '45万',
        region: '广西·柳州'
      },
      imageInfo: {
        src: 'https://images.pexels.com/photos/5102845/pexels-photo-5102845.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        lazySrc: 'https://picsum.photos/10/6?image=15',
        style: {
          width: 4256,
          height: 2832
        },
        views: '14.6 千',
        place: '广西壮族自治区南宁市宾阳县白鹤观观景台A',
        free: true
      },
      showMore: false,
      showFab: false
    }
  },
  methods: {
    openDetail(row) {
      this.showDetailLoading = true
      setTimeout(() => {
        this.showDetailLoading = false
        this.showDetail = true
      }, 1400)
    },
    closeDetail() {
      this.showDetail = false
    },
    viewImage() {
      this.images.push(this.imageInfo.src)
      this.$viewerApi({
        images: this.images,
        hide() {
          this.images = []
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
