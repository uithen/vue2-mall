<template>
  <div class="detail-botbar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="addcart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.detail-botbar {
  position: relative;
  height: 49px;
  display: flex;
  text-align: center;
  background-color: #fff;
  }

  .detail-botbar .bar-item {
    flex: 1;
    display: flex;
  }

  .detail-botbar .bar-item > div {
    flex: 1;
  }

  .detail-botbar .bar-left .text {
    font-size: 13px;
  }

  .detail-botbar .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .detail-botbar .bar-left .service {
    background-position:0 -54px;
  }

  .detail-botbar .bar-left .shop {
    background-position:0 -98px;
  }

  .detail-botbar .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .detail-botbar .bar-right .addcart {
    background-color: #ffe817;
    color: #333;
  }

  .detail-botbar .bar-right .buy {
    background-color: #f69;
  }
</style>