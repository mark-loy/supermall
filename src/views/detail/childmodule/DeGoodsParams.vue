<template>
  <div class="goodsParams" v-if="Object.keys(goodsParams).length > 0">
    <table class="size">
      <tr v-for="size in goodsParams.sizes[0]">
        <td v-for="item in size">{{item}}</td>
      </tr>
    </table>
    <table class="infos">
      <tr v-for="(infos, index) in goodsParams.infos" :class="{solid: index === 0}" :key="index">
        <td class="key" >{{infos.key}}</td>
        <td class="value" >{{infos.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DeGoodsParams",
    props: {
      goodsParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goodsParams {
    padding: 25px 15px;
    /*display: flex;*/
    /*align-items: center;*/
    /*text-align: center;*/
    font-size: 14px;
    border-bottom: 5px solid rgba(100, 100, 100, .1);
    /*width: 100%;*/
  }

  .size {
    /*display: flex;*/
    /*justify-content: space-between;*/
    width: 100%;
    border-collapse: collapse;
  }

  .size tr {
    /*display: flex;*/
    height: 45px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }


  .infos {
    width: 100%;
    border-collapse: collapse;
  }

  .infos tr {
    /*display: flex;*/
    height: 45px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .key {
    width: 23%;
  }

  .value {
    width: 67%;
    color: var(--color-high-text);
  }

  .solid {
    border-top: 2px solid rgba(100, 100, 100, .1);
  }
</style>
