<template>
  <nav-bar class="cart-nav">
    <template #center>
      <span>购物车({{ cartListLen }})</span>
    </template>
  </nav-bar>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(['cartListLen'])
  }
}

</script>

<style>
  .cart-nav {
    font-size: 20px;
    color: var(--color-background);
    background-color: var(--color-tint);
  }
</style>