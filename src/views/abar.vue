<template>
    <div id="app">
        <barMenu></barMenu>
        <barHeader></barHeader>
        <barContent></barContent>
        <barFooter></barFooter>
    </div>
</template>

<script>
    import barMenu from "../components/barMenu";
    import barHeader from "../components/barHeader";
    import barContent from "../components/barContent";
    import barFooter from "../components/barFooter";
    export default {
        name: "abar",
        components: {
            barMenu: barMenu,
            barHeader: barHeader,
            barContent: barContent,
            barFooter: barFooter,
        }
    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-size: 12px;
}
</style>