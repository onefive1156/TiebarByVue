<template>
    <div class="content">
        <div class="show-tie">
            <ul class="tie-list">
                <li class="atie"  v-for="(tieInfo, index) in tieInfos" @click="toTie(index)" :key="index">
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
            <pageList></pageList>
        </div>
        <slot #deflut="{userInfo}"></slot>
    </div>
</template>

<script>
    import pageList from "./pageList";
    import store from './../store/index'
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
                // nowPage: 2,
                // page: 4,
            }
        },
        methods:{
            // prePage(){
            //     this.nowPage--;
            // },
            // nextPage(){
            //     this.nowPage++;
            // },
            // lastPage(){
            //     this.nowPage = this.page;
            // },
            // toPage(index){
            //     this.nowPage = parseInt(index.path[0].innerText);
            // }
            toTie(index){
                console.log(this.tieInfos[index]);
                this.$store.state.isBar = false;
                console.log(this.$store.state.isBar);
                window.location.href = './atie.html'
            }
        },
        components: {
            pageList: pageList,
        },
        filters: {
            "formatAuthor": function (author) {
                if(author.length > 3){
                    return author.slice(0,3) + '..';
                }else {
                    return author;
                }
            }
        },
        store: store,
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
</style>