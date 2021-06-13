<template>
    <div id="app">
        <barMenu></barMenu>
        <barHeader></barHeader>
        <tieContent></tieContent>
        <barFooter :is-bar="false"></barFooter>
        <webFooter></webFooter>
    </div>
</template>

<script>
    import barHeader from "../components/barHeader";
    import tieContent from "../components/tieContent";
    import barFooter from "../components/barFooter";
    import barMenu from "../components/barMenu";
    import webFooter from "../components/webFooter";

    export default {
        name: "App",
        components:{
            barHeader: barHeader,
            tieContent: tieContent,
            barFooter: barFooter,
            barMenu: barMenu,
            webFooter: webFooter,
        }
    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
html,body{
    font-size: 12px;
}
#webFooter{
    top: 115px;
}
</style>