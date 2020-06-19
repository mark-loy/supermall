<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in barners">
        <a :href="item.link">
          <img :src="item.image"/>
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index';

  export default {
    name: "SwiperPackage",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      barners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
