<template>
  <nav-bar class="detail-navbar">
    <template #left >
      <img src="~assets/img/common/back.svg" alt="" @click="goBack">
    </template>
    <template #center>
      <div
        v-for="(item,index) of titles" 
        :key="index"
        @click="titleClick(index)"
        :class="{active:index===currentIndex}"
      >
        {{ item }}
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style>
  .detail-navbar {
    background-color: #fff;
    font-size: 14px;
  }
  .detail-navbar img {
    vertical-align: middle;
    margin-bottom: 3px;
  }
  .detail-navbar .center {
    display: flex;
    flex-flow: nowrap;
  }
  .detail-navbar .center div {
    flex: 1;
  }
</style>