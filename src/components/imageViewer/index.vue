<!--图片详情弹出框（通用）-->
<template>
<div>
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

  <v-dialog light v-model="showDetail" width="70%" persistent content-class="photo__detail--dialog"
            transition="dialog-bottom-transition">
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="closeDetail">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text>
          196 人点赞
        </v-btn>
        <v-btn dark text>
          加入收藏夹
        </v-btn>
        <v-btn dark text>
          免费下载
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container class="mt-6">
      <div class="detail__image--content">
        <div>
          <v-avatar size="128" class="mb-2">
            <img
              :src="authorInfo.avatar"
              :alt="authorInfo.fullName">
          </v-avatar>
          <h3 class="mb-1 sub__name">
            {{authorInfo.fullName}}
            <v-icon color="primary" v-if="authorInfo.sex === 1">mdi-gender-male</v-icon>
            <v-icon color="pink" v-else>mdi-gender-female</v-icon>
          </h3>
          <div class="sub__info">
            <span>
              <v-icon>mdi-account-multiple-plus</v-icon>
              {{authorInfo.focus}}人关注
            </span>
            <span>
              <v-icon>mdi-map-marker-outline</v-icon>
              {{authorInfo.region}}
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
          <v-img :max-width="imageInfo.style.width / shrink" :max-height="imageInfo.style.height / shrink" :lazy-src="imageInfo.lazySrc"
                 :src="imageInfo.src" @click="viewImage">
          </v-img>
        </div>
      </div>
    </v-container>
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
  data(){
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
        }
      }
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
    viewImage(){
      this.images.push(this.imageInfo.src)
      this.$viewerApi({
        images: this.images,
        hide(){
          this.images = []
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
