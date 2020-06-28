<template>
    <div class="contents" :style="{height: height + 'px'}">
      <div class="content-item" v-for="(item, index) in contentData" :key="index" >
        <img :src="item.image">
        <span>{{item.title}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "CateContent",
    data() {
      return {
        height: 0,
      }
    },
    props: {
      contentData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    updated() {
      //初始化content内容高度
      this.contentData.length%3 === 0 ? this.height = this.contentData.length/3 * 100 : this.height = (this.contentData.length/3 + 0.7) * 100
    },
  }
</script>

<style scoped>

  .content-item {
    height: 100px;
    width: 90px;
    text-align: center;
    padding: 10px 20px;
    /*display: block;*/
    float: left;
  }

  .content-item img {
    width: 60px;
    height: 60px;

  }

  .content-item span {
    font-size: 12px;

  }
</style>
