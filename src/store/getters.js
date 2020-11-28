export default {
  cartList({moduleCart}, getters) {
    return moduleCart.cartList
  },
  cartListLen({moduleCart}, getters) {
    return getters.cartList.length
  },
}
