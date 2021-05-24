<template>
    <div class="comment">
        <div class="author">
            <div class="author-head"><img src="./../assets/user_head.png" alt=""></div>
            <span class="author-name">{{name}}</span>
        </div>
        <div class="content">
            <p>cdpr说过，2077会全面支持mod，cdpr未来也会发布mod制作工具。如果这游戏到时候仍有热度，那应该会有大量mod可供选择。</p>
            <img src="./../assets/a_comment_img.jpg" alt="" class="reply-img">
            <div class="content-info">
                <div class="box-info">
                    <span>{{index + 1}}楼 &nbsp</span><span>2021-5-24 &nbsp;</span><span>18:11 &nbsp;</span>
                    <a href="" @click.prevent @click="reply" class="reply" >回复</a>
                </div>
            </div>
            <transition name="reply">
                <div class="reply-content" v-if="replyIsShow"></div>
            </transition>
        </div>

    </div>
</template>

<script>
    export default {
        name: "aComment",
        props: ['title', 'name', 'index'],
        data: function(){
            return {
                replyIsShow: false,
            }
        },
        methods:{
            reply(){
                this.replyIsShow = !this.replyIsShow;
            }
        }

    }
</script>

<style scoped>
.comment{
    width: 740px;
    height: 100%;
    border-bottom: 1px silver dashed;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    transition: all 3s linear;
}
.author{
    width: 20%;
    height: 100%;
    display: inline-block;
    background-color: #fbfbfd;
    position: absolute;
    top: 0;
}
.author-head{
    width: 100%;
    height: 60px;
    text-align: center;
    margin-top: 10px;
    display: inline-block;
}
.author-head>img{
    display: inline-block;
    height: 100%;
}
.author-name{
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 20px;
}
.content{
    display: inline-block;
    width: 80%;
    /*float: right;*/
    /*position: relative;*/
    margin-left: 20%;
}
.content>p{
    margin: 10px 10px 10px 10px;
    height: 200px;
}
.content-info{
    /*position: absolute;*/
    /*top: 90%;*/
    /*transform: translateY(-80%);*/
    /*right: 2%;*/
    width: 100%;
    color: silver;
    display: inline-block;
}
.box-info{
    position: relative;
    display: inline-block;
    left: 100%;
    transform: translateX(-105%);
    margin: 5px 0px 5px 0px;
}
.reply{
    text-decoration: none;
    color: #3a8bfc;
}
.reply-content{
    width: 100%;
    height: 100px;
    background-color: red;
}
.reply-enter, .reply-leave-to{
    height: 0;
}
.reply-enter-active, .reply-leave-active {
    transition: all .5s;
}
.reply-img{
    max-width: 300px;
    margin-left: 10px;
}
</style>