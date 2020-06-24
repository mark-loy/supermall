import {ADD_CART_COUNT, ADD_CART_PRODUCT} from "./mutation-type";

export default  {
  addCart(context, payload) {
    const isProduct = context.state.productList.find(item => item.iid === payload.iid)
    console.log(isProduct);
    if (isProduct) {
      context.commit(ADD_CART_COUNT, isProduct)
    } else {
      payload.count = 1
      context.commit(ADD_CART_PRODUCT, payload)
    }
  }
}
