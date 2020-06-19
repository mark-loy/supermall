<template>

  <div class="home">
    <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>
    <swiper-package class="home-swiper" :barners="barners" />
    <recommend-view :recommends="recommends"/>
    <feature/>
    <tab-controller class="tabController" :title="['流行', '新款', '精选']"/>
    <goods-list :goodsList="goods"/>

    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabController from "components/content/tabController/TabController";
  import GoodsList from "components/content/goods/GoodsList";

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
        }
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      getHomeGoods(type) {
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

  .home-swiper {
    padding-top: 44px;
  }

  .tabController {
    position: sticky;
    top: 44px;
  }
</style>
