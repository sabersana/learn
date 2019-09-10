<template>
  <div>
  <h1>this is page {{ num }}</h1>
    <h2>
      <router-link :to="player1">player1</router-link>
      <router-link :to="player2">player2</router-link>
    </h2>
    <hr>
    <router-view/>
  </div>
  <!--  <h1>123</h1>-->
</template>
<script>
  // 此为动态路由
  export default {
    name: "player",
    data:function(){
      return {
        num: 0,
        player1: '',
        player2: '',
      }
    },
      // {
      //   num: 1,
      // },
    mounted() {
      this.num = this.$route.params.uid
      this.player1 = '/player/'+this.num + '/player1'
      this.player2 = '/player/'+this.num + '/player2'
      console.log(this.num)
    },
    beforeRouteUpdate(to, from, next) {
      this.num = to.params.uid
      this.player1 = '/player/'+this.num + '/player1'
      this.player2 = '/player/'+this.num + '/player2'
      // console.log(from)
      next()
    }
  }
</script>
