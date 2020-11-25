<template>
  <div class="tab-control">
    <div
      v-for="(item,index) of titles" 
      :key="index" 
      class="tab-control-item" 
      :class="{active:index===currentIndex}"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      Array,
      default() {
        return []
      }
    }
  },
  methods: {
    tabClick(i) {
      this.currentIndex = i
      this.$emit('tabClick', i)
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
    z-index: 999;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control span {
    padding: 5px;
  }
  /* .active {
    color: var(--color-high-text);
    font-weight: bold;
  } */
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>