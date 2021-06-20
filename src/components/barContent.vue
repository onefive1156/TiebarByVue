<template>
    <div class="content">
        <div class="show-tie">
            <ul class="tie-list" v-if="this.$store.state.isTie && showCard" @click="toTie($event)">
                <li class="atie"  v-for="(tieInfo, index) in tieInfos" :key="tieInfo.id" :id=tieInfo.id>
                    <div class="atie-left"><img src="./../assets/reply_nums.png" alt="" class="reply-img"><span class="atie-reply-num">20</span></div>
                    <div class="atie-content">
                        <span class="atie-title">{{tieInfo.title}}</span>
                        <span class="atie-substance">{{tieInfo.respTextWord}}</span>
                        <img :src = tieInfo.respImagePath alt="" style="display: block;width: 200px">
                    </div>
                    <div class="atie-right">
                        <img src="./../assets/author.png" alt="" class="author-img">
                        <span class="atie-author">{{tieInfo.author.userName | formatAuthor}}</span>
                        <span class="release-time" style="font-size: 5px">{{tieInfo.createTime}}</span>
                        <div class="other">
                            <div class="likes" @click.stop="addLike($event)"><img src="./../assets/likes.png" alt=""><p class="other-nums">{{tieInfo.likes}}</p></div>
                            <div class="coin-operated" @click.stop="addCoin($event)"><img src="./../assets/coins.png" alt=""><p class="other-nums">{{tieInfo.coins}}</p></div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="tie-list" v-if="!this.$store.state.isTie" @click="toVideo($event)">
                <li class="atie"  v-for="(videoInfo, index) in videoInfos" :key="index">
                    <div class="atie-left"><img src="./../assets/reply_nums.png" alt="" class="reply-img"><span class="atie-reply-num">20</span></div>
                    <div class="atie-content">
                        <span class="atie-title">{{videoInfo.title}}</span>
                        <span class="atie-substance">{{videoInfo.substance}}</span>
                        <img src="./../assets/a_comment_img.jpg" alt="" style="display: block;width: 200px">
                    </div>
                    <div class="atie-right">
                        <img src="./../assets/author.png" alt="" class="author-img">
                        <span class="atie-author">{{videoInfo.author | formatAuthor}}</span>
                        <span class="release-time">{{videoInfo.date}}</span>
                        <div class="other">
                            <div class="likes"><img src="./../assets/likes.png" alt=""><p class="other-nums">10</p></div>
                            <div class="coin-operated"><img src="./../assets/coins.png" alt=""><p class="other-nums">10</p></div>
                        </div>
                    </div>
                </li>
            </ul>
            <pageList :page="page"></pageList>
        </div>
        <slot #deflut="{userInfo}"></slot>
    </div>
</template>

<script>
    import pageList from "./pageList";
    import store from './../store/index';
    import axios from 'axios';
    import qs from 'qs';
    import Vue from "vue";
    import VueCookies from "vue-cookies";
    export default {
        name: "barContent",
        data:function () {
            return {
                showCard: false,
                page: 0,
                pages: [],
                tieInfos:[
                ],
                videoInfos:[{
                    title: "视频一",
                    author: "作者一aaaaa",
                    date: "2021-6-10",
                    substance: "视频一的内容"
                },{
                    title: "视频二",
                    author: "作者二",
                    date: "2021-6-10",
                    substance: "视频二的内容"
                },{
                    title: "视频三",
                    author: "作者三",
                    date: "2021-6-10",
                    substance: "视频三的内容"
                },{
                    title: "视频四",
                    author: "作者四",
                    date: "2021-6-10",
                    substance: "视频四的内容"
                }],
            }
        },
        methods:{
            toTie(el){
                this.$store.state.isTie = false;
                window.location.href = './atie.html'
            },
            toVideo(el){
                this.$store.state.isTie = false;
                console.log(el.target);
                window.location.href = './aVideo.html'
            },
            addLike(el){
                let aID;
                let ID = el.path[4].id;
                console.log(el.path[4]);
                for(let i=0;i<this.tieInfos.length;i++){
                    if(this.tieInfos[i].id === ID){
                        aID = this.tieInfos[i].authorID;
                        break;
                    }
                }
                el.path[0].innerText = Number(el.path[0].textContent) + 1;
                axios.post('/RNG/addLike',qs.stringify({
                    barID: ID,
                })).then((msg)=> {
                    console.log(msg);
                }).catch((error)=> {
                    console.log(error);
                })
            },
            addCoin(el){
                let aID;
                let ID = el.path[4].id;
                for(let i=0;i<this.tieInfos.length;i++){
                    if(this.tieInfos[i].id === ID){
                        aID = this.tieInfos[i].authorID;
                        break;
                    }
                }
                // console.log(el.path);
                el.path[0].innerText = Number(el.path[0].textContent) + 1;
                axios.post('/RNG/addCoin',qs.stringify({
                    barID: ID,
                    authorID: aID,
                })).then((msg)=> {
                    console.log(msg);
                }).catch((error)=> {
                    console.log(error);
                })
            }
        },
        components: {
            pageList: pageList,
        },
        filters: {
            "formatAuthor": function (author) {
                if(author.length > 7){
                    return author.slice(0,7) + '..';
                }else {
                    return author;
                }
            }
        },
        store: store,
        watch: {
            '$store.state.nowPage'(){
                this.tieInfos = this.pages[store.state.nowPage - 1];
                console.log(this.tieInfos);
            }
        },
        beforeCreate() {
            axios.post('/RNG/barIndex',qs.stringify({
                pBarName: '贴吧吧',
            })).then((msg)=> {
                this.tieInfos = msg.data.barList;
                // console.log(msg.data);
                let j = 0, p = [];
                this.page = Math.floor(this.tieInfos.length / 5);
                if(this.tieInfos.length % 5 !== 0)this.page++;
                for(let i=0;i<this.tieInfos.length;i++){
                    this.tieInfos[i].respImagePath = this.tieInfos[i].respondList[0].respImagePath;
                    this.tieInfos[i].respTextWord = this.tieInfos[i].respondList[0].respTextWord;
                    p.push(this.tieInfos[i]);
                    j++;
                    if(j === 5){
                        this.pages.push(p);
                        p = [];
                        j = 0;
                    }
                }
                if(j !== 0){
                    this.pages.push(p);
                }
                this.tieInfos = this.pages[this.$store.state.nowPage - 1];
                this.showCard = true;
                store.commit('getBarId', msg.data.id);
                store.commit('setPage', this.page);
                console.log(this.page);
                // console.log(msg.data);
            }).catch((error)=> {
                console.log(error);
            })
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

.tie-list{
    list-style: none;
    display: inline-block;
    /*margin-bottom: 72px;*/
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
    width: 580px;
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
    width: 80px;
    /*height: 37px;*/
    display: inline-block;
}
.atie-author{
    display: inline-block;
    width: 70%;
    line-height: 12px;
    float: right;
}
.release-time{
    display: inline-block;
    width: 100%;
    height: 20%;
    text-align: right;
}
.author-img{
    width: 30%;
    display: inline-block;
}
.show-bottom{
    transform: translateY(0%);
}
.likes{
    /*width: 50%;*/
    /*display: inline-block;*/
    text-align: right;
}
.coin-operated{
    /*width: 50%;*/
    /*display: inline-block;*/
    text-align: right;
}
.likes>img{
    width: 18px;
}
.coin-operated>img{
    width: 18px;
}
.other-nums{
    display: inline-block;
    width: 12px;
    vertical-align: top;
}
</style>