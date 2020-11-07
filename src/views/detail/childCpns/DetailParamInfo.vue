<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <div class="info-key">{{ paramsInfo.key }}</div>
    <table v-for="(size,index) of paramsInfo.size" :key="index" class="info-size">
      <tr v-for="(tr,indey) of size" :key="indey">
        <td v-for="(td,indez) of tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) of paramsInfo.info" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.img.length !== 0">
      <img :src="pamrasInfo.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .param-info {
    font-size: 16px;
    border-bottom: 5px solid #f2f5f8;
  }
  .param-info table {
    border-collapse: collapse;
    width: 100%;
  }
  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
    padding: 11px;
  }
  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>