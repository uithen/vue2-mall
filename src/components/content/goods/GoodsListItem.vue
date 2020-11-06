<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" @load="imgLoad"/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsItem: {
      Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    },
    itemClick(event) {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style>
  .goods-item {
    position: relative;
    width: 48%;
    padding-bottom: 40px;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    right: 0;
    bottom: 5px;
    left: 0;
    /* overflow: hidden; */
    text-align: center;
    font-size: 12px;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>