<template>
  <div id="detail">
    <detail-nav-bar @navClick="navClick" ref="nav"/>
    <scroll-area class="detail-scroll" ref="scroll" :pull-up-load="true" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods-info="goodsInfo"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
      <detail-param-info :params-info="paramsInfo" ref="param"/>
      <detail-rate :detail-rate="detailRate" ref="rate"/>
      <goods-list :goods="detailRecommend" ref="recommend"/>
    </scroll-area>
    <detail-bot-bar @addCart="addCart"/>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from './childCpns/DetailNavBar'

import ScrollArea from 'components/common/scroll/ScrollArea'
import GoodsList from 'components/content/goods/GoodsList'

import DetailSwiper from './childCpns/DetailSwiper'
import DetailBaseInfo from './childCpns/DetailBaseInfo'
import DetailShopInfo from './childCpns/DetailShopInfo'
import DetailGoodsInfo from './childCpns/DetailGoodsInfo'
import DetailParamInfo from './childCpns/DetailParamInfo'
import DetailRate from './childCpns/DetailRate'
import DetailBotBar from './childCpns/DetailBotBar'

import { getDetail, GoodsInfo, ShopInfo, ParamsInfo, getRecommend } from 'network/detail.js'
import { imgItemMixin, backTopMixin } from 'common/mixin.js'
import { debounce } from 'common/utils.js'

import { mapActions } from 'vuex'

export default {
  name: 'TheDetail',
  components: {
    DetailNavBar,

    ScrollArea,
    GoodsList,

    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailRate,
    DetailBotBar,

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
      crtIndex: 0,
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
    addCart() {
      // 1.保存购物车界面需要用到的当前商品信息
      const cartItem = {
        iid: this.iid,
        img: this.topImages[0],
        desc: this.goodsInfo.desc,
        title: this.goodsInfo.title,
        price: this.goodsInfo.realPrice,
      }
      console.log(this.iid)
      // 2. 添加当前商品至购物车
      // this.$store.dispatch('addCartBy', cartItem).then(res => console.log(res))
      this.addCartBy(cartItem).then(res => {
        this.$toast.show(res)
      })
    },
    ...mapActions(['addCartBy'])
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
    /* height: calc(100% - 44px - 49px); */
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 49px;
    left: 0;
  }
</style>