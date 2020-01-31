<template>
    <div>
        <h1>HOME</h1>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      username() {
        // Мы скоро разберём что такое `params`
        // return this.$route.params.username
      }
    },
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>

<style>

</style>
