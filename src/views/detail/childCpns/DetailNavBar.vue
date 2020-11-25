<template>
  <nav-bar class="detail-navbar">
    <template #left>
      <img src="~assets/img/common/back.svg" @click="goBack">
    </template>
    <template #center>
      <div v-for="(item,index) of titles" :key="index" @click="navClick(index)" :class="{active:index===crtIndex}">
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
      crtIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    navClick(index) {
      this.crtIndex = index
      this.$emit('navClick', index)
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