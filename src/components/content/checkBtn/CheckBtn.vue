<template>
  <div class="check-btn" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .check-btn {
    border: 1px solid #ccc;
    border-radius: 50%;
  }
  .check-btn img {
    width: 18px;
    height: 18px;
  }
  .check {
    background-color: var(--color-tint);
    border-color: #fff;
  }
</style>