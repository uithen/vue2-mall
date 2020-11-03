<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item,index) of goods" 
      :key="index"
      :goodsItem="item"
    />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .goods-list {
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
  }
</style>