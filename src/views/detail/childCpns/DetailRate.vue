<template>
  <div class="detail-rate" v-if="Object.keys(detailRate).length !== 0">
    <div class="rate-title clear-fix">
      <span class="title-text">用户评价</span>
      <span class="title-more">更多</span>
    </div>
    <div class="rate-show">
      <div class="show-user">
        <img :src="detailRate.user.avatar">
        <span>{{ detailRate.user.uname }}</span>
      </div>
      <div class="show-content">{{ detailRate.content }}</div>
      <div class="show-params">
        <span>{{ detailRate.created | showDate }}</span>
        <span>{{ detailRate.style }}</span>
      </div>
      <div class="show-img">
        <img :src="img" v-for="(img,i) of detailRate.images" :key="i">
      </div>
      <div class="show-explain">{{ detailRate.explain}}</div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils.js'
export default {
  props: {
    detailRate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(time) {
      const date = new Date(time * 1000)
      return formatDate(date, 'yyyy-MM-dd hh:ss')
    }
  }
}
</script>

<style>
  .detail-rate {
    padding: 6px 11px;
    border-bottom: 6px solid #f2f5f8;
    margin-bottom: 11px;
  }
  .rate-title {
    padding: 20px 0;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 2px solid rgba(0,0,0,.1);
  }
  .title-text {
    float: left;
  }
  .title-more {
    float: right;
  }
  .rate-show {
    padding: 6px;
  }
  .show-user {
    line-height: 62px;
    height: 62px;
    vertical-align: middle;
    color: #222;
  }
  .show-user img{
    margin-bottom: -6px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
  .show-user span {
    margin-left: 11px;
  }
  .show-content {
    color: #666;
    margin-bottom: 11px;
    font-size: 14px;
  }
  .show-params {
    color: #ccc;
    font-size: 12px;
    margin-bottom: 6px;
  }
  .show-params span+span {
    padding-left:11px;
    letter-spacing: 1px;
  }
  .show-img img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  .show-explain {
    font-size: 12px;
    color: #999;
    border-top: 1px dotted #d9d9d9;
    padding-top: 11px;
  }
</style>