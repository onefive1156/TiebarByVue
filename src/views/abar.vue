<template>
    <div id="app">
        <barMenu></barMenu>
        <barHeader><barHeadContent></barHeadContent></barHeader>
        <barContent><userInfo></userInfo></barContent>
        <barFooter :is-bar="true"></barFooter>
        <webFooter></webFooter>
    </div>
</template>

<script>
    import barMenu from "../components/barMenu";
    import barHeader from "../components/barHeader";
    import barContent from "../components/barContent";
    import barFooter from "../components/barFooter";
    import barHeadContent from "../components/barHeadContent";
    import userInfo from "../components/userInfo";
    import webFooter from "../components/webFooter";
    export default {
        name: "abar",
        components: {
            barMenu: barMenu,
            barHeader: barHeader,
            barContent: barContent,
            barFooter: barFooter,
            barHeadContent: barHeadContent,
            userInfo: userInfo,
            webFooter: webFooter,
        },
    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-size: 12px;
}
#webFooter{
    top: 115px;
}
</style>