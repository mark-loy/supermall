<template>
  <div class="bottomBar">
    <div class="bar-item bottomLeft">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon store"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon storeUp"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bottomRight">
      <div class="cart" @click="clickCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "DeBottomBar",
    methods: {
      clickCart() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottomBar {
    /*background-color: red;*/
    width: 100%;
    height: 58px;
    position: fixed;
    bottom: 0px;
    display: flex;
    text-align: center;
  }


  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }


  .bottomLeft {
    width: 60%;
    display: flex;
    height: 58px;
  }


  .bottomLeft div {
    width: 40%;

    font-size: 14px;
  }


  .bottomLeft>div {
    flex: 1;
  }

  .bottomLeft .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bottomLeft .service {
    background-position:0 -54px;
  }

  .bottomLeft .store {
    background-position:0 -98px;
  }

  .bottomRight {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bottomRight .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bottomRight .buy {
    background-color: #f69;
  }
</style>
