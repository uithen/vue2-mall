<template>
  <div class="goods-detail" v-if="Object.keys(detailInfo).length!==0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="promo-text"><span>{{ detailInfo.desc }}</span></div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img v-for="(item,i) of detailInfo.detailImage[0].list" :key="i" :src="item" @load="imgLoad">
    </div>
  </div>
</template>

<script>
import { debounce } from '@/common/utils.js'
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style>
  .goods-detail {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }  
  .info-desc .start,
  .info-desc .end {
    width: 99px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }  
  .info-desc .start {
    float: left;
  }  
  .info-desc .end {
    float: right;
  }
  .info-desc .start::before,
  .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after {
    right: 0;
  }
  .info-desc .promo-text {
    padding: 15px 0;
    font-size: 14px;
  }
.info-list img {
    width: 100%;
  }
</style>