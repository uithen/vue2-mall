<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <!-- <main-tab-bar v-if="!/^\/detail/.test($route.path)"></main-tab-bar> -->
    <main-tab-bar v-if="!$route.path.includes('/detail')"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {
    name: 'app',
    components: {
      MainTabBar
    },
  }
</script>

<style>
  @import "assets/css/base.css"
</style>
