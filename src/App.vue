<template>
  <div id="app">
    <keep-alive exclude="TheDetail">
      <router-view/>
    </keep-alive>
    <!-- <main-tab-bar v-if="!/^\/detail/.test($route.path)"/> -->
    <main-tab-bar v-if="!$route.path.includes('/detail')"/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
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
