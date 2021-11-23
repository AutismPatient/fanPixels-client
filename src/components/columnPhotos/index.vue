<!-- 通用瀑布流组件（响应式） -->
<template>
  <div class="column__photos-main">
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
          <article :style="{paddingTop: (p.image.height / p.image.width) * 100 + '%'}">
            <a href="#" :style="{background: p.background}">
              <img :src="p.image.url" :alt="p.title"/>
            </a>
            <div class="photos__info d-flex align-center justify-space-between">
              <div class="author-info">
                <v-avatar size="30" class="mr-1">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>
                <span>Kseniya Kopna</span>
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
      ]
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
        this.setColumnPhotosData(newVal, true)
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
          this.columnPhotos.push({
            index: i,
            data: data.slice(i * sum, (i * sum) + sum)
          })
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
    }
  }
}
</script>

<style scoped>

</style>
