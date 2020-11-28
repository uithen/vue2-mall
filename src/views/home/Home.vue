<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <template #center>购 物 街</template>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="fixed" v-show="isTabControlFixed"/>
    <scroll-area class="scroll" ref="scroll" :probeType="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll-area>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ScrollArea from 'components/common/scroll/ScrollArea.vue'

import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import HomeSwiper from './childCpns/HomeSwiper.vue'
import RecommendView from './childCpns/RecommendView.vue'
import FeatureView from './childCpns/FeatureView.vue'

import { getHomeMultidata, getHomeGoods } from 'network/home.js'
import { debounce } from 'common/utils.js'
import { imgItemMixin, backTopMixin } from 'common/mixin.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    ScrollArea,

    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
      // isShowBackTop: false,
      tabControlOffsetTop: 0,
      isTabControlFixed: false,
      saveY: 0, 
    }
  },
  mixins: [imgItemMixin, backTopMixin],
  created() {
    this.getHomeMultidata()
    // 默认请求对应分类的第一页商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  destroyed() {
    console.log('home destroyed')
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    this.$bus.$off('imgLoad', this.imgItemListener)
    // this.$refs.scroll.refresh()
  },
  methods: {
    contentScroll(pos) {
      // this.isShowBackTop = (-pos.y) > 1000  
      this.setBackTopStatus(pos)
      this.isTabControlFixed = (-pos.y) >= this.tabControlOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperImgLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 事件监听相关
    */
   tabClick(i) {
     this.currentType = i === 1
      ? 'new' : i === 2
      ? 'sell' : 'pop'
    this.$refs.tabControl1.currentIndex = i 
    this.$refs.tabControl2.currentIndex = i 
   },
    // 请求banner & recommend 数据
    async getHomeMultidata() {
      const response = await getHomeMultidata()
      this.banners = response.data.banner.list
      this.recommends = response.data.recommend.list
    },
      // 请求商品列表数据
    async getHomeGoods(type) {
      const page = this.goods[type].page + 1
      const response = await getHomeGoods(type, page)
      this.goods[type].list.push(...response.data.list)
      this.goods[type].page += 1 
      // 每次触发 pullingUp 钩子获取数据后，主动调用 finishPullUp()
      const loadMore = debounce(this.$refs.scroll.finishPullUp, 100)
      loadMore()
    }
  }
}
</script>

<style>
  #home {
    position: relative;
    height: 100vh;
  }
  .home-navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bold;
  }
  .scroll {
    /* 计算滚动区域的高度方式一: calc函数 */
    /* height: calc(100vh - 44px - 49px); */
    overflow: hidden;
    /* 计算滚动区域的高度方式二: 定位 */
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 49px;
    left: 0;
  } 
  .fixed {
    position: relative;
  }
</style>