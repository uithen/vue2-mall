<template>
  <Swiper class="detail-swiper">
    <swiper-item
      v-for="(item,index) of topImages"
      :key="index"
    >
      <img :src="item" alt="">
    </swiper-item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>