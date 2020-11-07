<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="detail-scroll" ref="detailScroll" :pullUpLoad="true" :probeType="3">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goodsInfo="goodsInfo"/>
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <detail-param-info :paramsInfo="paramsInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childCpns/DetailNavBar.vue'

import Scroll from 'components/common/scroll/Scroll.vue'

import DetailSwiper from './childCpns/DetailSwiper.vue'
import DetailBaseInfo from './childCpns/DetailBaseInfo.vue'
import DetailShopInfo from './childCpns/DetailShopInfo.vue'
import DetailGoodsInfo from './childCpns/DetailGoodsInfo.vue'
import DetailParamInfo from './childCpns/DetailParamInfo.vue'

import { getDetail, GoodsInfo, ShopInfo, ParamsInfo } from 'network/detail.js'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,

    Scroll,

    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,

  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {}
    }
  },
  methods: {
    async _getDetail() {
      const response = await getDetail(this.iid)
      const data = response.result
      // 轮播图数据
      this.topImages = data.itemInfo.topImages
      
      // 商品基本信息数据
      this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      
      // 商家店铺数据
      this.shopInfo = new ShopInfo(data.shopInfo)

      // 商品详情数据
      this.detailInfo = data.detailInfo

      // 商品参数数据
      this.paramsInfo = new ParamsInfo(data.itemParams.info, data.itemParams.rule)
      console.log(response)
    },
    imgLoad() {
      this.$refs.detailScroll.refresh()
    }
  },
  created() {
    // 保存跳转到详情页携带的数据iid
    this.iid = this.$route.params.iid
    
    // 请求对应iid商品的相关所有数据
    this._getDetail()
    
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