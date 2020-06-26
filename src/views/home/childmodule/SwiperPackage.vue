<template>
    <Swiper>
      <SwiperItem v-for="item in barners" >
          <img :src="item.image" @load="swipperload"/>
      </SwiperItem>
    </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index';

  export default {
    name: "SwiperPackage",
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        isload: false
      }
    },
    props: {
      barners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      swipperload() {
        if(!this.isload) {
          this.$emit('swipperload')
          this.isload = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
