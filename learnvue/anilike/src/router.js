import Vue from 'vue'
import Router from 'vue-router'
import List from './views/list/List'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    }
  ]
})
