<template #userInfo>
    <div class="bar-user-info">
        <div class="user-info">
            <div class="user-head-img"><img src="./../assets/user_head.png" alt=""></div>
            <div class="user-right">
                <img src="./../assets/integral.png" alt="">
                <span class="user-coin">10</span>
            </div>
        </div>
        <div class="bar-master">
            <span>本吧信息</span>
            <div class="bar-master-head">
                <img src="./../assets/user_head.png" alt="">
                <span>吧主</span>
            </div>
            <span style="font-size: 12px">杨鹏飞</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userInfo"
    }
</script>

<style scoped>
.bar-user-info{
    width: 240px;
    height: inherit;
    border-left:  1px solid #e5e5e5;
}

.user-info{
    width: 80%;
    height: 74px;
    margin: 50px auto;
    /*background-color: green;*/
}
.user-head-img{
    width: 47px;
    float: left;
}
.user-head-img>img{
    height: 40px;
}
.user-right{
    float: left;
    width: 100px;
    height: 30px;
}
.user-right>img{
    width: 30px;
}
.user-coin{
    line-height: 30px;
    vertical-align: top;
    font-size: 15px;
}
.bar-master{
    border-top: silver 1px solid;
    height: 100px;
    width: 191px;
    padding: 15px 24px 15px 24px;
    /*background-color: green;*/
}
.bar-master>span{
    font-size: 15px;
    display: inline-block;
}
.bar-master-head{
    position: relative;
    width: 40px;
    height: 40px;
}
.bar-master-head>span{
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    background-color: rgba(0,0,0,0.3);
}
</style>