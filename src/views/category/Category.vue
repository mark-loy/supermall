<template>
  <div class="category" >
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="shopShow">
      <b-scroll class="menu-scroll">
        <cate-menu  :menuData="menuData" @checkedMaitKey="checkedMaitKey"/>
      </b-scroll>
      <b-scroll class="content-scroll" ref="scroll" @scroll="scroll" :probeType="3">
        <cate-content :contentData="contentData"/>
        <tab-controller ref="tabcontrol" :title="title" @tabClick='tabClick'/>
        <goods-list :goodsList="goodsList"/>
      </b-scroll>
    </div>
    <back-top @click.native="backTop" v-show="isShow"/>
  </div>


</template>

<script>
  import BScroll from 'components/common/bscroll/BScroll';
  import NavBar from "components/common/navbar/NavBar";
  import TabController from "components/content/tabController/TabController";
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/content/backTop/BackTop"

  import CateMenu from "./childModule/CateMenu";
  import CateContent from "./childModule/CateContent";
  import CateRecommend from "./childModule/CateRecommend";


  import {getCategoryDate, getSubcategory, getCategoryDetail} from "network/category";
  import {backTopMixin} from "common/mixin"
  import {debounce} from "common/util"

  export default {
    name: "Category",
    mixins: [backTopMixin],
    data() {
      return {
        menuData: [],
        contentData: [],
        title: ['综合', '新品', '销量'],
        goodsList: [],
        currentType: '',
        maitKey: 0,
        miniWallkey: 0,
        position_y: 0,
      }
    },
    components: {
      GoodsList,
      TabController,
      CateRecommend,
      CateContent,
      CateMenu,
      BScroll,
      NavBar,
      BackTop
    },
    created() {
      this.getCategoryDate()
      this.getSubcategory(3627)
      this.getCategoryDetail(10062603, 'pop')
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('categoryImageLoad', () => {
        refresh()
      })
    },
    methods: {
      checkedMaitKey(maitKey, miniWallkey) {
        this.getSubcategory(maitKey)
        this.getCategoryDetail(miniWallkey, this.currentType)
      },
      tabClick(index) {
        // console.log(index);
        if(index === 0) {
          this.currentType = 'pop'
        }else if(index === 1) {
          this.currentType = 'new'
        }else {
          this.currentType = 'sell'
        }
        this.$refs.tabcontrol.currentIndex = index
        this.getCategoryDetail(this.miniWallkey, this.currentType)
      },
      scroll(position) {
        this.backTopPosition(position)
      },
      getCategoryDate() {
        getCategoryDate().then(res => {
          // console.log(res);
          this.menuData = res.data.category.list
        })
      },
      getSubcategory(maitKey) {
        this.maitKey = maitKey
        //根据分类id查询分类
        getSubcategory(maitKey).then(res => {
          this.contentData = res.data.list
        })
      },
      getCategoryDetail(miniWallkey, type) {
        this.miniWallkey = miniWallkey
        getCategoryDetail(miniWallkey, type).then(res => {
          // console.log(res);
          this.goodsList = res
        })
      }

    }
  }
</script>

<style scoped>
  .category {
    height: 100vh;
  }

  .navbar {
    font-size: 17px;
    color: #ffffff;
    font-weight: bold;
    background-color: var(--color-tint);
  }

  .shopShow {

    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
  }

  .menu-scroll {
    width: 25%;
    background-color: rgba(0, 0, 0, .03);
  }

  .content-scroll {
    width: 75%;
  }


</style>
