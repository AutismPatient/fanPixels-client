<!--首页-->
<template>
  <v-main class="pa-0 home-main__content">
    <!-- banner 区   -->
    <div class="banner__content">
      <v-parallax src="/static/images/material.jpg" height="600" style="overflow: unset">
        <v-row align="center" justify="center">
          <v-col cols="5" class="banner__content-sub">
            <h1 class="banner__title">才华横溢的摄影作者在这里免费分享最精彩的素材图片和视频。</h1>
            <SearchBar :is-bar="false" is-slow class="mt-2 mb-2"/>
            <div class="more__tags">
              <span>推荐:</span>
              <ul class="pl-0">
                <li v-for="item in recommends" :key="item.title">
                  <a href="#">{{ item.title }}</a>
                </li>
                <li>
                  <a href="#">更多</a>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
        <div class="banner__footer overflow-auto">
          <v-btn class="mr-2" v-for="item in tagList" :key="item.name" rounded>
            <v-avatar class="mr-2" size="30"><img :src="item.img" :alt="item.name"></v-avatar>
            {{ item.name }}
          </v-btn>
        </div>
      </v-parallax>
    </div>
    <!-- 首页内容区 -->
    <div class="main__content">
      <div class="tab--content">
        <v-tabs centered height="60" show-arrows slider-size="3">
          <v-tab v-for="item in tabList" :key="item.title">{{ item.title }}</v-tab>
        </v-tabs>
      </div>
      <v-container class="mt-2">
        <ColumnPhotos ref="column_photos" :list="photos" @getData="getPhotos"/>
      </v-container>
    </div>
  </v-main>
</template>
<style lang="scss" src="../../assets/css/home.scss"></style>

<script>

import SearchBar from "@/components/search/SearchBar";
import ColumnPhotos from '@/components/columnPhotos/index';

export default {
  name: 'index',
  components: {SearchBar, ColumnPhotos},
  data: () => ({
    recommends: [
      {
        title: '设计',
        query: ''
      },
      {
        title: '计算机电脑',
        query: ''
      },
      {
        title: '编程',
        query: ''
      },
      {
        title: '网站',
        query: ''
      },
      {
        title: '骇客',
        query: ''
      }
    ],
    tagList: [
      {
        name: '城市',
        img: 'https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50'
      },
      {
        name: '风景',
        img: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50'
      },
      {
        name: '森林',
        img: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50'
      },
      {
        name: '健身',
        img: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50'
      },
      {
        name: '天空',
        img: 'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      },
      {
        name: '建筑',
        img: 'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      },
      {
        name: '星空',
        img: 'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      },
      {
        name: '水果',
        img: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      },
      {
        name: '背景',
        img: 'https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      },
      {
        name: '花',
        img: 'https://images.pexels.com/photos/827106/pexels-photo-827106.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      },
      {
        name: '山',
        img: 'https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      },
      {
        name: '科技',
        img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      },
      {
        name: '黑暗',
        img: 'https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      },
      {
        name: '水',
        img: 'https://images.pexels.com/photos/4420454/pexels-photo-4420454.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50'
      }
    ],
    tabList: [
      {
        title: '主页',
        query: 'all',
        path: ''
      },
      {
        title: '发现',
        query: '',
        path: ''
      },
      {
        title: '视频',
        query: '',
        path: ''
      },
      {
        title: '热门作者排行榜',
        query: '',
        path: ''
      },
      {
        title: '挑战赛',
        query: '',
        path: ''
      }
    ],
    photos: []
  }),
  methods: {
    getPhotos() {
      this.$refs.column_photos.inLoading()
      setTimeout(() => {
        let res = [
          {
            id: Math.random().toString(36).substr(2),
            title: '女人抱着婴儿在海边',
            background: 'rgb(123,140,140)',
            image: {
              url: 'https://images.pexels.com/photos/1002536/pexels-photo-1002536.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 4256,
              height: 2832
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '一只孤独的鸟站在绿色和干燥植物之间的沙地上',
            background: 'rgb(146,123,93)',
            image: {
              url: 'https://images.pexels.com/photos/3042612/pexels-photo-3042612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 2624,
              height: 3936
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '白色和蓝色的花裙子，戴着棕色草帽的女人',
            background: 'rgb(182,182,176)',
            image: {
              url: 'https://images.pexels.com/photos/3514426/pexels-photo-3514426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 5386,
              height: 3591
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '灰色圆领上衣的男人',
            background: 'rgb(146,140,134)',
            image: {
              url: 'https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 6000,
              height: 4000
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '女人靠在铁路上的选择性聚焦摄影',
            background: 'rgb(128,121,119)',
            image: {
              url: 'https://images.pexels.com/photos/2896820/pexels-photo-2896820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 2738,
              height: 1825
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '女人站在海岸线附近的沙滩上',
            background: 'rgb(172,142,121)',
            image: {
              url: 'https://images.pexels.com/photos/320006/pexels-photo-320006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 4256,
              height: 2832
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '女孩穿着豹子掩盖',
            background: 'rgb(148,152,167)',
            image: {
              url: 'https://images.pexels.com/photos/768264/pexels-photo-768264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 5760,
              height: 3840
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '白天躺在海边的红色垫子上的女人穿比基尼',
            background: 'rgb(190,175,154)',
            image: {
              url: 'https://images.pexels.com/photos/745128/pexels-photo-745128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 6000,
              height: 4000
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '几个站在海边',
            background: 'rgb(196,172,160)',
            image: {
              url: 'https://images.pexels.com/photos/3030592/pexels-photo-3030592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 5472,
              height: 3648
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '有关假期, 剪影, 地平線的免费素材图片',
            background: 'rgb(127,116,98)',
            image: {
              url: 'https://images.pexels.com/photos/4078030/pexels-photo-4078030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 7111,
              height: 4743
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '多色的, 天空, 彩色的 的 免费素材图片',
            background: 'rgb(142,126,110)',
            image: {
              url: 'https://images.pexels.com/photos/9866389/pexels-photo-9866389.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 3456,
              height: 5184
            }
          },
          {
            id: Math.random().toString(36).substr(2),
            title: '人们走在沙滩线附近',
            background: 'rgb(143,154,151)',
            image: {
              url: 'https://images.pexels.com/photos/3586782/pexels-photo-3586782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              width: 6000,
              height: 4000
            }
          }
        ]
        this.photos = res
        this.$refs.column_photos.unLoading()
      }, 1500)
    },
  },
  mounted() {
    this.getPhotos()
  }
}
</script>
