export default {
  // 加入购物车
  addCartBy({state, commit}, cartItem) {
    return new Promise((resolve, reject) => {
      // 判断购物车中是否存在相同商品
      let crtCart = state.moduleCart.cartList.find(item => item.iid === cartItem.iid)
      console.log(crtCart)
      // 存在相同商品则其数量+1,不存在则添加新商品
      if (crtCart) { 
        commit('goodsCount', crtCart)
        resolve('购物车当前商品数量+1')
      } else {
        commit('addNewGoods', cartItem)
        resolve('添加了新商品')
      }
    })
  }
}