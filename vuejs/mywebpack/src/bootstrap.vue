<template>
  <div id="app">
    <header>
      <router-view name="Header"></router-view>
    </header>
    <main>
      <router-view name="Main"></router-view>
    </main>
    <footer>
      <router-view name="Footer"></router-view>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
