<template>
    <div class="footer">
        <div class="footer-tip">
            <img src="./../assets/bottom_tip_reply.png" alt="">
            <span class="footer-tip-left">发表回复</span>
            <span class="footer-tip-right">请遵守回复规则</span>
        </div>
        <div class="input-tie-title">
            <input type="text" placeholder="请填写标题" @focus="focus($event)" @blur="blur($event)" v-model="title" v-if="isBar">
        </div>
        <div class="input-tie-content">
            <div class="select-img"><input type="file" class="img-update" accept="image/png, image/jpeg, image/gif" ref="img"><span><img src="./../assets/s-img.png" alt="">图片</span></div>
            <textarea name="" id="last-content" @focus="focus($event)" @blur="blur($event)" v-model = "text"></textarea>
        </div>
        <div class="tie-submit" @click="send">发表</div>
    </div>
</template>
<script>
    import store from './../store/index';
    import axios from 'axios';
    import qs from 'qs';
    export default {
        name: "barFooter",
        store: store,
        data: function(){
            return{
                text:'',
                title:'',
            }
        },
        props: ['isBar'],
        methods:{
            focus(el){
                this.$store.state.el = el;
                this.$store.commit("focus");
            },
            blur(el){
                this.$store.state.el = el;
                this.$store.commit("blur");
            },
            send(){
                let sendFormat = new FormData();
                console.log(this.$refs.img.files[0]);
                sendFormat.append("files", this.$refs.img.files[0]);
                sendFormat.append("title", this.title);
                sendFormat.append("text", this.text);
                console.log(qs.stringify({
                    data: "yupf",
                }));
            }
        }
    }
</script>

<style scoped>
.footer{
    width: 982px;
    height: 528px;
    padding-top: 32px;
    padding-left: 20px;
    margin: -117px auto;
    border: 1px solid #e5e5e5;
    border-top:none;
    box-sizing: border-box;
}
.footer-tip{
    width: 720px;
    height: 22px;
    padding-right: 240px;
    margin-bottom: 12px;
}
.footer-tip>img{
    width: 22px;
}
.footer-tip>span{
    line-height: 22px;
    display: inline-block;
    vertical-align: top;
}
.footer-tip>.footer-tip-left{
    font-weight: 700;
    font-size: 14px;
}
.footer-tip-right{
    float: right;
}
.input-tie-title{
    width: 960px;
    height: 32px;
    padding-bottom: 15px;
}
.input-tie-title>input{
    padding: 0 9px;
    font-size: 14px;
    color: #333;
    background-color: #FFF;
    border: 1px solid #ccc;
    line-height: 16px;
    width: 640px;
    height: 30px;
}
.input-tie-content{
    width: 720px;
    height: 268px;
    border: 1px solid #dfdfdf;
    padding: 0 14px 14px 14px;
}
.select-img{
    width: 692px;
    height: 22px;
    padding: 12px 14px 12px 14px;
    position: relative;
    vertical-align: top;
}
.select-img>input{
    width: 48px;
    height: 20px;
    opacity: 0;
    position: absolute;
    left: 0;
    z-index: 999;
}
.select-img>span{
    width: 48px;
    height: 20px;
    position: absolute;
    left: 0;
    cursor: pointer;
    color: #3a8bfc;
}
.select-img>span>img{
    width: 20px;
    vertical-align: middle;
}
#last-content{
    width: 720px;
    height: 220px;
    resize: none;
}
.tie-submit{
    width: 28px;
    height: 16px;
    padding: 7px 14px 7px 14px;
    margin-top: 75px;
    background: #317ef3;
    font-size: 14px;
    line-height: 16px;
    color: white;
}
</style>