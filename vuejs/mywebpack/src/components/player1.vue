<template>
    <h3>this is {{ $route.params.uid }} => play1</h3>
</template>

<script>
    export default {
        name: "play1",
      data: function () {
        return {
          num: 0,
        }
      },
      // methodsmounted() {
      //   this.num = this.$route.params.uid
      //   console.log(this.num)
      // },
      // beforeRouteUpdate(to, from, next) {
      //   this.num = to.params.uid
      //   // console.log(from)
      //   next()
      // }
    }
</script>

<style scoped>

</style>
