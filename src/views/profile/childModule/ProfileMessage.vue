<template>
  <div >
    <div class="profile-message">
      <div class="message">
        <img src="~assets/img/profile/message.svg">
        <span>我的消息</span>
      </div>
      <div class="number-shop">
        <img src="~assets/img/profile/pointer.svg">
        <span>积分商城</span>
      </div>
      <div class="vip">
        <img src="~assets/img/profile/vip.svg">
        <span>会员卡</span>
      </div>
    </div>
    <div class="profile-link">
      <div class="cart">
        <img src="~assets/img/profile/cart.svg">
        <span>我的购物车</span>
      </div>
      <div class="shopping">
        <img src="~assets/img/profile/shopping.svg">
        <span>下载购物app</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileMessage"
  }
</script>

<style scoped>
  .profile-message {
    height: 160px;
    width: 100%;
    /*background-color: red;*/
    border-bottom: 14px solid rgba(100, 100, 100, .1);
  }



  .profile-message div {
    height: 48px;
    display: flex;
    line-height: 48px;
  }



  .profile-message img {
    width: 22px;
    height: 22px;
    position: relative;
    top: 13px;
    left: 10px;

  }

  .profile-message span {
    display: block;
    font-size: 15px;
    margin-left: 20px;
    width: calc(100% - 22px);
  }

  .number-shop span, .message span, .cart span {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .profile-link {
    width: 100%;
    height: 80px;
  }

  .profile-link div {
    height: 40px;
    display: flex;
    line-height: 40px;
  }

  .profile-link img {
    width: 22px;
    height: 22px;
    position: relative;
    top: 8px;
    left: 10px;

  }

  .profile-link span {
    display: block;
    font-size: 15px;
    margin-left: 20px;
    width: calc(100% - 22px);
  }

</style>
