<template>
    <div id="app">
        <bar-header></bar-header>
        <videoContent></videoContent>
        <webFooter></webFooter>
    </div>
</template>

<script>
    import barHeader from "../components/barHeader";
    import webFooter from "../components/webFooter";
    import videoContent from "../components/videoContent";
    export default {
        name: "aVideo",
        components:{
            barHeader: barHeader,
            videoContent: videoContent,
            webFooter: webFooter,
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
.header-search-box{
    display: none;
}
#webFooter{
    top: 70px;
}
</style>