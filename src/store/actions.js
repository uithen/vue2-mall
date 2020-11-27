export default {
  // 加入购物车
  addCartBy({state, commit}, cartItem) {
    // 判断购物车中是否存在相同商品
    let oldCartItem = state.moduleCart.cartList.find(item => item.iid === cartItem.iid)
    console.log(oldCartItem)
    // 存在相同商品则其数量+1,不存在则添加新商品
    if (oldCartItem) { 
      commit('cartItemCount', oldCartItem)
    } else {
      cartItem.count = 1
      commit('addCart', cartItem)
    }
  }
}