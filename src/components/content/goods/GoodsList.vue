<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goodsList" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem,
    }
  }
</script>

<style scoped>

</style>
