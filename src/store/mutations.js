import {ADD_CART_COUNT, ADD_CART_PRODUCT} from "./mutation-type";


export default {
  [ADD_CART_COUNT](state, isProduct) {
    isProduct.count++
  },
  [ADD_CART_PRODUCT](state, payload) {
    state.productList.push(payload)
    console.log(state.productList);
  }
}
