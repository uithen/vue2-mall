import {request} from './request.js'

// home页: banner & recommends 数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
// home页: 商品列表数据(goodsItem)
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page 
    }
  })
}