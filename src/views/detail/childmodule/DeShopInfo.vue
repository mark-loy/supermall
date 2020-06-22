<template>
  <div class="shopInfo" v-if="Object.keys(shopInfo).length > 0">
    <div class="shop-top">
      <img :src="shopInfo.logo">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="sells">
          <div class="sells-count">
            <span>{{shopInfo.sells | sellsFormat}}</span>
          </div>
          <div class="sell-text">
            <span>总销量</span>
          </div>
        </div>
        <div class="sells">
          <div class="shops-count">
            <span>{{shopInfo.goodsCount}}</span>
          </div>
          <div class="shops-text">
            <span>全部宝贝</span>
          </div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr class="tr-score" v-for="(item, index) in shopInfo.score">
            <td class="td-score">{{item.name}}</td>
            <td :class="{scoreColor: item.isBetter}" class="score">{{item.score}}</td>
            <td :class="{betterColor: item.isBetter}" class="better">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="entry-shop">
        <span>进店逛逛</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DeShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellsFormat: function (value) {
        if (value < 10000) return value
        return (value/10000).toFixed(1) +'万'
      }
    }
  }
</script>

<style scoped>
  .shopInfo {
    padding: 25px 8px;
    border-bottom: 5px solid rgba(100, 100, 100, .1);
    height: 230px;
  }

  .shop-top {
    line-height: 45px;
    display: flex;
  }

  .shop-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .shop-top span {
    margin-left: 10px;
    color: #333333;
  }

  .shop-middle {
    display: flex;
    margin-top: 10px;
    /*height: 50px;*/
    /*justify-content: space-evenly;*/
    /*height: 70px;*/
  }


  .shop-middle-left {
    display: flex;
    /*flex: 1;*/
    align-items: center;
    text-align: center;
    width: 50%;
    border-right: 1px solid rgba(0, 0, 0, .1);
    color: #333333;
    height: 45px;
    margin-top: 20px;
    /*justify-content: space-evenly;*/
    /*line-height: 25px;*/

  }

  .sells {
    flex: 1;
  }

  .sells-count  span{
    font-size: 18px;
  }

  .shops-count span {
    font-size: 18px;
  }
  .sell-text  span {
    font-size: 12px;
    margin-top: 10px;
  }

  .shops-text span {
    font-size: 12px;
    margin-top: 10px;
  }

  .shop-middle-right {
    display: flex;
    width: 50%;
    font-size: 13px;
    text-align: center;
    align-items: center;
    /*line-height: 25px;*/
  }

  .shop-middle-right table {
    /*line-height: 20px;*/
    margin-left: 30px;
    width: 130px;
  }

  .td-score {
    padding: 5px 0px;
    color: #222222;
  }

  .score {
    color: #5ea732;
  }

  .scoreColor {
    color: #f13e3a;
  }

  .better {
    background-color: #5ea732;
    color: #f2f5f8;
    display: inline-block;
    margin-top: 5px;
  }

  .betterColor {
    background-color: #f13e3a;
    color: #f2f5f8;
    display: inline-block;
    margin-top: 5px;
  }

  .shop-bottom {
    margin-top: 10px;
    text-align: center;
  }

  .entry-shop {
    display: inline-block;
    width: 130px;
    height: 30px;
    border-radius: 10px;
    background-color: #f2f5f8;

  }

  .entry-shop span {
    position: relative;
    top: 6px;
    font-size: 14px;
  }


</style>
