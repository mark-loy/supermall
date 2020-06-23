<template>
  <div class="goodsInfo" v-if="Object.keys(goodsInfo).length > 0">
    <div class="title">{{goodsInfo.title}}</div>
    <div class="price">
      <span class="n-price">{{goodsInfo.newPrice}}</span>
      <span class="o-price">{{goodsInfo.oldPrice}}</span>
      <span class="d-price">{{goodsInfo.discount}}</span>
    </div>
    <div class="columns">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length - 1].name}}</span>
    </div>
    <div class="service">
      <span class="service-index" v-for="index in goodsInfo.services.length - 1" :key="index">
        <img :src="goodsInfo.services[index-1].icon"/>
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "DeGoodsInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }

  }
</script>

<style scoped>
  .goodsInfo {
    margin-top: 10px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .title {
    color: #222222;
  }

  .price {
    margin-top: 10px;
  }

  .price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .price .d-price {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .columns {
    margin-top: 15px;
    display: flex;
    font-size: 14px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;
  }

  .service {
    display: flex;
    line-height: 50px;
    justify-content: space-between;
  }

  .service-index img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px
  }

  .service-index span {
    font-size: 14px;
    color: #222222;
  }
</style>
