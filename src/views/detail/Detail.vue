<template>
  <div class="detail">
    <de-nav-bar/>
    <b-scroll class="scroll">
      <de-swipper :top-images="topImages"/>
      <de-goods-info :goods-info="goodsInfo"/>
      <de-shop-info :shop-info="shopInfo"/>
      <de-shops-show :shop-show="shopShow"/>
    </b-scroll>
  </div>
</template>

<script>
  import DeNavBar from "./childmodule/DeNavBar";
  import DeSwipper from "./childmodule/DeSwipper";
  import DeGoodsInfo from "./childmodule/DeGoodsInfo";
  import DeShopInfo from "./childmodule/DeShopInfo";
  import DeShopsShow from "./childmodule/DeShopsShow";

  import BScroll from "components/common/bscroll/BScroll";

  import {detailData, GoodsInfo, GoodsParam, Shop} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DeNavBar,
      DeSwipper,
      DeGoodsInfo,
      DeShopInfo,
      DeShopsShow,
      BScroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
        shopShow: {},
      }
    },
    created() {
      //获取详情id
      this.iid = this.$route.params.id

      //获取详情数据
      detailData(this.iid).then(res => {
        console.log(res);
        const result = res.result
        //1.获取轮播图数据
        this.topImages = result.itemInfo.topImages
        //2.获取商品数据
        this.goodsInfo = new GoodsInfo(result.columns, result.itemInfo, result.shopInfo.services)
        //3.获取商家数据
        this.shopInfo = new Shop(result.shopInfo)
        //4.获取商品展示信息
        this.shopShow = result.detailInfo
      })
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    position: relative;
    z-index: 2;
    background-color: #fff;
  }

  .scroll {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
</style>
