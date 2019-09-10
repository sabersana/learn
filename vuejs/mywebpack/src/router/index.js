import Vue from 'vue'
import Router from 'vue-router'
import player from '@/components/player'
import playerNo1 from '@/components/player1'
import playerNo2 from '@/components/player2'
import about from '@/components/about'
import user from '@/components/user'


Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/about',
      name:'about',
      component: about,
      alias: '/aboutme'//别名
    },
    {
      path: '/gogogo',
      // redirect: '/player/10086/player1'//重定向到这个地址
      redirect: {name: 'player'}//重定向到这个组件
    },
    {
      path: '/user/:id/:con',
      name: 'user',
      component: user,
      props: true
    }
  ]
})
