<template>
  <div class="shopShow" v-if="Object.keys(shopShow).length > 0">
     <div class="start"></div>
     <div class="desc">{{shopShow.desc}}</div>
     <div class="end"></div>
     <div  class="imageShow" v-for="shop in shopShow.detailImage">
       <div class="key">{{shop.key}}</div>
       <div v-for="item in shop.list">
         <img class="img" :src="item" @load="loadimages">
       </div>
     </div>
  </div>
</template>

<script>
  export default {
    name: "DeShopsShow",
    data() {
      return {
        imgCount: 0
      }
    },
    props: {
      shopShow: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      loadimages() {
        //判断图片是否加载完成 只有完成时才发送事件
        if (++this.imgCount === this.shopShow.detailImage[0].list.length) {
          this.$emit('loadimages')
        }
      }
    }
  }
</script>

<style scoped>
  .shopShow {
    padding: 20px 10px;
    border-bottom: 5px solid rgba(100, 100, 100, .1);
  }

  .desc {
    display: inline-block;
    margin: 15px 0px;
    font-size: 16px;
  }

  .start {
    float: left;
  }

  .end {
    float: right;
  }

  .start, .end{
    width: 90px;
    height: 1px;
    border: 1px solid #a3a3a5;
    position: relative;
  }

  .end::after {
    right: 0;

  }

  .start::before, .end::after {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333333;
    position: absolute;
    bottom: 0;
  }

  .imageShow {

  }

  .key {
    font-size: 15px;
    color: #333333;
    margin: 10px 0 10px 15px;
  }

  .img {
    width: 100%;
  }
</style>
