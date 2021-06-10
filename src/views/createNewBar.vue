<template>
    <div id="app">
        <barMenu></barMenu>
        <barHeader></barHeader>
        <create></create>
        <webFooter></webFooter>
    </div>
</template>

<script>
    import barMenu from "../components/barMenu";
    import barHeader from "../components/barHeader";
    import webFooter from "../components/webFooter";
    import create from "../components/create";
    export default {
        name: "createNewBar",
        components:{
            barHeader: barHeader,
            barMenu: barMenu,
            webFooter: webFooter,
            create: create,
        }
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    font-size: 12px;
}
html,body{
     margin: 0;
     padding: 0;
 }
#webFooter{
    width: 100%;
    height: 50px;
    /*background-color: red;*/
    position: relative;
    top: 0;
}
</style>