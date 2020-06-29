<template>
  <div class="cate-menu">
    <div class="menu-item" v-for="(item, index) in menuData" :key="index" @click="clickStyle(index, item.maitKey, item.miniWallkey)"
         :class="{checked: currentIndex === index}">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CateMenu",
    data() {
      return {
        currentIndex: 0,
      }
    },
    props: {
      menuData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      clickStyle(index, maitKey, miniWallkey) {
        this.currentIndex = index
        this.$emit('checkedMaitKey', maitKey, miniWallkey)
      }
    }
  }
</script>

<style scoped>
  .cate-menu {

  }

  .menu-item {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 13px;
    /*color: var(--color-high-text);*/

  }

  .checked {
    color: #ff5777;
    background-color: #ffffff;
    border-left: 3px solid  #ff5777;
    font-weight: 900;
  }
</style>
