export default {
  goodsCount(state, cartItem) {
    cartItem.count++
    console.log('购物车该商品数量加1')
  },
  addNewGoods({moduleCart}, cartItem) {
    cartItem.count = 1
    cartItem.checked = true
    moduleCart.cartList.push(cartItem)
    console.log('购物车成功添加新商品')
  }
}