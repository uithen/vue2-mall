<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  BScroll.use(Pullup)
  
  export default {
    data() {
      return {
        scroll: null
      }
    },
    props: {
      // 是否实时记录滚动的坐标由所在组件的具体业务需求决定
      probeType: {
        type: Number,
        default: 0
      },
      // 是否需要上拉加载由所在组件的具体业务需求决定
      pullUpLoad: {
        type: Boolean,
        default: false 
      }
    },
    mounted() {
      this.initScroll()
    },
    
    methods: {
      initScroll() {
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
          click: true
        })
        if (this.probeType === 2 || this.probeType === 3) {
          this.scroll.on('scroll', pos => {
            this.$emit('scroll', pos)
          })
        }
        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
          // this.scroll.finishPullUp()
          // this.scroll.refresh()
          })
        }
      },
      scrollTo(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
        // console.log(11)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll.y 
      }
    }
  }
</script>

<style>

</style>