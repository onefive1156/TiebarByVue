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
                    <a href="" @click.prevent @click="reply($event)" class="reply">{{textReply}}</a>
                </div>
            </div>
                <transition name="reply">
                    <div class="replies" v-show="replyIsShow">
                                <transition-group name="reply-move">
                                    <div :key="a" class="a-reply" v-show="replyIsShow">
                                        <div class="reply-head"><img src="./../assets/user_head.png" alt="">
                                            <a href="" @click.prevent="" class="reply-user-name">aaaa:</a>
                                        </div>
                                        <div class="reply-text-out">
                                            <span class="reply-text">一条评论</span>
                                        </div>
                                    </div>
                                    <div :key="b" class="a-reply" v-show="replyIsShow"><div class="reply-head">
                                        <img src="./../assets/user_head.png" alt=""><a href="" @click.prevent="" class="reply-user-name">aaaa:</a></div>
                                        <div class="reply-text-out">
                                            <span class="reply-text">一条评论</span>
                                        </div></div>
                                    <div :key="c" class="a-reply" v-show="replyIsShow"><div class="reply-head">
                                        <img src="./../assets/user_head.png" alt=""><a href="" @click.prevent="" class="reply-user-name">aaaa:</a></div>
                                        <div class="reply-text-out">
                                            <span class="reply-text">一条评论</span>
                                        </div></div>
                                </transition-group>
                        <div class="user-reply" v-show="replyIsShow">
                            <transition name="reply-move">
                                <textarea name="" id="" class="reply-input" v-if="replyIsShow" @focus="focus($event)"></textarea>
                            </transition>
                            <div class="send-reply">回复</div>
                        </div>
                    </div>
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
                replyOutIsShow: false,
                textReply: '回复',
                // commentReple: [{
                //     content: ""
                // }]
                a: 'a',
                b: 'b',
                c: 'c',
            }
        },
        methods:{
            reply(e){
                this.replyIsShow = !this.replyIsShow;
                if(this.replyIsShow){
                    this.textReply = '收起回复';
                }else{
                    this.textReply = '回复';
                }
            },
            focus(e){
                console.log(e.target);
                e.target.style.outline = 'none';
                e.target.style.border = '1px solid #3333CC';
            }
        },
        watch:{
            replyIsShow: function () {
                if(this.replyIsShow){
                    this.replyOutIsShow = true;
                }else{
                    setTimeout( ()=>{
                        this.replyOutIsShow = !this.replyOutIsShow;
                    },500)
                }
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
    overflow: hidden;
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
    display: inline-block;
    height: 16px;
}
.replies{
    width: 80%;
    height: 225px;
    background-color: #fbfbfd;
    position: relative;
    left: 19%;
    /*display: inline-block;*/
    border: 1px silver solid;
    overflow: hidden;
}
/*.a-reply:before{*/
/*    display: block;*/
/*}*/
.a-reply{
    /*height: 20px;*/
    color: skyblue;
    /*display: inline-block;*/
    /*list-style: none;*/
    width: 100%;
    margin-bottom: 5px;
    padding: 5px 5px 5px 5px;
    box-sizing: border-box;
    overflow: hidden;
}
.user-reply{
    width: 100%;
    /*height: 100px;*/
    /*display: inline-block;*/
    /*background-color: blue;*/
}
.reply-input{
    width: 80%;
    height: 30px;
    margin: 0 auto;
    display: block;
    resize: none;

}
.reply-head{
    display: inline-block;
    height: 100%;
    text-align: center;
    float: left;
}
.reply-head>img{
    width: 30px;
    margin-right: 3px;
}
.reply-text{
    /*width: 80%;*/
    display: inline-block;
    line-height: 15px;
    /*position: relative;*/
    /*top: -10px;*/

}
.reply-user-name{
    text-decoration: none;
    display: inline-block;
    height: 100%;
    line-height: 30px;
    position: relative;
    top: -5px;
}
.reply-text-out{
    display: inline-block;
    float: left;
    width: 85%;
    margin-top: 12px;

}
.send-reply{
    width: 40px;
    margin: 5px 405px;
}
.reply-enter, .reply-leave-to{
    height: 0;
    opacity: 0;
    transform: translateX(200px);
}

.reply-enter-active, .reply-leave-active {
    transition: all 0.5s;
}
.reply-move-enter, .reply-move-enter-leave-to{
    height: 0;
    opacity: 0;
    transform: translateX(200px);
}

.reply-move-enter-active, .reply-move-leave-active {
    transition: all 0.5s;
}
.reply-img{
    max-width: 300px;
    margin-left: 10px;
}
</style>