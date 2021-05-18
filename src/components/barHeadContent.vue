<template #headerContent>
    <div class="header-content">
        <img class="header-content-background" src="./../assets/header_content_background.png" alt="">
        <div class="bar-info">
            <div class="info-content">
                <a href=""><div class="bar-name">贴吧吧</div></a>
                <a href=""><div class="bar-introduce">吧友交流的家园</div></a>
            </div>
            <a href=""> <div class="bar-img"><img src="./../assets/timg.jpg" alt=""></div></a>
        </div>
        <div class="bar-nav">
            <ul class="bar-check">
                <li class="bar-tie">看帖</li>
                <li class="bar-video">视频</li>
                <li class="bar-in-search"><input type="text"><div class="bar-in-search-img">
                    <img src="./../assets/bar-in-search.png" alt="">
                </div></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "barHeadContent"
    }
</script>

<style scoped>
.header-content{
    width: 982px;
    height: 320px;
    /*background-color: red;*/
    margin: 0 auto;
}
.header-content>.header-content-background{
    height: 180px;
    width: 982px;
}
.header-content>.bar-info{
    width: 982px;
    height: 90px;
    background-color: #f2f4f7;
    border-top: 1px #DBDCE0 solid;
    margin-top: -8px;
    box-sizing: border-box;

}
.info-content{
    padding-left: 200px;
    padding-top: 15px;
    width: 368px;
    height: 75px;
}
.bar-name{
    width: 68px;
    font-size: 22px;
    color: #333;
    height: 40px;
    line-height: 40px;
}
.bar-introduce{
    width: 200px;
    color: #4c4c4c;
    font-size: 14px;
}
.bar-img{
    width: 150px;
    height: 150px;
    background-color: white;
    padding: 5px 5px 5px 5px;
    position: relative;
    top: -161px;
    left: 20px;
}
.bar-img>img{
    width: 150px;
    height: 150px;
}
.bar-nav{
    width: 982px;
    height: 50px;
    background-color: gold;
    border-top: 1px #DBDCE0 solid;
}
.bar-check{
    list-style: none;
    width: 100%;
    height: 50px;
    background-color: #eeeff3;
}
.bar-check>.bar-tie,.bar-video{
    height: 100%;
    width: 76px;
    float: left;
    font-family: "microsoft yahei",simhei,sans-serif;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}
.bar-check>.bar-tie:hover{
    background-color: silver;
}
.bar-check>.bar-video:hover{
    background-color: silver;
}
.bar-in-search{
    width: 200px;
    float: right;
    height: 100%;
    /*background-color: red;*/
}
.bar-in-search>input{
    width: 146px;
    height: 23px;
    overflow: hidden;
    padding: 0 10px;
    color: #333;
    float: left;
    border: solid 1px #d9dbde;
    margin-top: 13px;
}
.bar-in-search>.bar-in-search-img{
    width: 23px;
    height: 23px;
    float: right;
    margin-top: 13px;
    margin-right: 5px;
    /*background-color: rgba(153, 153, 153, 0.6);*/
    border: rgba(153, 153, 153, 0.6) 1px solid;
    border-radius: 20%;
    box-sizing: border-box;
    cursor: pointer;
}
.bar-in-search-img>img{
    width: 23px;
    height: 23px;
}
</style>