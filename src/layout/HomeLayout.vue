<!-- 模板页(homeLayout) -->
<template>
  <v-app v-scroll="onScroll">
    <!-- 导航栏  -->
    <bar is-offset ref="app_bar"/>
    <!-- 内容主体   -->
    <v-main :style="{backgroundColor: '#eaeaea'}" class="pa-0">
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import bar from './components/AppBar'
import {getTargetValue} from '@/utils/directiveUtils'

export default {
  name: "HomeLayout",
  components: {bar},
  methods: {
    onScroll(e) {
      if (getTargetValue(e.target) > 300) {
        this.$refs.app_bar.offset()
      } else {
        this.$refs.app_bar.closeOffset()
      }
    }
  },
  mounted() {
    var c = 'monaco, Consolas, "Lucida Console", monospace'
      , a = "#1053b4";
    console.log("%c".concat("\n\u2591\u2588\u2580\u2580\u2588 \u2591\u2588\u2580\u2580\u2580 \u2580\u2584\u2591\u2584\u2580 \u2591\u2588\u2580\u2580\u2580 \u2591\u2588\u2500\u2500\u2500 \u2591\u2588\u2580\u2580\u2580\u2588    \u2500\u2588\u2580\u2580\u2588 \u2591\u2588\u2580\u2580\u2588 \u2580\u2588\u2580 \n\u2591\u2588\u2584\u2584\u2588 \u2591\u2588\u2580\u2580\u2580 \u2500\u2591\u2588\u2500\u2500 \u2591\u2588\u2580\u2580\u2580 \u2591\u2588\u2500\u2500\u2500 \u2500\u2580\u2580\u2580\u2584\u2584    \u2591\u2588\u2584\u2584\u2588 \u2591\u2588\u2584\u2584\u2588 \u2591\u2588\u2500 \n\u2591\u2588\u2500\u2500\u2500 \u2591\u2588\u2584\u2584\u2584 \u2584\u2580\u2591\u2580\u2584 \u2591\u2588\u2584\u2584\u2584 \u2591\u2588\u2584\u2584\u2588 \u2591\u2588\u2584\u2584\u2584\u2588    \u2591\u2588\u2500\u2591\u2588 \u2591\u2588\u2500\u2500\u2500 \u2584\u2588\u2584\n"), "color: ".concat(a)),
      console.log("%cAccess all photos and videos from Pexels with our API", "font-size: 10px; font-family: ".concat(c, "; background: ").concat(a, "; font-weight: bold; color: #ffffff; padding: 7px 25px")),
      console.log("%chttps://www.fan8pexels.com/api", "font-size: 12px; font-family: ".concat(c, "; margin-left: 75px; font-weight: 700; padding: 8px 0"))
  }
}
</script>

<style scoped>

</style>
