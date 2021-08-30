<template>
  <v-app id="inspire" class="fp-main">
    <!-- 导航栏  -->
    <bar />
    <!-- 内容主体   -->
    <v-main class="grey lighten-3">
      <v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import bar from '@/components/layout/AppBar'

export default {
  name: 'index',
  components: {
    bar
  },
  data: () => ({

  }),
  methods: {

  },
  mounted() {
  }
}
</script>
