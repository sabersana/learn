import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/tal/Header'
import Main from '@/components/tal/Main'
import Footer from '@/components/tal/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        Header: Header,
        Main: Main,
        Footer: Footer
      }
    }

  ]
})
