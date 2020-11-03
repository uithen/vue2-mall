<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-show="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-show="isActive" class="item-active-icon">
      <slot name="item-active-icon"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      // isActive: false,
    }
  },
  props: {
    path: {
      type: null,
      required: true 
    },
    activeColor: {
      String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => {})
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path)
    },
    activeStyle() {
      // return {color: this.$route.path.includes(this.path) ? 'red' : ''}
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style>
  #tab-bar-item {
    flex: 1;
    margin: 0 11px;
    cursor: pointer;
  }
  #tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .item-text {
    font-size: 14px;
    font-weight: 600;
    margin-top: 3px;
    color: #333;
  }
</style>