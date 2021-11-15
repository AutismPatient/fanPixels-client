<!-- 搜索框 通用 -->
<template>
  <div :class="['search-bar--main',isBar ? 'mr-5':'']" ref="showPanel">
    <!-- 输入框   -->
    <v-text-field color="primary" @focus.stop="isFocus = true"
                  v-model="query" :dense="isBar" hide-details="auto"
                  :placeholder="placeholder" :style="{width: isSlow ? '100%':width + 'px'}"
                  :solo="!outlined"
                  :outlined="outlined" :append-icon="icon" @keyup.enter="submit"
    ></v-text-field>
    <!-- 弹出区  -->
    <v-scroll-y-transition>
      <v-card elevation="2" :class="['search-bar--focus_card',!isBar ? 'clear__top': 'un-clear__top']" v-show="isFocus">
        <div class="focus_card--content">
          <v-subheader>最近搜索
            <v-icon class="ml-1" small style="cursor: pointer">mdi-close-circle</v-icon>
          </v-subheader>
          <div class="ml-2 mr-2 mt-2">
            <v-chip class="ma-2" v-for="(value,index) in searchHistory" :key="value"
                    small
                    @click.stop:close="clearHistory">
              {{ value }}
            </v-chip>
          </div>
        </div>
        <div class="focus_card--content">
          <v-subheader>热门收藏夹</v-subheader>
          <div class="ml-2 mr-2">
            <v-row class="ma-0">
              <v-col cols="12" sm="6" style="padding-right: 0!important;padding-left: 6px!important;"
                     v-for="item in favorites" :key="item.title">
                <v-card outlined rounded class="pa-2 d-flex">
                  <div class="search-bar_collection__images">
                    <img v-for="img in item.images" :key="img.path" :src="img.path" alt="img.name"/>
                  </div>
                  <div class="search-bar_collection__text">
                    <div class="js-search-bar-collection-title search-bar_collection__text__title">{{ item.title }}
                    </div>
                    <div class="js-search-bar-collection-subtitle search-bar_collection__text__subtitle">
                      {{ item.sumTitle }}
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
        <div class="focus_card--content">
          <v-subheader>人气主题</v-subheader>
          <div class="ml-2 mr-2 pt-2">
            <v-btn x-large v-for="item in tagList" :key="item.name">
              <v-avatar class="mr-2"><img :src="item.img" :alt="item.name"></v-avatar>
              {{ item.name }}
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-scroll-y-transition>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    isBar: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 550
    },
    isSlow: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '搜索免费图片和视频'
    },
    outlined: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'mdi-magnify'
    }
  },
  data() {
    return {
      query: '',
      isFocus: false,
      searchHistory: [
        '退伍军人',
        '风景图',
        '编程'
      ],
      favorites: [
        {
          title: 'Mighty Nature',
          sumTitle: '16 张图片',
          images: [
            {
              path: 'https://images.pexels.com/photos/9498282/pexels-photo-9498282.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=25&amp;w=40'
            },
            {
              path: 'https://images.pexels.com/photos/3074526/pexels-photo-3074526.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=17&amp;w=19'
            },
            {
              path: 'https://images.pexels.com/photos/3145755/pexels-photo-3145755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=17&amp;w=19'
            }
          ]
        },
        {
          title: 'Beautiful Backgrounds',
          sumTitle: '21 张图片',
          images: [
            {
              path: 'https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=25&w=40'
            },
            {
              path: 'https://images.pexels.com/photos/775687/pexels-photo-775687.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=17&w=19'
            },
            {
              path: 'https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=17&w=19'
            }
          ]
        }
      ],
      tagList: [
        {
          img: 'https://images.pexels.com/photos/1340504/pexels-photo-1340504.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=1&fit=crop&h=50&w=50',
          name: '退伍军人节'
        },
        {
          img: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50',
          name: '风景'
        }
      ]
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (this.$refs.showPanel) {
        let isSelf = this.$refs.showPanel.contains(e.target)
        if (!isSelf) {
          this.isFocus = false
        }
      }
    })
  },
  methods: {
    submit() {

    },
    clearHistory() {

    }
  }
}
</script>

<style scoped>

</style>
