<template>
  <div class="profile-info">
    <div class="info-login">
      <img src="~assets/img/profile/avatar.svg"/>
      <div class="login-iphone">
        <div class="login">
          登录/注册
        </div>
        <div class="iphone">
          <img src="~assets/img/profile/phone.svg">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="arrow-left">
        <img src="~assets/img/common/arrow-left.svg">
      </div>
    </div>
    <div class="info-money">
      <div class="money-left">
        <div class="content">
          <span class="count">0.00</span>
          <span>元</span>
          <div>我的余额</div>
        </div>
      </div>
      <div class="money-center">
        <div class="content">
          <span class="count">0</span>
          <span>个</span>
          <div>我的优惠</div>
        </div>
      </div>
      <div class="money-right">
        <div class="content">
          <span class="count">0</span>
          <span>分</span>
          <div>我的积分</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileInfo"
  }
</script>

<style scoped>
  .profile-info {
    width: 100%;
    height: 190px;
    border-bottom: 14px solid rgba(100, 100, 100, .1);
  }

  .info-login {
    display: flex;
    align-items: center;
    height: 90px;
    background-color: var(--color-tint);
    color: #ffffff;
  }

  .info-login img {
    margin-left: 10px;
    width: 70px;
    height: 70px;
  }

  .login-iphone {
    height: 100%;
    margin-top: 45px;
    float: left;
  }

  .login {
    margin-left: 5px;
  }

  .iphone {
    font-size: 13px;
    margin-top: 3px;
    padding: 0px;
  }

  .iphone img{
    width: 20px;
    height: 20px;
    position: relative;
    left: -10px;
  }

  .iphone span {
    position: relative;
    top: -6px;
    left: -10px;
  }

  .arrow-left {
    position: absolute;
    right: 15px;
  }

  .arrow-left img{
    width: 15px;
    height: 15px;

  }

  .info-money {
    width: 100%;
    height: 100px;
    display: flex;
    /*background-color: red;*/
  }

  .money-left, .money-center, .money-right {
    width: 34%;
    height: 87px;
    border-right: 1px solid rgba(0, 0, 0, .06);
    text-align: center;
  }

  .money-left, .money-center, .money-right div{
    font-size: 13px;
  }

  .content {
    margin-top: 25px;
  }

  .content div {
    margin-top: 5px;
  }

  .count {
    font-size: 22px;
    font-weight: 700;
    color: #ff5f3e;;
  }
</style>
