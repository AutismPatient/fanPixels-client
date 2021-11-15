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
        <div class="banner__footer">
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
      <v-container class="list--content mt-2">
        <v-row justify="space-between">
          <v-col md="4">
            <v-subheader>
              免费素材图片
            </v-subheader>
          </v-col>
          <v-col md="4" align-self="right">

          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>
<style lang="scss" src="../../assets/css/home.scss"></style>

<script>

import SearchBar from "@/layout/components/SearchBar";

export default {
  name: 'index',
  components: {SearchBar},
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
    ]
  }),
  methods: {},
  mounted() {
  }
}
</script>
