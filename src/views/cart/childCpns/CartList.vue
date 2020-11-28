<template>
  <div class="cart-list">
    <div class="cart-item" v-for="(item,index) of cartList" :key="index">
      <div class="item-selector">
        <check-btn :is-checked="item.checked" @click.native="checkClick(item)"/>
      </div>
      <div class="item-img">
        <img :src="item.img" alt="商品图片">
      </div>
      <div class="item-info">
        <div class="item-title">{{ item.title }}</div>
        <div class="item-desc">商品描述: {{ item.desc }}</div>
        <div class="info-bottom">
          <div class="item-price left">¥{{ item.price }}</div>
          <div class="item-count right">x{{ item.count }}</div>
        </div>
      </div>
    </div>
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
    ...mapGetters(['cartList'])
  },
  methods: {
    checkClick(item) {
      item.checked = !item.checked
    }
  }
}
</script>

<style>
  .cart-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    display: flex;
    width: 52px;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 1px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-left: 3px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 6px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>