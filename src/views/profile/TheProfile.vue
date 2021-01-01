<template>
  <div id="profile">
    <nav-bar class="profile-navbar">
      <template #center>个人中心</template>
    </nav-bar>
    <profile-user/>
    <!--该模块没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <profile-list-view :list-data="orderList" class="order-list"></profile-list-view>
    <profile-list-view :list-data="serviceList" class="service-list"></profile-list-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

import ProfileUser from './childCpns/ProfileUser'
import ProfileListView from './childCpns/ProfileListView'
export default {
  components: {
    NavBar,

    ProfileUser,
    ProfileListView
  },
  data() {
    return {
      orderList: [
        {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
        {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
        {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
      ],
      serviceList: [
        {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
        {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
      ]
    }
  },
  mounted: function () {
  }
}
</script>

<style>
  #profile {
    background-color: #f2f2f2;
  }

  .profile-navbar {
    font-weight: bold;
    background-color: var(--color-tint);
    color: #fff;
  }

  .account {
    display: flex;
  }

  .account-item {
    width: 100%;
    margin-right: 1px;
    text-align: center;
    background-color: #fff;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    padding: 18px;
    font-size: 13px;
    color: #666;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, 
  .service-list {
    margin-top: 12px;
  }
</style>