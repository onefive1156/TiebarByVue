<template>
    <div id="app">
        <register></register>
    </div>
</template>

<script>
    import register from "./../components/register";
    export default {
        name: "userRegister",
        components:{
            register: register,
        }
    }
</script>

<style scoped>
   #app{
       position: absolute;
       width: 100%;
       height: 100%;
       top: 0;
       left: 0;
       background: url("./../assets/reg_bg_min.jpg");
   }
</style>