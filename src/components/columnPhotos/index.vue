<!-- 通用瀑布流组件（响应式） -->
<template>
  <div class="column__photos-main"
       v-scroll-load-more="{ body: false,handle: scrollFunc, name: '.column__photos-main > .photos',percent: 0.8}">
    <v-row justify="space-between">
      <v-col md="4">
        <v-subheader>
          {{ title }}
        </v-subheader>
      </v-col>
      <v-col md="4" v-if="sortAction" class="text-right">
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
          <!--          <article -->
          <!--                   :style="{paddingTop: (p.image.height / p.image.width) * 100 + '%'}">-->
          <!--            <a :style="{background: p.background}">-->
          <!--              <img :src="p.image.url" :alt="p.title"/>-->
          <!--            </a>-->
          <!--          </article>-->
          <custom-image @action="openDetail(p.title)" :width="p.image.width" :background="p.background"
                        :image="{url: p.image.url}" :height="p.image.height">
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
          </custom-image>
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
    <div v-else-if="!lazy && this.columnPhotos.length > 0" class="ma-4 mr-0">
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

    <!-- 弹出框（loading） -->
    <ImageViewer ref="image_viewer"/>
  </div>
</template>
<style src="../../assets/css/column_photos.scss" lang="scss"></style>
<script>

export default {
  name: "ColumnPhotos",
  components: {
    ImageViewer: () => import('@/components/imageViewer/index')
  },
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
    },
    sortAction: {
      type: Boolean,
      default: true
    },
    domBody: { // 检测是否需要body来注册 resize 事件
      type: Boolean,
      default: true
    },
    dom: { // 当 domBody 为 false 时 请提供 dom
      type: String,
      default: ''
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
      loader: null
    }
  },
  mounted() {
    if(!this.domBody){
      let dom = document.querySelector('.photo__detail--dialog')
      for(let key  in dom){
        console.log(key + '---' + dom[key])
      }
      this.clientWidth = dom.getBoundingClientRect().width
    }
    console.log(this.clientWidth)
    this.judgeWidth(this.clientWidth)
    window.addEventListener('resize', this.onResize)
  },
  watch: {
    columns: {
      handler(newVal, oldVal) {
        this.resizeColumns(newVal, oldVal)
      }
    },
    list: {
      handler(newVal, oldVal) {
        this.loadingMoreData(newVal)
      }
    },
    clientWidth: {
      handler(n, o) {
        this.judgeWidth(n)
      }
    }
  },
  methods: {
    resizeColumns(newColumns, oldColumns) {
      if (this.columnPhotos.length > 0) {
        let magnify = newColumns - oldColumns > 0 // 是否为宽度增大模式，及从小到大
        let dataCount = 0
        this.columnPhotos.map(item => item.data).forEach(item => {
          dataCount += item.length
        })
        if (magnify) {
          let splitNum = Math.floor(dataCount / newColumns)
          let addData = [] // 用于填补的数组（填补给新的列）
          for (let i = 0; i < oldColumns; i++) {
            let item = this.columnPhotos[i]
            item.data.splice(splitNum, item.data.length - splitNum).forEach(i => {
              addData.push(i)
            })
          }
          this.columnPhotos[newColumns - 1] = {
            index: newColumns - 1,
            data: addData
          }
        } else {
          let lastData = this.columnPhotos[this.columnPhotos.length - 1].data
          let splitNum = Math.floor(lastData.length / newColumns)
          for (let i = 0; i < newColumns; i++) {
            let addData = lastData.splice(0, splitNum)
            if (addData.length > 0) {
              addData.forEach(item => {
                this.columnPhotos[i].data.push(item)
              })
            }
          }
          if (lastData.length > 0) { // 仍有剩余，则填充给首列
            lastData.forEach(item => {
              this.columnPhotos[0].data.push(item)
            })
          }
          this.columnPhotos.splice(newColumns, 1) // 删除最后一列
        }
      }
    },
    loadingMoreData(newVal) {
      let sum = Math.round(newVal.length / this.columns)
      for (let i = 0; i < this.columns; i++) {
        let addData = newVal.slice(i * sum, (i * sum) + sum)
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
    },
    onResize(e) {
      console.log(e)
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
    openDetail(row) {
      this.$refs.image_viewer.openDetail(row)
    }
  }
}
</script>

<style scoped>

</style>
