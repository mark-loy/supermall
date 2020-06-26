<template>
  <div class="total">
    <div class="all-select" @click="clickSelect">
      <img src="~assets/img/cart/tick.svg" :class="{highColor: shopCount === productList.length, borderColor: !(shopCount === productList.length)}"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计:{{totalPrice}}</span>
    </div>
    <div class="computed">
      <span>去结算({{shopCount}})</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartTotal",
    props: {
      productList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      totalPrice() {
        // console.log(this.productList);
        return '￥'+this.productList.filter(item => {
          return item.isChecked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      shopCount() {
        return this.productList.filter(item => {
          return item.isChecked
        }).length
      }
    },
    methods: {
      clickSelect() {
        this.$store.dispatch('updateIsChecked',this.shopCount === this.productList.length)
      },
    }
  }
</script>

<style scoped>
  .total {
    display: flex;
    width: 100%;
    background-color: #eee;
    height: 49px;
    line-height: 49px;
    border-top: 3px solid rgba(100, 100, 100, .1);
    position: fixed;
    bottom: 49px;
    /*text-align: center;*/
  }

  .all-select , .computed {
    text-align: center;
  }

  .all-select {
    width: 20%;
    font-size: 14px;
    /*align-items: center;*/
    /*justify-content: center;*/
  }

  .all-select img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: relative;
    top: 3px;
    right: 4px;
  }

  .all-select span {
    color: #888888;
  }

  .borderColor {
    border: 2px solid #cccccc;
  }

  .highColor {
    border-color: #ff5777;
    background-color: #ff5777;
  }

  .total-price {
    width: 50%;

  }

  .computed {
    width: 30%;
    background-color: orangered;
    font-size: 15px;
    color: #ffffff;
  }

</style>
