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
    <v-dialog style="border-radius: .8em" :retain-focus="false" light v-model="showDetail" width="66%" persistent
              content-class="photo__detail--dialog">
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
            <v-img :max-width="imageInfo.style.width / shrink" :max-height="imageInfo.style.height / shrink" alt="点击放大" style="cursor: zoom-in"
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
              <v-btn small depressed color="info" @click="showMore = true">
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
              color="primary"
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

    <!--详细信息-->
    <v-dialog light v-model="showMore" width="500px">
      <v-card class="show__more--content">
        <v-tabs background-color="indigo" dark v-model="tabValue" show-arrows>
          <v-tab href="#tab-person">
            摄影作者
          </v-tab>
          <v-tab href="#tab-photo">
            图片信息
          </v-tab>
          <v-tab href="#tab-statistics">
            统计
          </v-tab>
          <v-tab href="#tab-licence">
            许可证
          </v-tab>
          <v-tabs-items v-model="tabValue">
            <v-tab-item value="tab-person">
              <div class="d-flex justify-space-between align-center">
                <div class="show__more--author">
                  <v-avatar size="62" class="mr-2">
                    <v-img :src="authorInfo.avatar"/>
                  </v-avatar>
                  <div class="profile__text">
                    <h3 class="profile__text--title">{{ authorInfo.fullName }}</h3>
                    <h4 class="profile__text--subtitle">
                      {{ authorInfo.focus }} 位关注者 · {{ authorInfo.region }}
                    </h4>
                  </div>
                </div>
                <div class="show__more--action">
                  <v-btn small depressed>
                    关注
                  </v-btn>
                  <v-btn small depressed>
                    捐赠
                  </v-btn>
                </div>
              </div>
              <v-divider class="mt-5 mb-5"></v-divider>
              <v-subheader>TA 拍摄的更多图片</v-subheader>
              <div class="author_more__photo">
                <custom-image v-for="(v,i) in authorInfo.moreImages" :key="v.id" no-preview :width="112" :height="80"
                              :image="{url: v.src}"/>
              </div>
            </v-tab-item>
            <v-tab-item value="tab-photo">
              <span class="text-h5">{{ imageInfo.title }}</span>
              <v-subheader class="mt-3">上传日期：{{ $moment(imageInfo.uploadTime).format("YYYY年MM月DD日 HH:mm") }}
              </v-subheader>
              <v-list class="photo__more--list" max-width="380px">
                <v-list-item>
                  <v-list-item-content>镜头</v-list-item-content>
                  <v-list-item-content>
                    <span>{{ imageInfo.shot }}</span>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>大小</v-list-item-content>
                  <v-list-item-content>
                    <span>{{ imageInfo.size }}</span>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>分辨率</v-list-item-content>
                  <v-list-item-content>
                    <span>{{ imageInfo.dpi }}</span>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>使用相机</v-list-item-content>
                  <v-list-item-content>
                    <span>{{ imageInfo.camera }}</span>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>软件</v-list-item-content>
                  <v-list-item-content>
                    <span>{{ imageInfo.soft }}</span>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>拍摄时间</v-list-item-content>
                  <v-list-item-content>
                    <span>{{ imageInfo.shootTime }}</span>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>颜色</v-list-item-content>
                  <v-list-item-content class="d-inline-block">
                    <a :style="{background: v}" v-for="(v,i) in imageInfo.colors" :key="i"/>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-tab-item>
            <v-tab-item value="tab-statistics">
              <span class="text-h5">图片访问统计</span>
              <v-subheader class="mt-3">最后更新： {{imageInfo.statistics.lastTime}}</v-subheader>
              <v-list class="statistics__info">
                <v-list-item class="pa-0">
                  <v-list-item-content class="d-inline-block">
                    <span>
                      <v-icon size="14" style="color: inherit">
                        mdi-eye
                      </v-icon>
                      {{imageInfo.statistics.views}}
                    </span>
                    <span>
                      <v-icon size="14" style="color: inherit">
                        mdi-download
                      </v-icon>
                      {{imageInfo.statistics.download}}
                    </span>
                    <span>
                      <v-icon size="14" style="color: inherit">
                        mdi-cards-heart
                      </v-icon>
                      {{imageInfo.statistics.likes}}
                    </span>
                  </v-list-item-content>
                  <v-list-item-content class="text-right d-inline-block statistics__info--avatar">
                    <v-avatar size="32" v-for="(v,i) in imageInfo.statistics.avatarImages" :key="v.uid">
                      <v-img :src="v.src"/>
                    </v-avatar>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-tab-item>
            <v-tab-item value="tab-licence">
              <div v-if="imageInfo.free">
                <v-subheader>✓ 免费使用</v-subheader>
                <v-subheader>✓ 无需授权</v-subheader>
              </div>
              <div v-else>
                <v-subheader style="color: red">× 作者授权使用</v-subheader>
              </div>
              <v-subheader class="mt-2 justify-center">
                <a href="#" class="black--text text-decoration-underline">了解更多关于许可证的信息 »</a>
              </v-subheader>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card>
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
        region: '广西·柳州',
        moreImages: [
          {
            id: 74112,
            src: "https://images.pexels.com/photos/3851969/pexels-photo-3851969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            width: 500,
            height: 324
          },
          {
            id: 1145522,
            src: "https://images.pexels.com/photos/3875481/pexels-photo-3875481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            width: 500,
            height: 324
          },
          {
            id: 77441,
            src: "https://images.pexels.com/photos/5268321/pexels-photo-5268321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            width: 500,
            height: 324
          },
          {
            id: 11552,
            src: "https://images.pexels.com/photos/3933432/pexels-photo-3933432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            width: 500,
            height: 324
          }
        ]
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
        free: true,
        title: '女儿站在帆船上的女人',
        uploadTime: new Date(),
        size: '9.64 MB',
        soft: 'Adobe Photoshop CC 2017 (Windows)',
        colors: ['#000000', '#483d8b', '#696969', '#cd5c5c', '#d8bfd8'],
        shot: '165.0mm ƒ/2.8 0.00625s ISO 200',
        camera: 'Canon EOS 6D Mark II',
        shootTime: '2019年09月13日 15:23',
        wh: '2:3',
        dpi: '3847px x 5771px',
        statistics: {
          lastTime: '2021年12月13日 20:38',
          views: '35.8K',
          download: '12.2k',
          likes: '451',
          avatarImages: [
            {
              uid: 441556,
              src: 'https://images.pexels.com/users/avatars/1225460/mike-liu-649.jpeg?auto=compress&fit=crop&h=256&w=256'
            },
            {
              uid: 1456,
              src: 'https://images.pexels.com/users/avatars/1051702/mohamed-alsheikh-863.jpeg?auto=compress&fit=crop&h=256&w=256'
            },
            {
              uid: 2528757,
              src: 'https://images.pexels.com/users/avatars/3420876/razu-ahmed-845.jpeg?auto=compress&fit=crop&h=256&w=256'
            },
            {
              uid: 254242,
              src: 'https://images.pexels.com/users/avatars/2016519/marlon-alves-910.jpeg?auto=compress&fit=crop&h=256&w=256'
            },
            {
              uid: 35435,
              src: 'https://images.pexels.com/users/avatars/50965724/andrew-kostyrskiy-723.jpeg?auto=compress&fit=crop&h=256&w=256'
            }
          ]
        }
      },
      showMore: false,
      showFab: false,
      tabValue: 'tab-person'
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
      this.$viewerApi({
        images: [this.imageInfo.src]
      })
    },
    tabClose() {
      this.showMore = false
      this.tabValue = 'tab-person'
    }
  }
}
</script>

<style scoped>

</style>
