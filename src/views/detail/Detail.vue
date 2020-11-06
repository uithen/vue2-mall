<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :topImages="topImages"/>
    <detail-base-info :goodsInfo="goodsInfo"/>
  </div>
</template>

<script>
import DetailNavBar from './childCpns/DetailNavBar.vue'
import DetailSwiper from './childCpns/DetailSwiper.vue'
import DetailBaseInfo from './childCpns/DetailBaseInfo.vue'

import { getDetail, GoodsInfo } from 'network/detail.js'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {}
    }
  },
  methods: {
    async _getDetail() {
      const response = await getDetail(this.iid)
      const data = response.result
      // 轮播图数据
      this.topImages = data.itemInfo.topImages
      console.log(response)
      // 商品基本信息数据
      this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
    }
  },
  created() {
    // 保存跳转到详情页携带的数据iid
    this.iid = this.$route.params.iid
    
    // 请求对应iid商品的相关所有数据
    this._getDetail()
  },
}
</script>

<style>

</style>