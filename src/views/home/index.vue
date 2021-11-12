<!--首页-->
<template>
  <v-main class="pa-0 home-main__content">
    <!-- banner 区   -->
    <div class="banner__content">
      <v-parallax src="/static/images/material.jpg" height="600" style="overflow: unset">
        <v-row align="center" justify="center">
          <v-col cols="5" class="banner__content-sub">
            <h1 class="banner__title">才华横溢的摄影作者在这里免费分享最精彩的素材图片和视频。</h1>
            <SearchBar :is-bar="false" is-slow/>
          </v-col>
        </v-row>
      </v-parallax>
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

  }),
  methods: {

  },
  mounted() {
  }
}
</script>
