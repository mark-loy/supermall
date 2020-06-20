<template>

  <div class="home">
    <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>
    <b-scroll class="scroll" ref="scroll"
              @isShowBackTop="isShowBackTop" :probeType="3"
              @pullingUp="pullingUp" :pullUpLoad="true">
      <swiper-package class="home-swiper" :barners="barners" />
      <recommend-view :recommends="recommends"/>
      <feature/>
      <tab-controller class="tabController" :title="title" @tabClick='tabClick'/>
      <goods-list :goodsList="goodsList"/>
    </b-scroll>
    <back-top @click.native="backTop" v-show="isShow"/>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabController from "components/content/tabController/TabController";
  import GoodsList from "components/content/goods/GoodsList";
  import BScroll from "components/common/bscroll/BScroll";
  import BackTop from "components/content/backTop/BackTop";

  import SwiperPackage from "./childmodule/SwiperPackage";
  import RecommendView from "./childmodule/RecommendView";
  import Feature from "./childmodule/Feature";

  import {getHomeMultidata} from "network/home";
  import {getHomeGoods} from "network/home";


  export default {
    name: "Home",
    components: {
      NavBar,
      TabController,
      GoodsList,
      BScroll,
      BackTop,
      SwiperPackage,
      RecommendView,
      Feature
    },
    data() {
      return {
        barners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell:{page: 0, list: []}
        },
        currentType: 'pop',
        title: ['流行', '新款', '精选'],
        isShow: false,
      }
    },
    computed: {
      goodsList() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      this.$bus.$on('imageLoad', () => {
        this.$refs.scroll.imageLoad()
      })
    },
    methods: {
      /**
       * 事件监听方法
       * @param index
       */
      tabClick(index) {
        if(index == 0) {
          this.currentType = 'pop'
        }else if(index == 1) {
          this.currentType = 'new'
        }else {
          this.currentType = 'sell'
        }
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 500) //回到给定的坐标0，0 用时500ms
      },
      isShowBackTop(position) {
        this.isShow = (-position.y) > 1000
      },
      pullingUp() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scrollUp()
      },


      /**
       * 网络请求方法
       * @param type
       */
      getHomeGoods(type) {
        //console.log(type);
        getHomeGoods(type, this.goods[type].page + 1).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
        })
      },
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.barners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      }
    }
  }
</script>

<style scoped>
  .home {
    position: relative;
    height: 100vh;
  }

  .home-navbar {
    display: flex;
    line-height: 44px;
    height: 44px;

    background-color: var(--color-tint);
    color: #ffffff;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);

    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
  }



  .tabController {
    /*position: sticky;*/
    /*top: 44px;*/
  }

  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
/*    height: calc(100% - 93px);
    margin-top: 44px;*/
  }
</style>
