<template>
    <div id="show-comment">
        <pageList></pageList>
    </div>
</template>

<script>
    import pageList from "./pageList";
    export default {
        name: "tieComment",
        components:{
            pageList: pageList,
        }
    }
</script>

<style scoped>
#show-comment{
    width: 740px;
    height: 1000px;
    background-color: skyblue;
    display: inline-block;
}
</style>