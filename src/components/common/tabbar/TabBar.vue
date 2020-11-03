<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  #tab-bar {
    /* 定位相关 */
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;

    /* 利用flex进行布局 */
    display: flex;
    text-align: center;

    /* 本身的样式 */
    background-color: #f6f6f6;
    height: 49px;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);

  }
</style>