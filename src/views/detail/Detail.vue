<template>
  <div class="detail">
    <de-nav-bar @skip="skip" ref="denavbar"/>
    <b-scroll class="scroll" ref="scroll" @scroll="tabtitle" :probeType="3">
      <de-swipper :top-images="topImages" ref="deswipper"/>
      <de-goods-info :goods-info="goodsInfo"/>
      <de-shop-info :shop-info="shopInfo"/>
      <de-shops-show :shop-show="shopShow" @loadimages="loadimages"/>
      <de-goods-params :goods-params="goodsParams" ref="params"/>
      <de-comment :comment-data="commentData" ref="comment"/>
      <goods-list :goodsList="recommendDate" ref="list"/>
    </b-scroll>
    <back-top @click.native="backTop" v-show="isShow"/>
    <de-bottom-bar @addCart="addCart"/>
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
  import DeBottomBar from "./childmodule/DeBottomBar";

  import BScroll from "components/common/bscroll/BScroll";
  import BackTop from "components/content/backTop/BackTop";

  import {detailData, GoodsInfo, GoodsParam, Shop, getRecommend} from "network/detail";

  import {debounce} from "common/util";
  import {backTopMixin} from "common/mixin"

  export default {
    name: "Detail",
    mixins: [backTopMixin],
    components: {
      DeNavBar,
      DeSwipper,
      DeGoodsInfo,
      DeShopInfo,
      DeShopsShow,
      DeGoodsParams,
      DeComment,
      GoodsList,
      DeBottomBar,
      BScroll,
      BackTop,

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
        skipTo: [],
        clickTabTitle: null,
        currentIndex: 0,
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

      this.clickTabTitle = debounce(() => {
        this.skipTo = []
        this.skipTo.push(0, this.$refs.params.$el.offsetTop,
          this.$refs.comment.$el.offsetTop, this.$refs.list.$el.offsetTop)
        this.skipTo.push(Number.MAX_VALUE)
        console.log(this.skipTo);
      }, 100)
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 100)
      this.$bus.$on('detailImageLoad', () => {
        refresh()
      })
    },
    methods: {
      loadimages() {
        this.$refs.scroll.refresh()

        this.clickTabTitle()
      },
      skip(index) {

        this.$refs.scroll.scrollTo(0, -this.skipTo[index], 500)
        this.$refs.scroll.refresh()
      },
      tabtitle(position) {
        // console.log(position.y);
        //方式一：
/*        if (-position.y >= this.skipTo[0] && -position.y < this.skipTo[1]) {
          this.$refs.denavbar.currentIndex = 0
        } else if(-position.y >= this.skipTo[1] && -position.y < this.skipTo[2]) {
          this.$refs.denavbar.currentIndex = 1
        } else if(-position.y >= this.skipTo[2] && -position.y < this.skipTo[3]) {
          this.$refs.denavbar.currentIndex = 2
        } else if(-position.y >= this.skipTo[3]) {
          this.$refs.denavbar.currentIndex = 3
        }*/

        //方式二：
/*        const y = -position.y
          for (let item in this.skipTo) {
             const i = parseInt(item)
             if (this.currentIndex !== i && ((i < this.skipTo.length - 1 && (y >= this.skipTo[i] && y < this.skipTo[i + 1])) || (i >= this.skipTo.length - 1 && (y >= this.skipTo[i])))) {
               this.currentIndex = i
               // console.log(i);
               this.$refs.denavbar.currentIndex = this.currentIndex
             }
           }*/
        //方式三
        const y = -position.y
        for (let item in this.skipTo) {
          let i = parseInt(item)
          if (i !== this.skipTo.length - 1 && this.currentIndex !== i && (y >= this.skipTo[i] && y < this.skipTo[i + 1])) {
            this.currentIndex = i
            // console.log(i);
            this.$refs.denavbar.currentIndex = this.currentIndex
          }
        }
        this.backTopPosition(position)
      },
      addCart() {
        const product = {}
        product.iid = this.iid
        product.image = this.topImages[0]
        product.desc = this.goodsInfo.desc
        product.price = this.goodsInfo.newPrice
        product.titel = this.goodsInfo.title
        // this.$store.commit('addCart', product)
        this.$store.dispatch('addCart', product)
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
    bottom: 58px;
    left: 0px;
    right: 0px;
  }
</style>
