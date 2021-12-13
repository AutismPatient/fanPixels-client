<template>
  <v-app id="app" class="fp-main">
    <router-view/>
  </v-app>
</template>
<script>
import {sayHello} from '@/assets/js/console'
export default {
  name: 'App',
  mounted() {
    sayHello()
  }
}
</script>
