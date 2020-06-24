<template>

  <div class="home">
    <nav-bar class="home-navbar"><div slot="center" class="center">购物街</div></nav-bar>
    <tab-controller :class="{ceiling: isceiling}"  ref="tabcontrol1" :title="title" @tabClick='tabClick' v-show="isceiling"/>
    <b-scroll class="scroll" ref="scroll" @scroll="isShowBackTop" :probeType="3" @pullingUp="pullingUp" :pullUpLoad="true">
      <swiper-package :barners="barners" @swipperload="swipperload"/>
      <recommend-view :recommends="recommends"/>
      <feature/>
      <tab-controller ref="tabcontrol" :title="title" @tabClick='tabClick' />
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

  import {debounce} from "common/util";
  import {backTopMixin} from "common/mixin";


  export default {
    name: "Home",
    mixins: [backTopMixin],
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
        offsetTop: 0,
        isceiling: false,
        scrollY: 0
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
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('homeImageLoad', () => {
        refresh()
      })
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.scrollY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.scrollY = this.$refs.scroll.scroll_Y()
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
        this.$refs.tabcontrol1.currentIndex = index
        this.$refs.tabcontrol.currentIndex = index
      },
      isShowBackTop(position) {
        //返回顶部
        this.backTopPosition(position)
        //是否需要吸顶
        this.isceiling = (-position.y) > this.offsetTop
      },
      pullingUp() { //上拉加载
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scrollUp()
      },
      swipperload() {
        this.offsetTop = this.$refs.tabcontrol.$el.offsetTop
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

    background-color: var(--color-tint);
    color: #ffffff;

  }

  .center {


  }

  .ceiling {
    position: relative;
/*    position: fixed;
    top: 44px;
    left: 0px;
    right: 0px;*/
    margin-top: -1px;
  }


  .scroll {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
/*    height: calc(100% - 93px);
    margin-top: 44px;*/
  }
</style>
