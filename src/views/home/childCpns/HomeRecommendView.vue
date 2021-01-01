<template>
  <div class="recommend">
    <div v-for="(item,index) of recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    justify-content:space-around;
    text-align: center;
    padding: 11px 0 52px 0;
    font-size: 14px;
    border-bottom: 6px solid pink;
  }
  .recommend div {
    width: 72px;
    height: 72px;
  }
  .recommend div img{
    width: 100%;
    height: 100%;
    margin-bottom: 8px;
  }
</style>