<template>
  <div class="denavbar">
    <nav-bar class="navbar">
      <div slot="left" class="backimg" @click="back">
        <img  src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="center">
          <div  v-for="(item, index) in title" class="item" :class="{color:index === currentIndex}"
                @click="colorClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DeNavBar",
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
      }
    },
    components: {
      NavBar
    },
    methods: {
      colorClick(index) {
        this.currentIndex = index
      },
      back() {
        this.$router.back()
      },
    }
  }
</script>

<style scoped>
  .center {
    display: flex;
    flex: 1;
  }

  .item {
    flex: 1;
    font-size: 14px;
  }

  .color {
    color: var(--color-high-text);
  }

  .backimg {
    margin-top: 5px;
    margin-left: 10px;
  }
</style>
