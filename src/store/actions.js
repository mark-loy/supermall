import {ADD_CART_COUNT, ADD_CART_PRODUCT, UPDATE_IS_CHECKED_FALSE, UPDATE_IS_CHECKED_TRUE} from "./mutation-type";

export default  {

  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      const isProduct = context.state.productList.find(item => item.iid === payload.iid)
      // console.log(isProduct);
      if (isProduct) {
        context.commit(ADD_CART_COUNT, isProduct)
        resolve('商品数量加一')
      } else {
        payload.count = 1
        payload.isChecked = true
        context.commit(ADD_CART_PRODUCT, payload)
        resolve('添加了一个商品')
      }
    })
  },
  updateIsChecked(context, payload) {
    if (payload) {
      context.commit(UPDATE_IS_CHECKED_FALSE)
    }else {
      context.commit(UPDATE_IS_CHECKED_TRUE)
    }
  }
}
