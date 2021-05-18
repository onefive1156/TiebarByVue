<template>
    <div class="content">
        <div class="show-tie">
            <ul class="tie-list">
                <li class="atie"  v-for="(tieInfo, index) in tieInfos">
                    <div class="atie-left"><img src="./../assets/reply_nums.png" alt="" class="reply-img"><span class="atie-reply-num">20</span></div>
                    <div class="atie-content">
                        <span class="atie-title">{{tieInfo.title}}</span>
                        <span class="atie-substance">{{tieInfo.substance}}</span>
                        <img src="./../assets/test.jpg" alt="" style="display: block;width: 200px">
                    </div>
                    <div class="atie-right">
                        <img src="./../assets/author.png" alt="" class="author-img">
                        <span class="atie-author">{{tieInfo.author | formatAuthor}}</span>
                        <span class="release-time">{{tieInfo.date}}</span>
                    </div>
                </li>
            </ul>
            <div class="show-bottom">
                <div class="pageList">
                    <!--                <a href="javascript:" class="pageItem">1</a>-->
                    <a href="" class="pageItem" v-show="nowPage != 1" @click="prePage">上一页</a>
                    <a href="javascript:" class="pageItem" v-for="(index) in page" :class="{'currentPageItem': index === nowPage}" @click="toPage($event)" :key="index">{{index}}</a>
                    <a href="" class="pageItem" @click="lastPage">末页</a>
                    <a href="" class="pageItem" @click="nextPage">下一页</a>
                </div>
            </div>
        </div>
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "barContent",
        data:function () {
            return {
                tieInfos:[{
                    title: "贴一",
                    author: "作者一aaaaa",
                    date: "2021-5-17",
                    substance: "贴一的内容"
                },{
                    title: "贴二",
                    author: "作者二",
                    date: "2021-5-17",
                    substance: "贴二的内容"
                },{
                    title: "贴三",
                    author: "作者三",
                    date: "2021-5-17",
                    substance: "贴三的内容"
                },{
                    title: "贴四",
                    author: "作者四",
                    date: "2021-5-17",
                    substance: "贴四的内容"
                }],
                nowPage: 2,
                page: 4,
            }
        },
        methods:{
            prePage(){
                this.nowPage--;
            },
            nextPage(){
                this.nowPage++;
            },
            lastPage(){
                this.nowPage = this.page;
            },
            toPage(index){
                this.nowPage = parseInt(index.path[0].innerText);
            }
        },
        filters: {
            "formatAuthor": function (author) {
                if(author.length > 3){
                    return author.slice(0,3) + '..';
                }else {
                    return author;
                }
            }

        }
    }
</script>

<style scoped>
.content{
    font-size: 12px;
    width: 982px;
    /*display: inline-block;*/
    position: relative;
    left: 50%;
    top: -110px;
    transform: translateX(-50%);
    display: flex;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
}
.show-tie{
    width: 740px;
    height: 100%;
    /*background-color: red;*/
    /*float: left;*/
}
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
.tie-list{
    list-style: none;
    display: inline-block;
}
.tie-list>.atie{
    box-sizing: border-box;
    width: 740px;
    /*height: 58px;*/
    /*background-color: yellowgreen;*/
    padding: 10px 20px;
    position: relative;
    border-bottom: 1px silver dotted;
    display: inline-block;
}
.reply-img{
    position: absolute;
    left: 21px;
    top: 9px;
}
.atie-reply-num{
    position: absolute;
    left: 30px;
    top: 12px;
    font-size: 12px;
    color: #8a8a8a;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.atie-left{
    width: 39px;
    height: 37px;
    display: inline-block;
    float: left;
}
.atie-content{
    width: 600px;
    height: 100%;
    box-sizing: content-box;
    /*background-color: #3a8bfc;*/
    display: inline-block;
    float: left;
}
.atie-title{
    display: block;
    width: 100%;
    height: 50%;
    font-size: 14px;
}
.atie-substance{
    display: block;
    width: 100%;
    height: 50%;
    font-size: 12px;
}
.atie-right{
    width: 60px;
    height: 37px;
    display: inline-block;
}
.atie-author{
    display: inline-block;
    width: 70%;
    height: 20%;
    float: right;
}
.release-time{
    display: inline-block;
    width: 100%;
    height: 20%;
}
.author-img{
    width: 30%;
    display: inline-block;
}
.show-bottom{
    width: 740px;
    height: 57px;
    padding-top: 15px;
    /*background-color: blue;*/
}
.pageList{
    width: 720px;
    height: 28px;
    /*background-color: green;*/
    margin: 0 0 15px 20px;
}
/*.pageList>a{*/
/*    display: inline-block;*/
/*    line-height: 28px;*/
/*    width: 28px;*/
/*    height: 28px;*/
/*    text-align: center;*/
/*    background-color: skyblue;*/
/*}*/
.pageItem{
    display: inline-block;
    line-height: normal;
    text-decoration: none;
    padding: 5px 9px;
    font-size: 12px;
    background: #fff;
    color: #666;
    border: 1px solid #e6e6e6;
    margin-right: 2px;
}
.pageItem:hover{
    color: #3a8bfc;
    border: 1px solid #3a8bfc;
}
.currentPageItem{
    border: 1px solid transparent;
    color: #3a8bfc;
}
.currentPageItem:hover{
    border: 1px solid transparent;
    color: #3a8bfc;
}
</style>