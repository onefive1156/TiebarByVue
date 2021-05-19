<template>
    <div id="app">
        <barHeader></barHeader>
        <tieContent></tieContent>
        <barFooter :is-bar="false"></barFooter>
    </div>
</template>

<script>
    import barHeader from "../components/barHeader";
    import tieContent from "../components/tieContent";
    import barFooter from "../components/barFooter";
    export default {
        name: "App",
        components:{
            barHeader: barHeader,
            tieContent: tieContent,
            barFooter: barFooter,
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
</style>