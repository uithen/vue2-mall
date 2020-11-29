<template>
  <div class="cart-botbar">
    <div class="check-all">
      <check-btn/>
      <span>全选</span>
    </div>
    <div class="totalPrice"> 合计: <strong>{{ totalPrice }}</strong></div>
    <div class="checkout"> 去结算({{ checkLen }})</div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkBtn/CheckBtn'

import { mapGetters } from 'vuex'

export default {
  components: {
    CheckBtn
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '¥' + this.cartList.filter(item => item.checked)
              .reduce((prev, item) => item.price * item.count + prev, 0)
              .toFixed(2)
    },
    checkLen() {
      return this.cartList.filter(item => item.checked).length
    }
  },
}
</script>

<style>
  .cart-botbar {
    display: flex;
    align-items: center;
    height: 26px;
    /* line-height: 26; */
    font-size: 14px;
    /* background-color: #ccc; */
  }
  .check-all {
    display: flex;
    align-items: center;
    width: 62px;
    margin-left: 5px;
  }
  .check-all .check-btn {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    line-height: 0;
  }
  .cart-botbar .totalPrice {
    flex: 1;
    padding-left: 26px;
  }
    .cart-botbar .totalPrice strong {
      color: orangered;
    }
  .checkout {
    width: 93px;
    height: 100%;
    line-height: 26px;
    text-align: center;
    background-color: var(--color-tint);
    color: #fff;
  }
</style>