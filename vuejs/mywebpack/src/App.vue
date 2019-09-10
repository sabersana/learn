<template>
  <div id="app">
    <router-link to="/aboutme" class="btn btn-success">aboutme</router-link>
    <router-link to="/about" class="btn btn-info">about</router-link>
    <router-link to="/gogogo" class="btn btn-warning">gogogo</router-link>
    <router-link to="/user/1/cn" class="btn btn-danger">CN</router-link>
    <router-link to="/user/2/jp" class="btn btn-dark">JP</router-link>
    <router-view class="ml-5"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
