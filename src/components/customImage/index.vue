<!--自定义图片组件（一般用于图片显示带占位符）-->
<template>
  <article @click="action" :style="style">
    <a :style="{background: background}">
      <img :src="image.url"/>
    </a>
    <!--插槽内事件必须使用.stop阻止冒泡-->
    <div class="floater">
      <slot></slot>
    </div>
  </article>
</template>
<style src="../../assets/css/custom_image.scss" lang="scss"></style>
<script>
export default {
  name: "customImage",
  props: {
    background: {
      type: String,
      default: '#f7f7f7'
    },
    width: {
      type: Number,
      default: 16
    },
    height: {
      type: Number,
      default: 9
    },
    image: {
      type: Object
    },
    noPreview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      style: {}
    }
  },
  mounted() {
    this.style = this.noPreview ? {
      width: this.width + "px",
      height: this.height + "px"
    } : {paddingTop: (this.height / this.width) * 100 + '%'}
  },
  methods: {
    action() {
      this.$emit('action')
    }
  }
}
</script>
