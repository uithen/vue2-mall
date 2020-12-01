<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      isShow: false 
    }
  },
  methods: {
    show(msg, duration = 1000) {
      this.message = msg
      this.isShow = true 
      setTimeout(() => {
        this.message = ''
        this.isShow = false 
      }, duration)
    }
  }
}
</script>

<style>
  .toast {
    z-index: 9999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 11px;
    padding: 8px;
    color: #fff;
    background-color: rgba(0, 0, 0, .6);
  }
</style>