<template>
  <v-main class="fp-main">
    <v-alert
      v-model="show"
      border="left"
      dismissible
      elevation="3"
      type="success"
      transition="scale-transition"
    >I'm an Alert Usage Example</v-alert>
    <v-btn color="primary" elevation="4" :loading="loading" :disabled="loading" @click="submit">
      <v-icon left>mdi-checkbox-marked-circle</v-icon> 点击提交
      <template v-slot:loader>
        <span>loading...</span>
      </template>
    </v-btn>
  </v-main>
</template>

<script>
import VarUtils from '@/utils/strUtils'
export default {
  name: "HelloWorld",
  data(){
    return {
      msg: '',
      loader: null,
      loading: false,
      show: false
    }
  },
  mounted() {
    this.msg = VarUtils.isNull(undefined)
  },
  methods:{
    submit(){
      this.loading = true
      this.loader = 'loading'

      setTimeout(()=>{
        this.loading = false
        this.loader = null
        this.show = true
      },3000)
    }
  }
}
</script>

<style scoped>
.fp-main{
  margin: 40px;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
</style>
