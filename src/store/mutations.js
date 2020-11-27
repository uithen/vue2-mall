export default {
  // 点击加入购物车时,存在相同商品则其数量+1
  cartItemCount(state, cartItem) {
    cartItem.count++
  },
  // 不存在则添加新商品
  addCart({moduleCart}, cartItem) {
    moduleCart.cartList.push(cartItem)
  }
}