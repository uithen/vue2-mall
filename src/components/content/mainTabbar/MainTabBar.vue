<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff8198">
        <template #item-icon>
          <img src="~assets/img/tabbar/home.svg">
        </template>
        <template #item-active-icon>
          <img src="~assets/img/tabbar/home_active.svg">
        </template>
        <template #default>
          <div>主页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff8198">
        <template #item-icon>
          <img src="~assets/img/tabbar/category.svg">
        </template>
        <template #item-active-icon>
          <img src="~assets/img/tabbar/category_active.svg">
        </template>
        <template #default>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#ff8198">
        <template #item-icon>
          <img src="~assets/img/tabbar/cart.svg">
        </template>
        <template #item-active-icon>
          <img src="~assets/img/tabbar/cart_active.svg">
        </template>
        <template #default>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff8198">
        <template #item-icon>
          <img src="~assets/img/tabbar/profile.svg">
        </template>
        <template #item-active-icon>
          <img src="~assets/img/tabbar/profile_active.svg">
        </template>
        <template #default>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
}
</script>

<style>

</style>