<template>
  <div class="detail-shop">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt="">
      <span class="title">{{ shopInfo.shopName }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shopInfo.goodsSells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shopInfo.goodsNum }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) of shopInfo.shopScore" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{ item.score }}</td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value 
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style>
  .detail-shop {
    padding: 26px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .detail-shop .shop-top {
    display: flex;
    line-height: 45px;
    align-items: center;
  }
  .shop-top img {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1);
  }
  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }

  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .shop-middle-item {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }
  .sells-count, .goods-count {
    font-size: 18px;
  }
  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 14px;
  }
  .shop-middle-right {
    font-size: 13px;
    color: #333;
  }
  .shop-middle-right table {
    width: 120px;
    margin-left: 30px;
  }
  .shop-middle-right table td {
    padding: 5px 0;
  }
  .shop-middle-right .score {
    color: #f13e3a;
  }

  .shop-middle-right .score-better {  
    color: #5ea732;
  }
  .shop-middle-right .better span {
    background-color: #f13e3a;
    color: #fff;
    text-align: center;
    padding: 2px;
  }  
  .shop-middle-right .better-more span {
    background-color: #5ea732;
  } 

  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }     
  .enter-shop {
    display: inline-block;
    font-size: 16px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }  
</style>