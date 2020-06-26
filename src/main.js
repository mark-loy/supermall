import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import lazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//安装自定义组件
Vue.use(toast)

//解决移动端点击300ms延迟
FastClick.attach(document.body)

//使用图片懒加载
Vue.use(lazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


