<template>
    <div class="content">
        <tieComment></tieComment>
        <userInfo></userInfo>
    </div>
</template>

<script>
    import userInfo from "./userInfo";
    import tieComment from "./tieComment";
    export default {
        name: "tieContent",
        components:{
            userInfo: userInfo,
            tieComment: tieComment,
        }
    }
</script>

<style scoped>
.content{
    font-size: 12px;
    width: 982px;
    position: relative;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    display: flex;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    margin-bottom: 117px;
}
</style>