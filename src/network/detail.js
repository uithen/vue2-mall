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

// 请求过来的数据结构杂乱无章，将用到的数据整合到一个对象里
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