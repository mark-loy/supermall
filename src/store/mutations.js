import {ADD_CART_COUNT, ADD_CART_PRODUCT, UPDATE_IS_CHECKED_FALSE, UPDATE_IS_CHECKED_TRUE} from "./mutation-type";


export default {
  [ADD_CART_COUNT](state, isProduct) {
    isProduct.count++
  },
  [ADD_CART_PRODUCT](state, payload) {
    state.productList.push(payload)
  },
  [UPDATE_IS_CHECKED_FALSE](state) {
    state.productList.forEach(item => {
      item.isChecked = false
    })
  },
  [UPDATE_IS_CHECKED_TRUE](state) {
    state.productList.forEach(item => {
      item.isChecked = true
    })
  }
}
