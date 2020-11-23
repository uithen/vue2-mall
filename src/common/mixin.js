import { debounce } from './utils'
// Home、Detail页图片加载全局事件的混入
export const imgItemMixin = {
  data() {
    return {
      imgItemListener: null 
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh)
    this.imgItemListener = () => {
      refresh && refresh()
    }
    this.$bus.$on('imgLoad', this.imgItemListener)
    console.log('mix in')
  },
}