<template>
    <div id= "webFooter">
        <div class="aline"></div>
        <div class="webInfo">
            <p>Design &nbsp; by &nbsp;ypf&zhq</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "webFooter"
    }
</script>

<style scoped>
    #webFooter{
        width: 100%;
        height: 50px;
        /*background-color: red;*/
        position: relative;
        top: 115px;
    }
    .aline{
        width: 100%;
        height: 1px;
        border-bottom: 1px silver solid;
    }
    .webInfo{
        position: relative;
        left: 50%;
        top: 20%;
        transform: translate(50% 50%);
        width: 200px;
    }
    .webInfo>p{
        color: #b6b4b4;
    }
</style>