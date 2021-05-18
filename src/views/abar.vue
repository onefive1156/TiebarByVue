<template>
    <div id="app">
        <barMenu></barMenu>
        <barHeader><barHeadContent></barHeadContent></barHeader>
        <barContent></barContent>
        <barFooter></barFooter>
    </div>
</template>

<script>
    import barMenu from "../components/barMenu";
    import barHeader from "../components/barHeader";
    import barContent from "../components/barContent";
    import barFooter from "../components/barFooter";
    import barHeadContent from "../components/barHeadContent";
    export default {
        name: "abar",
        components: {
            barMenu: barMenu,
            barHeader: barHeader,
            barContent: barContent,
            barFooter: barFooter,
            barHeadContent: barHeadContent,
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