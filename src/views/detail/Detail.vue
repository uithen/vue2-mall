<template>
  <div id="detail">
    <detail-nav-bar @navClick="navClick" ref="nav"/>
    <scroll class="detail-scroll" ref="scroll" :pull-up-load="true" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods-info="goodsInfo"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
      <detail-param-info :params-info="paramsInfo" ref="param"/>
      <detail-rate :detail-rate="detailRate" ref="rate"/>
      <goods-list :goods="detailRecommend" ref="recommend"/>
    </scroll>
    <detail-bot-bar/>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from './childCpns/DetailNavBar.vue'

import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import DetailSwiper from './childCpns/DetailSwiper.vue'
import DetailBaseInfo from './childCpns/DetailBaseInfo.vue'
import DetailShopInfo from './childCpns/DetailShopInfo.vue'
import DetailGoodsInfo from './childCpns/DetailGoodsInfo.vue'
import DetailParamInfo from './childCpns/DetailParamInfo.vue'
import DetailRate from './childCpns/DetailRate.vue'
import DetailBotBar from './childCpns/DetailBotBar.vue'

import { getDetail, GoodsInfo, ShopInfo, ParamsInfo, getRecommend } from 'network/detail.js'
import { imgItemMixin, backTopMixin } from 'common/mixin.js'
import { debounce } from 'common/utils.js'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,

    Scroll,
    GoodsList,

    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailRate,
    DetailBotBar

  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      detailRate: {},
      detailRecommend: {},
      navY: [],
      setNavY: null,
      crtIndex: 0
    }
  },
  mixins: [imgItemMixin, backTopMixin],
  methods: {
    async _getDetail() {
      const response = await getDetail(this.iid)
      const data = response.result
      // 取出轮播图
      this.topImages = data.itemInfo.topImages
      
      // 取出商品基本信息
      this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      
      // 取出商家店铺
      this.shopInfo = new ShopInfo(data.shopInfo)

      // 取出商品详情
      this.detailInfo = data.detailInfo

      // 取出商品参数
      this.paramsInfo = new ParamsInfo(data.itemParams.info, data.itemParams.rule)

      // 取出商品评价
      this.detailRate = data.rate.list ? data.rate.list[0] : {}
    },
    async _getRecommend() {
      const response = await getRecommend()
      this.detailRecommend = response.data.list
      // console.log(response)
    },
    imgLoad() {
      this.refresh()
      this.setNavY()
    },
    navClick(index) { // 导航与内容单击联动效果
      this.$refs.scroll.scrollTo(0, -this.navY[index], 100)
    },
    getNavY() { 
      this.navY = []
      this.navY.push(0) 
      this.navY.push(this.$refs.param.$el.offsetTop) 
      this.navY.push(this.$refs.rate.$el.offsetTop) 
      this.navY.push(this.$refs.recommend.$el.offsetTop) 
      this.navY.push(Number.MAX_SAFE_INTEGER)
      // console.log(this.navY)
    },
    contentScroll(pos) { // 导航与内容滚动联动效果以及显示/隐藏回到顶部按钮
      const posY = -pos.y 
      const len = this.navY.length
      // hack实现: 给navY额外追加一项,虽然内存增加了,但简化了条件判断,代码性能和可读性提高了.以时间换空间,这是值得的
      for (let i = 0; i < len - 1; i++) {
        if (this.crtIndex !== i && (posY >= this.navY[i] && posY < this.navY[i+1])) {
          this.crtIndex = i 
          this.$refs.nav.crtIndex = this.crtIndex
          // console.log('once call')
        }
      }

      this.setBackTopStatus(pos)
      /** 普通实现: 条件判断过于冗长和不便阅读
       *    @条件一: 防止scroll事件频繁触发 
       *    @条件二: 滚动区间的判断,并且须对数组最后一项的区间判断做额外判断处理(arr[len]显然取不到)
      for (let i = 0; i < len; i++) {
        if (this.crtIndex !== i && ((posY >= this.navY[i] && posY < this.navY[i+1]) || posY > this.navY[len - 1] && i >= len - 1)) {
          this.crtIndex = i 
          this.$refs.nav.crtIndex = this.crtIndex
          console.log(this.crtIndex)
        }
      }
      */
    },

  },
  created() {
    // 保存跳转到详情页携带的数据iid
    this.iid = this.$route.params.iid
    
    // 请求对应iid商品的相关所有数据
    this._getDetail()
    
    // 请求详情页[推荐部分]数据
    this._getRecommend()

    // 对获取顶部导航对应主题内容的offsetTop的防抖处理
    this.setNavY = debounce(this.getNavY)
  },
  destroyed() {
    this.$bus.$off('imgLoad', this.imgItemListener)
  }
}
</script>

<style>
  #detail {
    overflow: hidden;
    height: 100vh;
    /* height: calc(100vh - 49px); */
  }
  .detail-scroll {
    height: calc(100% - 44px - 49px);
  }
</style>