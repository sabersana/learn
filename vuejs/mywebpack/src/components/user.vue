<template>
    <div>
      <p>No.{{ id }}， 你是不是{{ con }}人</p>
      <p>No.{{ $route.params.id }}， 你是不是{{ $route.params.con }}人</p>
    </div>
</template>

<script>
    export default {
        name: "user",
        props: ['id', 'con']
    }
</script>

<style scoped>

</style>
