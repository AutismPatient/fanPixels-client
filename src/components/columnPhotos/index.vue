<!-- 通用瀑布流组件（响应式） -->
<template>
  <div class="column__photos-main"
       v-scroll-load-more="{ body: true,handle: scrollFunc, name: '.column__photos-main > .photos'}">
    <v-row justify="space-between">
      <v-col md="4">
        <v-subheader>
          {{ title }}
        </v-subheader>
      </v-col>
      <v-col md="4" class="text-right">
        <v-menu rounded="0">
          <template v-slot:activator="{on,attr}">
            <v-btn text v-on="on" v-bind="attr" tile>
              {{ activeSort.title }}
              <v-icon class="ml-1">mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group color="primary" mandatory v-model="activeSort.query">
              <v-list-item v-for="item in sort" :key="item.query" link>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <!-- 图片视频区 -->
    <div class="photos">
      <!--  每一列(动态)  -->
      <div class="photos__column" v-for="(item,i) in columnPhotos" :key="i">
        <v-card v-for="(p,pi) in item.data" :key="pi">
          <article @click="openDetail(p.title)"
                   :style="{paddingTop: (p.image.height / p.image.width) * 100 + '%'}">
            <a :style="{background: p.background}">
              <img :src="p.image.url" :alt="p.title"/>
            </a>
            <div class="photos__info d-flex align-center justify-space-between">
              <div class="author-info">
                <v-avatar size="30" class="mr-1">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>
                <span>Kseniya kiosk</span>
              </div>
              <div class="other-action">
                <v-btn icon>
                  <v-icon>mdi-download</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-plus-circle-outline</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-cards-heart-outline</v-icon>
                </v-btn>
              </div>
            </div>
          </article>
        </v-card>
      </div>
    </div>
    <!-- 底部加载区 -->
    <div class="photos__loading pa-2" v-if="showMore && lazy && loading">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
    <div v-else-if="showMore && !lazy" class="ma-4">
      <v-btn
        block
        :loading="loading"
        :disabled="loading"
        color="primary"
        @click="getData"
      >
        加载更多数据
        <template v-slot:loader>
          <span>加载中...</span>
        </template>
      </v-btn>
    </div>

    <!-- 弹出框 -->
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

    <v-dialog light v-model="showDetail" fullscreen content-class="photo__detail--dialog"
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
              <img src="https://images.pexels.com/users/avatars/894518/lola-russian-313.jpeg?auto=compress&fit=crop&h=256&w=256" alt="John">
            </v-avatar>
            <h3 class="mb-1 sub__name">
              朱大肠
              <v-icon color="primary">mdi-gender-male</v-icon>
              <!--<v-icon color="pink">mdi-gender-female</v-icon>-->
            </h3>
            <div class="sub__info">
            <span>
              <v-icon>mdi-account-multiple-plus</v-icon>
              45万人关注
            </span>
              <span>
              <v-icon>mdi-map-marker-outline</v-icon>
              广西·柳州
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
            <v-img :style="{maxWidth: 4256 / 4}" src="https://images.pexels.com/photos/1002536/pexels-photo-1002536.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></v-img>
          </div>
        </div>
      </v-container>
    </v-dialog>
  </div>
</template>
<style src="../../assets/css/column_photos.scss" lang="scss"></style>
<script>
export default {
  name: "ColumnPhotos",
  props: {
    title: {
      type: String,
      default: '免费素材图片'
    },
    lazy: { // 是否开启懒加载
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return {
      columns: 4,
      columnPhotos: [],
      clientWidth: document.body.clientWidth,
      activeSort: {
        title: '热门人气',
        query: 'hot'
      },
      sort: [
        {
          title: '热门人气',
          query: 'hot'
        },
        {
          title: '最新',
          query: 'newest'
        }
      ],
      showMore: false,
      loading: false,
      loader: null,
      showDetail: false,
      showDetailLoading: false
    }
  },
  mounted() {
    this.judgeWidth(this.clientWidth)
    window.addEventListener('resize', this.onResize)
  },
  watch: {
    columns: {
      handler(newVal, oldVal) {
        this.setColumnPhotosData(this.list, true)
      }
    },
    list: {
      handler(newVal, oldVal) {
        this.setColumnPhotosData(newVal, false)
      },
      deep: true
    },
    clientWidth: {
      handler(n, o) {
        this.judgeWidth(n)
      }
    }
  },
  methods: {
    setColumnPhotosData(data, clear) {
      if (clear) {
        this.columnPhotos = []
      }
      if (data.length > 0) {
        let sum = Math.round(data.length / this.columns)
        for (let i = 0; i < this.columns; i++) {
          let addData = data.slice(i * sum, (i * sum) + sum)
          let u = this.columnPhotos[i]
          if (u) {
            addData.forEach(i => {
              u.data.push(i)
            })
          } else {
            this.columnPhotos.push({
              index: i,
              data: addData
            })
          }
        }
      }
    },
    onResize(e) {
      this.clientWidth = document.body.clientWidth
    },
    judgeWidth(w) {
      if (w < 1280) {
        this.columns = 2
      } else if (w > 1280 && w < 1883) {
        this.columns = 3
      } else {
        this.columns = 4
      }
    },
    scrollFunc() {
      this.showMore = true
      if (this.lazy && !this.loading)
        this.getData()
    },
    inLoading() {
      this.loading = true
    },
    unLoading() {
      this.loading = false
    },
    getData() {
      this.$emit("getData")
      this.showMore = false
    },
    openDetail(id) {
      this.showDetailLoading = true
      setTimeout(() => {
        this.showDetailLoading = false
        this.showDetail = true
      }, 1400)
    },
    closeDetail() {
      this.showDetail = false
    }
  }
}
</script>

<style scoped>

</style>
