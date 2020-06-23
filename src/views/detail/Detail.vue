<template>
  <div class="detail">
    <de-nav-bar @skip="skip"/>
    <b-scroll class="scroll" ref="scroll" >
      <de-swipper :top-images="topImages" ref="deswipper"/>
      <de-goods-info :goods-info="goodsInfo"/>
      <de-shop-info :shop-info="shopInfo"/>
      <de-shops-show :shop-show="shopShow" @loadimages="loadimages"/>
      <de-goods-params :goods-params="goodsParams" ref="params"/>
      <de-comment :comment-data="commentData" ref="comment"/>
      <goods-list :goodsList="recommendDate" ref="list"/>
    </b-scroll>
  </div>
</template>

<script>
  import DeNavBar from "./childmodule/DeNavBar";
  import DeSwipper from "./childmodule/DeSwipper";
  import DeGoodsInfo from "./childmodule/DeGoodsInfo";
  import DeShopInfo from "./childmodule/DeShopInfo";
  import DeShopsShow from "./childmodule/DeShopsShow";
  import DeGoodsParams from "./childmodule/DeGoodsParams";
  import DeComment from "./childmodule/DeComment";
  import GoodsList from "components/content/goods/GoodsList";

  import BScroll from "components/common/bscroll/BScroll";

  import {detailData, GoodsInfo, GoodsParam, Shop, getRecommend} from "network/detail";

  import {debounce} from "common/util";

  export default {
    name: "Detail",
    components: {
      DeNavBar,
      DeSwipper,
      DeGoodsInfo,
      DeShopInfo,
      DeShopsShow,
      DeGoodsParams,
      DeComment,
      GoodsList,
      BScroll,
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
        shopShow: {},
        goodsParams: {},
        commentData: [],
        recommendDate: [],
      }
    },
    created() {
      //获取详情id
      this.iid = this.$route.params.id

      //获取详情数据
      detailData(this.iid).then(res => {
        // console.log(res);
        const result = res.result
        //1.获取轮播图数据
        this.topImages = result.itemInfo.topImages
        //2.获取商品数据
        this.goodsInfo = new GoodsInfo(result.columns, result.itemInfo, result.shopInfo.services)
        //3.获取商家数据
        this.shopInfo = new Shop(result.shopInfo)
        //4.获取商品展示信息
        this.shopShow = result.detailInfo
        //5.获取商品参数信息
        this.goodsParams = new GoodsParam(result.itemParams.info, result.itemParams.rule)
        //6.获取用户评价数据
        if (result.rate.cRate != 0) {
          this.commentData = result.rate.list
        }
      })
      //获取推荐商品信息
      getRecommend().then(res => {
        // console.log(res);
        this.recommendDate = res.data.list
      })
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('detailImageLoad', () => {
        refresh()
      })
    },
    methods: {
      loadimages() {
        this.$refs.scroll.refresh()
      },
      skip(index) {
        let skipTo = null
        if(index === 0) {
          skipTo = this.$refs.deswipper.$el.offsetTop
        } else if(index === 1) {
          skipTo = this.$refs.params.$el.offsetTop
        } else if(index === 2) {
          skipTo = this.$refs.comment.$el.offsetTop
        } else if(index === 3) {
          skipTo = this.$refs.list.$el.offsetTop
        }

        this.$refs.scroll.scrollTo(0, -skipTo, 500)
        this.$refs.scroll.refresh()
      }
    },
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
