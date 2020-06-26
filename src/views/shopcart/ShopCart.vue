<template>
  <div class="shop-cart">
    <nav-bar class="cart-navbar"><div slot="center" class="center">购物车({{cartLength}})</div></nav-bar>
    <b-scroll class="scroll" ref="scroll">
      <product-list :productList="cartProductList"/>
    </b-scroll>
    <cart-total :productList="cartProductList"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import ProductList from "./childmodule/ProductList";
  import CartTotal from "./childmodule/CartTotal";
  import BScroll from "../../components/common/bscroll/BScroll";

  export default {
    name: "ShopCart",
    components: {
      BScroll,
      CartTotal,
      NavBar,
      ProductList
    },
    computed: {
      cartLength() {
        return this.$store.state.productList.length
      },
      cartProductList() {
        return  this.$store.state.productList
      },
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .shop-cart {
    height: 100vh;
    position: relative;
  }

  .scroll {
    position: absolute;
    top: 44px;
    bottom: 98px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }

  .cart-navbar {
    display: flex;
    background-color: var(--color-tint);
    color: #ffffff;
    font-size: 17px;
    font-weight: bold;
  }

</style>
