<template>
  <div class="product-list" >
      <product-item v-for="(item, index) in productList" :key="index" :product="item"/>
  </div>
</template>

<script>
  import ProductItem from "./ProductItem";

  export default {
    name: "ProductList",
    components: {
      ProductItem
    },
    props: {
      productList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .product-list {
    padding: 6px;
    width: 100%;
  }


</style>
