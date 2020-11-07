import { request } from './request.js'
// 详情页数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}


/*当请求过来的数据结构杂乱无章时，可将用到的数据整合到一个对象里
 * @GoodsInfo 存放获取到的商品基本信息
 * @ShopInfo 存放获取到的商家店铺信息
 * @ParamsInfo 存放获取到的商品参数信息
 */
export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discountBgColor = itemInfo.discountBgColor
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopName = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.goodsSells = shopInfo.cSells 
    this.goodsNum = shopInfo.cGoods 
    this.shopScore = shopInfo.score
  }
}

export class ParamsInfo {
  constructor(info, rule) {
    // 有些商品参数含图，有些不含
    this.img = info.images ? info.images[0] : ''
    this.key = info.key
    this.info = info.set 
    this.size = rule.tables
  }
}

