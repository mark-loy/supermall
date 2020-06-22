<template>
  <swiper class="swipers">
    <swiper-item v-for="item in topImages">
      <img :src="item"/>
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
    height: 300px;
  }
</style>
