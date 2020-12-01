export default {
  goodsCount(state, cartItem) {
    cartItem.count++
  },
  addNewGoods({moduleCart}, cartItem) {
    cartItem.count = 1
    cartItem.checked = true
    moduleCart.cartList.push(cartItem)
  }
}