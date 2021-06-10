<template>
    <div id="app">
        <barMenu></barMenu>
        <barHeader></barHeader>
<!--        <barContent><userInfo></userInfo></barContent>-->
<!--        <barFooter :is-bar="true"></barFooter>-->
        <coinRecharge></coinRecharge>
        <webFooter></webFooter>
    </div>
</template>

<script>
    import barMenu from "../components/barMenu";
    import barHeader from "../components/barHeader";
    import webFooter from "../components/webFooter";
    import coinRecharge from "../components/coinRecharge";
    export default {
        name: "recharge",
        components: {
            barMenu: barMenu,
            barHeader: barHeader,
            // barHeadContent: barHeadContent,
            coinRecharge: coinRecharge,
            webFooter: webFooter,
        },
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    font-size: 12px;
}
#webFooter{
    width: 100%;
    height: 50px;
    /*background-color: red;*/
    position: relative;
    top: 0;
}
</style>