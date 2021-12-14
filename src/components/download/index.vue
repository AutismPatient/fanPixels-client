<template>
  <v-dialog v-model="show" content-class="share__dialog" width="480px">
    <v-card class="pa-6">
      <span class="text-h5">下载选项</span>
      <v-radio-group v-model="active" dense>
        <v-radio label="原始大小 (3489 x 5297)" :value="1"></v-radio>
        <v-radio label="大 (1920 x 2914)" :value="2"></v-radio>
        <v-radio label="中 (1280 x 1943)" :value="3"></v-radio>
        <v-radio label="小 (640 x 971)" :value="4"></v-radio>
        <v-radio label="自定义大小" :value="5"></v-radio>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="宽度"
              outlined hide-details :disabled="disableBtn"
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="高度"
              outlined hide-details :disabled="disableBtn"
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-radio-group>
      <v-btn color="blue darken-3" block depressed dark>
        免费下载
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "index",
  props: {
    info: {
      type: Object,
      default: {}
    }
  },
  watch: {
    active: {
      handler(newVal, oldVal){
        this.disableBtn = newVal !== 5
      }
    }
  },
  data() {
    return {
      show: false,
      active: 1,
      disableBtn: true
    }
  },
  methods: {
    showD() {
      this.show = true
    },
    hideD() {
      this.show = false
    }
  }
}
</script>
