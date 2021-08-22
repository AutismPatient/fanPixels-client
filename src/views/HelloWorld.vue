<template>
  <div class="fp-main">

  </div>
</template>

<script>
import {nowTime} from "@/utils/strUtils"
export default {
  name: "HelloWorld",
  data(){
    return {
      msg: ''
    }
  },
  mounted() {
    this.msg = nowTime()
  }
}
</script>

<style scoped>

</style>
