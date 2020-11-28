<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .nav-bar {
    position: relative;
    height: 44px;
    display: flex;
    box-shadow: 0 1px 1px  rgba(26, 206, 226, .1);
    line-height: 44px;
    text-align: center;
    z-index: 999;
  }
  .nav-bar .left,
  .nav-bar .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>