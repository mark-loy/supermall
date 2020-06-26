<template>
  <swiper class="swipers">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img class="img" :src="item"/>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: "DeSwipper",
    components: {
      SwiperItem,
      Swiper
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },

  }
</script>

<style scoped>
  .swipers {
    height: 400px;
  }

  .img {
    height: 450px;
  }
</style>
