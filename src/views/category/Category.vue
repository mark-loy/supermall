<template>
  <div class="category" >
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="shopShow">
      <b-scroll class="menu-scroll">
        <cate-menu  :menuData="menuData" @checkedMaitKey="checkedMaitKey"/>
      </b-scroll>
      <b-scroll class="content-scroll" ref="conScroll">
        <cate-content :contentData="contentData"/>
        <tab-controller ref="tabcontrol" :title="title" @tabClick='tabClick'/>
        <cate-recommend/>
      </b-scroll>
    </div>

  </div>


</template>

<script>
  import BScroll from 'components/common/bscroll/BScroll';
  import NavBar from "components/common/navbar/NavBar";

  import {getCategoryDate, getSubcategory} from "network/category";
  import CateMenu from "./childModule/CateMenu";
  import CateContent from "./childModule/CateContent";
  import CateRecommend from "./childModule/CateRecommend";
  import TabController from "../../components/content/tabController/TabController";

  export default {
    name: "Category",
    data() {
      return {
        menuData: [],
        contentData: [],
        title: ['综合', '新品', '销量'],
      }
    },
    components: {
      TabController,
      CateRecommend,
      CateContent,
      CateMenu,
      BScroll,
      NavBar
    },
    created() {
      getCategoryDate().then(res => {
        console.log(res);
        const list = res.data.category.list
        //左侧菜单数据
        this.menuData = list

        //根据分类id查询分类
        getSubcategory(list[0].maitKey).then(res => {
          this.contentData = res.data.list
        })
      })
    },
    methods: {
      checkedMaitKey(maitKey) {
        getSubcategory(maitKey).then(res => {
          this.contentData = res.data.list
        })
      },
      tabClick(index) {
        if(index === 0) {
          this.currentType = 'pop'
        }else if(index === 1) {
          this.currentType = 'new'
        }else {
          this.currentType = 'sell'
        }
        this.$refs.tabcontrol1.currentIndex = index
        this.$refs.tabcontrol.currentIndex = index
      },
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
