<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <router-link to="/">Index</router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/player/10086">10086</router-link>
    <router-link to="/player/100">100</router-link>
    <button @click="clickit(2)">goto2</button>
<!--    :to效果与push无异，在等号后面引号传入与push相同参数即可-->
    <router-link :to='{ path: `/player/5/player1`}'>:to</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    clickit: function (val) {
      // this.$router.push({ path: `/player/${val}`})//可以进入下级目录
      // this.$router.push({ path: `/player/${val}/player1`})//可以进入下下级目录
      // this.$router.push( {name: 'player', params: {uid: val}})//可以进入下级目录,传值uid
      // this.$router.push( { path: '/player', query:{uid: val}})//get写法
      // console.log(this.$router.push);
      // this.$router.go(-1) //-1 后退 1 前进

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
