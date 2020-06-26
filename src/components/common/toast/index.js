import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {

  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2.创建组件对象
  const toast = new toastConstructor()

  //3.手动将组件对象挂载到一个元素上
  toast.$mount(document.createElement('div'))

  //4.将挂载的元素添加到dom中
  document.body.appendChild(toast.$el)

  //5.将toast组件放到Vue原型上
  Vue.prototype.$toast = toast
}

export default obj
