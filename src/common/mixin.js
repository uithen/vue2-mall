import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop.vue'

// 图片加载全局事件
export const imgItemMixin = {
  data() {
    return {
      imgItemListener: null,
      refresh: null  
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh)
    this.imgItemListener = () => {
      this.refresh && this.refresh()
    }
    this.$bus.$on('imgLoad', this.imgItemListener)
    console.log('mixin test')
  },
}

// BackTop
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    setBackTopStatus(pos) {
      this.isShowBackTop = (-pos.y) > 1000 
    } 
  }
}
