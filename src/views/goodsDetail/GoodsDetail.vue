<template>
  <div class="detail">
    <nav-bar class="detail-navbar">
      <template #left>
        <div>1111111</div>
      </template>
      <template #center>
        <span>商品</span>
        <span>参数</span>
        <span>评论</span>
        <span>推荐</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: {
    NavBar,
  }
}
</script>

<style>
  .detail-navbar {
    background-color: #fff;
  }
  .detail-navbar .center {
    display: flex;
  }
  .detail-navbar .center span {
    flex: 1;
  }
</style>