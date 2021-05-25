<template>
    <div id="header">
        <div class="header-nav">
            <div class="aline"></div>
            <ul class="nav">
                <li class="nav-myself nav-elem" @mouseenter="showMore(0)" @mouseleave="hiddenMore(0)" @click="jumpLogin"><span>{{userName | formatUserName}}</span>
                    <div class="more-user more" v-show="moreShow[0].show && wasLogged">
                        <ul class="more-in">
                            <li class="more-user-in in"><span>我的贴吧</span></li>
                            <li class="more-user-in in"><span>我的商城</span></li>
                            <li class="more-user-in in"><span>我的收藏</span></li>
                            <li class="more-user-in in"><span>我的网盘</span></li>
                            <li class="more-user-in in"><span>我的游戏</span></li>
                            <li class="more-user-in in"><span>我的钱包</span></li>
                        </ul>
                        <div class="arrow arrow1"></div>
                    </div>
                <i></i></li>
                <li class="nav-message nav-elem" @mouseenter="showMore(1)" @mouseleave="hiddenMore(1)"><a href="javascript:"><span>消息</span>
                    <div class="more-message more" v-show="moreShow[1].show && wasLogged">
                        <ul class="more-in">
                            <li class="more-message-in in"><span>查看私信</span></li>
                            <li class="more-message-in in"><span>查看回复</span></li>
                            <li class="more-message-in in"><span>查看@提到我</span></li>
                            <li class="more-message-in in"><span>查看好友申请</span></li>
                            <li class="more-message-in in"><span>查看新粉丝</span></li>
                            <li class="more-message-in in"><span>我的收藏</span></li>
                            <li class="more-message-in in"><span>我的通知</span></li>
                        </ul><div class="arrow arrow2"></div></div>
                </a><i></i></li>
                <li class="nav-member nav-elem" @mouseenter="showMore(2)" @mouseleave="hiddenMore(2)"><b class="member-icon"><img src="./../assets/member.png" alt=""></b><a href="javascript:">
                    <div class="more-member more" v-show="moreShow[2].show && wasLogged">
                        <ul class="more-in">
                            <li class="more-member-in in"><img src="./../assets/integral.png" alt=""><span>硬币</span></li>
                            <li class="more-member-in in"><img src="./../assets/store.png" alt=""><span>会员商城</span></li>
                            <li class="more-member-in in"><img src="./../assets/member2.png" alt=""><span>会员官网</span></li>
                        </ul><div class="arrow arrow3"></div></div>
                    <span>会员</span></a><i></i></li>
                <li class="nav-more nav-elem" @mouseenter="showMore(3)" @mouseleave="hiddenMore(3)"><a href="javascript:">
                    <div class="more-more more" v-show="moreShow[3].show && wasLogged">
                        <ul class="more-in">
                            <li class="more-more-in in"><span>手机APP</span></li>
                            <li class="more-more-in in"><span>应用中心</span></li>
                            <li class="more-more-in in"><span>帐号设置</span></li>
                            <li class="more-more-in in"><span>贴吧设置</span></li>
                            <li class="more-more-in in"><span>服务中心</span></li>
                            <li class="more-more-in in"><span>问题反馈</span></li>
                            <li class="more-more-in in"><span>退出</span></li>
                        </ul><div class="arrow arrow4"></div></div>
                    <span>更多</span></a><i></i></li>
            </ul>
        </div>
        <div class="header-search-box" :class="{'fixed' : scroll}">
            <input type="text" class="search-box-input" @focus="focus($event)" @blur="blur($event)"/>
            <div class="suge-list" v-show="sugeListIsShow && wasLogged" :style="scroll ? {'top': '70px'}:{'top': '50px'}">
                <ul>
                    <li class="suge-list1"><span>最近常逛:</span></li>
                    <li class="suge-list2"><img src="./../assets/sample_search.jpg" alt=""><div class="suge-list-right">
                        <div class="suge-list-right">
                            <span class="right-top">这是一个吧</span>
                            <span class="right-bottom">吧的介绍啊这啊这啊这</span>
                        </div>
                    </div></li>
                    <li class="suge-list3"><img src="./../assets/sample_search.jpg" alt=""><div class="suge-list-right">
                        <span class="right-top">这是一个吧</span>
                        <span class="right-bottom">吧的介绍啊这啊这啊这</span>
                    </div></li>
                    <li class="suge-list4"><img src="./../assets/sample_search.jpg" alt=""><div class="suge-list-right">
                        <span class="right-top">这是一个吧</span>
                        <span class="right-bottom">吧的介绍啊这啊这啊这</span>
                    </div></li>
                    <li class="suge-list5"><img src="./../assets/sample_search.jpg" alt=""><div class="suge-list-right">
                        <span class="right-top">这是一个吧</span>
                        <span class="right-bottom">吧的介绍啊这啊这啊这</span>
                    </div></li>
                    <li class="suge-list6"><img src="./../assets/sample_search.jpg" alt=""><div class="suge-list-right">
                        <span class="right-top">这是一个吧</span>
                        <span class="right-bottom">吧的介绍啊这啊这啊这</span>
                    </div></li>
                </ul>
            </div>
            <div class="submit" :class="{'s-fixed' : scroll}">进入贴吧</div>
        </div>
        <slot  #default="{ headerContent }"></slot>
    </div>
</template>

<script>
    import store from './../store/index';
    import Vue from 'vue';
    import VueCookies from 'vue-cookies';
    import barHeadContent from "./barHeadContent";
    Vue.use(VueCookies);
    export default {
        name: "barHeader",
        store: store,
        data: function () {
            return{
                moreShow: [
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    }
                ],
                sugeListIsShow: false,
                wasLogged: this.$store.state.wasLogged,
                userName: '',
                scroll: false,
            }
        },
        methods: {
            jumpLogin(){
                if(this.wasLogged === false){
                    console.log("ccc");
                    window.location.href = './userLogin.html';
                }
                console.log("ccc");
            },
            showMore(index){
                this.moreShow[index].show = true;
            },
            hiddenMore(index){
                this.moreShow[index].show = false;
            },
            focus(el){
                this.$store.state.el = el;
                this.$store.commit("focus");
                this.sugeListIsShow = true;
            },
            blur(el){
                this.$store.state.el = el;
                this.$store.commit("blur");
                this.sugeListIsShow = false;
            },
            Scroll(){
                this.scroll = document.documentElement.scrollTop >= 66;
                // console.log(window.document.body.offsetHeight);
            }
        },
        filters: {
            "formatUserName": function (userName) {
                if(userName === null){
                    return "登录";
                }else {
                    return userName.length > 5 ? userName.slice(0,5) + '...' : userName;
                }
            }
        },
        created() {
            this.userName = Vue.$cookies.get("userName");
            if(this.userName != null){
                this.wasLogged = true;
            }
        },
        components:{
            barHeadContent: barHeadContent,
        },
        mounted () {
            window.addEventListener('scroll', this.Scroll)
        }
    }
</script>

<style scoped>
#header{
    width: 100%;
    position: relative;
    display: inline-block;
}
a{
    text-decoration: none;
}
.header-nav{
    width: 100%;
    height: 34px;
    /*background-color: #2e58ff;*/
    background-color: white;
    position: relative;
    border-bottom: silver 1px solid;
    box-sizing: border-box;
}
.header-nav>.aline{
    height: 20px;
    width: 20px;
    /*background-color: black;*/
    position: absolute;
    right: 440px;
    top: 50%;
    transform: translateY(-50%);
    border-right: silver 1px solid;
}
#header>.header-nav>.nav{
    list-style: none;
    width: 426px;
    height: 33px;
    /*background-color: red;*/
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
}
.nav>li{
    width: 74px;
    height: 33px;
    float: left;
    font-size: 15px;
    margin-left: 15px;
    background-color: white;
    cursor: pointer;
    text-align: center;
}
.nav>.nav-myself{
    width: 100px;
}
.nav-myself>span{
    font-size: 15px;
}
.nav i{
    border-width: 5px;
    border-style: solid;
    border-color: silver transparent transparent transparent;
    display: inline-block;
    text-align: center;
    transform: translateY(5px);
}
.nav a{
    text-decoration: none;
    margin-right: 5px;
    color: black;
    vertical-align: middle;
}
.nav span{
    line-height: 33px;
}
.member-icon{
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
.member-icon>img{
    width: 20px;
    height: 20px;
}
.more{
    position: absolute;
    width: 72px;
    height: 161px;
    /*background-color: #2e58ff;*/
    left: 31px;
    top: 30px;
    /*border: rgba(128,128,128,0.5) 2px solid;*/
    box-shadow: 1px 1px 5px silver;
    box-sizing: border-box;
    z-index: 45;
    background-color: white;
    /*display: none;*/
}
.more-in{
    list-style: none;
    margin-top: 8px;
}
.in{
    width: 72px;
    height: 26px;
    text-align: center;
    cursor: pointer;
    position: relative;
    transition: all 0.1s linear;
}

.in>span{
    line-height: 26px;
    z-index: 100;
    position: relative;
    font-size: 12px;
    color: #333;
}
.arrow{
    /*background-color: red;*/
    background-color: white;
    position: absolute;
    width: 10px;
    height: 10px;
    left: 50%;
    top: -3%;
    transform: translateX(-50%) rotate(45deg);
    border: rgba(128,128,128,0.2) 1px solid;
    border-bottom: none;
    border-right: none;
    /*box-shadow: 1px 1px 5px silver;*/
    z-index: 1;
}
.more-message{
    left: 125px;
    width: 92px;
    height: 187px;
    transform: translateX(-10%);
}
.more-message>.more-in{
    height: 182px;
}
.more-message-in{
    width: 92px;
}
.more-member{
    left: 218px;
    width: 92px;
    height: 83px;
    transform: translateX(-10%);
}
.more-member>.more-in{
    width: 92px;
    height: 78px;
}
.more-member-in{
    text-align: right;
    width: 92px;
}
.more-member-in>span{
    margin-right: 15px;
}
.more-member-in>img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    position: absolute;
    left: 5px;
}
.arrow3{
    top:-7%;
}
.more-more{
    left: 307px;
    height: 187px;
    transform: translateX(2%);
}
.more-member>.more-in{
    width: 72px;
}
.in:hover{
    background-color: #3a8bfc;
}
.header-search-box{
    height: 71px;
    width: 100%;
    /*background-color: red;*/
    margin-top: 32px;
    position: relative;
    /*box-shadow: 0px 1px 3px transparent;*/
    border-bottom: silver 1px none;
    box-sizing: border-box;
    background-color: white;
    transition: all linear 0.1s;
}
.header-search-box>.search-box-input{
    height: 40px;
    width: 536px;
    padding: 4px 10px 4px 7px;
    line-height: normal;
    overflow: hidden;
    color: #53545e;
    font-size: 16px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #E0E0E0;
}
.header-search-box>.suge-list{
    width: 553px;
    height: 242px;
    /*background-color: skyblue;*/
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
    box-shadow: 1px 1px 1px silver;
    background-color: white;
    border: silver 1px solid;
    z-index: 999;
}
.fixed{
    position:fixed;
    top: 0;
    margin-top:0;
    height:103px;
    border-bottom-style:solid;
    padding-top:20px;
    z-index:1;
}
.s-fixed{
    top: 20px;
}

.suge-list>ul{
    list-style: none;
    display: block;
    width: 100%;
    height: 242px;
}
.suge-list>ul>li{
    width: 537px;
    height: 32px;
    /*background-color: green;*/
    padding: 6px 8px 6px 8px;
    transition: all 0.3s linear;
}
.suge-list>ul>li:hover{
    background-color: #d7d6d6;
}
.suge-list>ul>li>span{
    background-color: #fafafa;
    line-height: 22px;
    display: block;
}
.suge-list>ul>li:first-child{
    color: #999;
    /*background-color: skyblue;*/
    background-color: white;
    padding: 0 8px 0 8px;
    height: 22px;
}
.suge-list>ul>li>img{
    width: 32px;
    height: 32px;
    float: left;
    margin-right: 8px;
}
.suge-list>ul>li>.suge-list-right{
    float: left;
    height: 32px;
    width: 460px;
}
.suge-list>ul>li>.right-bottom,.right-top{
    display: block;
}
.suge-list-right>.right-top{
    height: 17px;
    color: #000;
    font-size: 14px;
    font-weight: 700;
}
.suge-list-right>.right-bottom{
    height: 16px;
    color: #999;
}
.submit{
    width: 130px;
    height: 48px;
    position: absolute;
    left: 50%;
    transform: translateX(278px);
    /*top: 0;*/
    background-color: #3059ff;
    font-size: 16px;
    line-height: 48px;
    color: #fff;
    text-align: center;
    cursor: pointer;
}
.so-fixed{
    width: 553px;
    height: 242px;
    /*background-color: skyblue;*/
    position: absolute;
    left: 50%;
    top: 70px;
    transform: translateX(-50%);
    box-shadow: 1px 1px 1px silver;
    background-color: white;
    border: silver 1px solid;
    z-index: 999;
}
</style>