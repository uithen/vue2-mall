<template>
  <div class="cart-botbar">
    <div class="check-all">
      <check-btn @click.native="allClick" :is-checked="isCheckedAll"/>
      <span>全选</span>
    </div>
    <div class="totalPrice"> 合计: <strong>{{ totalPrice }}</strong></div>
    <div class="checkout" @click="checkoutClick"> 去结算({{ checkLen }})</div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkBtn/CheckBtn'

import { mapGetters } from 'vuex'

export default {
  components: {
    CheckBtn
  },
  data: () => ({
    // flag: false
  }),
  computed: {
    ...mapGetters(['cartList', 'cartListLen']),
    totalPrice() {
      return '¥' + this.cartList.filter(item => item.checked)
              .reduce((prev, item) => item.price * item.count + prev, 0)
              .toFixed(2)
    },
    checkLen() {
      return this.cartList.filter(item => item.checked).length
    },
    isCheckedAll() {
      return !!this.cartListLen && !(this.cartList.find(item => !item.checked))
    }
  },
  methods: {
    allClick() {
      if (this.isCheckedAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    checkoutClick() {
      if (!this.checkLen) {
        this.$toast.show('请至少选择一件商品')
      } else {
        this.$toast.show('支付功能暂未开通')
      }
    }
  }
}
</script>

<style>
  .cart-botbar {
    display: flex;
    position: fixed;
    right: 0;
    bottom: 49px;
    left: 0;
    align-items: center;
    height: 26px;
    font-size: 14px;
    border-top: 1px solid #ccc;
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