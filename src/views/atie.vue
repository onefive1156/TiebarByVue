<template>
    <div id="app">
        <barHeader></barHeader>
    </div>
</template>

<script>
    import barHeader from "../components/barHeader";
    import abar from "./abar";
    export default {
        name: "App",
        components:{
            barHeader: barHeader,
            abar: abar,
        }
    }
</script>

<style scoped>

</style>