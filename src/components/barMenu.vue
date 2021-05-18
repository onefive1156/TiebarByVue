<template>
<div id="barMenu" @click="toTop">
    <div class="to-top">
        <img src="./../assets/to_top .png" alt=""/>
    </div>
    <div class="to-bottom">
        <img src="./../assets/to_bottom.png" alt=""/>
    </div>
</div>
</template>

<script>
    export default {
        name: "barMenu",
        methods: {
            toTop(){

            }
        }
    }
</script>

<style scoped>
#barMenu{
    width: 50px;
    height: 200px;
    position: fixed;
    right: 14%;
    top: 50%;
    text-align: center;
    z-index: 999;
}
.to-top{
    width: 30px;
    height: 30px;
    background-color: rgb(255, 255, 255);
    padding: 10px;
    cursor: pointer;
    background-color: rgba(0,0,0,0.2);
}
.to-top>img{
    width: 30px;
}
.to-bottom{
    margin-top: 10px;
    width: 30px;
    height: 30px;
    background-color: rgba(0,0,0,0.2);
    padding: 10px;
    cursor: pointer;
}
.to-bottom>img{
    width: 30px;
}
</style>