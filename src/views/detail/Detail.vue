<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="detail-scroll" ref="scroll" :pullUpLoad="true" :probeType="3">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goodsInfo="goodsInfo"/>
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <detail-param-info :paramsInfo="paramsInfo"/>
      <detail-rate :detail-rate="detailRate"/>
      <goods-list :goods="detailrecommend"/>
    </scroll>
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

import { getDetail, GoodsInfo, ShopInfo, ParamsInfo, getRecommend } from 'network/detail.js'
import { debounce } from 'common/utils.js'
import { imgItemMixin } from 'common/mixin.js'
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
    DetailRate

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
      detailrecommend: {},
    }
  },
  mixins: [imgItemMixin],
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
      this.detailrecommend = response.data.list
      console.log(response)
    },

    imgLoad() {
      this.$refs.scroll.refresh()
    }
  },
  created() {
    // 保存跳转到详情页携带的数据iid
    this.iid = this.$route.params.iid
    
    // 请求对应iid商品的相关所有数据
    this._getDetail()
    
    // 请求详情页[推荐部分]数据
    this._getRecommend()
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
  }
  .detail-scroll {
    height: calc(100% - 44px);
  }
</style>