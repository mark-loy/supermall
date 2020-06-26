<template>
  <div class="product">
    <div class="select" @click="clickSelect">
      <img src="~assets/img/cart/tick.svg" :class="{color: product.isChecked,border_color: !product.isChecked}"/>
    </div>
    <div class="product-img" >
      <img :src="product.image">
    </div>
    <div class="product-info">
      <div class="info-name">
        <span>{{product.title}}</span>
      </div>
      <div class="info-desc">
        <span>商品描述：{{product.desc}}</span>
      </div>
      <div class="info-price-count">
        <span class="price">￥{{product.price}}</span>
        <span class="count">x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      clickSelect() {
        this.product.isChecked = !this.product.isChecked
      }
    }
  }
</script>

<style scoped>
  .product {
    height: 115px;
    width: 100%;
    display: flex;
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }

  .select {
    height: 110px;
    line-height: 110px;
  }

  .select img {
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 0px;
  }
  .border_color {
    border: 2px solid #cccccc;
  }

  .color {
    background-color: #ff8198;;
    border-color: #ff8198;;
  }

  .product-img {
    line-height: 110px;
    padding: 5px 8px;
  }

  .product-img img{
    width: 80px;
    height: 100px;
    border-radius: 5px;
  }

  .product-info {
    padding: 5px 8px;
    width: 70%;
  }

  .info-name , .info-desc{
    /*display: inline-block;*/
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 35px;
  }

  .info-name span {
    font-size: 17px;
    color: #333333;
  }

  .info-desc span {
    font-size: 14px;

  }

  .info-price-count {
    height: 40px;
    line-height: 35px;
    width: 100%;
  }

  .info-price-count .price {
    color: var(--color-high-text);
  }

  .info-price-count .count {
    color: #333333;
    float: right;
  }
</style>
