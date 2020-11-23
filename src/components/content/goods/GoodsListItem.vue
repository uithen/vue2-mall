<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImg" @load="imgLoad"/>
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
      // if (this.$route.path.includes('/detail')) {
      //   this.$bus.$emit('detailImgLoad')
      // } else if (this.$route.path.includes('/home')) {
      //   this.$bus.$emit('homeImgLoad')
      // }
    },
    itemClick(event) {
      let toGoodsItem = this.goodsItem.iid ? this.goodsItem.iid : this.goodsItem.item_id
      this.$router.push('/detail/' + toGoodsItem).catch(_ => {})
    },
  },
  computed: {
    // 主页和详情页都复用了GoodsList，但是图片的位置有些差异
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
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