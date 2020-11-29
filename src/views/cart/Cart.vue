<template>
  <div id="cart">
    <cart-nav-bar/>
    <scroll-area class="scroll-area" ref="scroll">
      <cart-list/>
    </scroll-area>
    <cart-bot-bar/>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import ScrollArea from 'components/common/scroll/ScrollArea.vue'

import CartNavBar from './childCpns/CartNavBar'
import CartList from './childCpns/CartList'
import CartBotBar from './childCpns/CartBotBar'
export default {
  name: 'Cart',
  components: {
    CartNavBar,
    CartList,
    CartBotBar,
    ScrollArea
  },
  activated() {
    // 当购物车商品足够多时,防止BS不能正确获取scrollerHeight而不能滚动
    this.$refs.scroll.refresh()
  }
}
</script>

<style>
  #cart {
    height: 100vh;
  }
  .scroll-area {
    height: calc(100% - 44px - 49px - 26px);
    overflow: hidden;
  }
</style>