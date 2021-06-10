<template>
  <div id="app">
      <login></login>
  </div>
</template>
<script>
  import login from './../components/login.vue';
  export default {
    name: "App",
    components:{
        login: login,
    },
  }
</script>
<style lang="scss">
html,body{
    background: url("./../assets/loginBackground.jpg") no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
#app{
    width: 100%;
    height: 100%;
}
</style>
