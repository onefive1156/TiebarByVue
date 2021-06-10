<template>
<div id="barMenu">
    <div class="to-top" @click="toTop">
        <img src="./../assets/to_top .png" alt=""/>
    </div>
    <div class="to-bottom" @click="toBottom">
        <img src="./../assets/to_bottom.png" alt=""/>
    </div>
</div>
</template>

<script>
    export default {
        name: "barMenu",
        methods: {
            toTop(){
                // console.log("cc");
                let start = window.scrollY, end = 0, stop = null;
                stop = setInterval(function () {
                    start -= 40;
                    console.log(start);
                    if(start <= 0){
                        start = 0;
                        window.scroll(0, 0);
                        clearInterval(stop);
                    }
                    window.scroll(0, start);
                },2)
            },
            toBottom(){
                // console.log("zz");
                let start = window.scrollY, end = document.querySelector("body").offsetHeight, stop = null;
                // console.log(end);
                stop = setInterval(function () {
                    start += 40;
                    if(start >= end){
                        start = end;
                        window.scroll(0, end);
                        clearInterval(stop);
                    }
                    // console.log('start');
                    // console.log(start,end);
                    window.scroll(0, start);
                },2)
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