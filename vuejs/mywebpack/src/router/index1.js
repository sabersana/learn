import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import news from '@/components/news'
import about from '@/components/about'
import player from '@/components/player'
import playerNo1 from '@/components/player1'
import playerNo2 from '@/components/player2'
// 须添加import，然后下方路由引入

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/player/:uid',
      name: 'player',
      component: player,
      children: [
        {
          path: 'player1',
          component: playerNo1
        },
        {
          path: 'player2',
          component: playerNo2
        }
      ]
    }

  ]
})
