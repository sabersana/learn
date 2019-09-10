import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

Vue.config.productionTip = false
Vue.use(vueLazyLoad, {
  loading: "loading-bars.svg"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
