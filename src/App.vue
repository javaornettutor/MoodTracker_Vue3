<template>

   <nav>
      <router-link to="/CreateMood">CreateMood</router-link>  |
      <router-link to="/ConnectDataToMVC">ConnectDataToMVC</router-link>
    </nav>
    <router-view></router-view>

  <img alt="Vue logo" src="./assets/logo.png">
  


</template>

<script>

export default {
  name: 'App',
  components: {
    

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
