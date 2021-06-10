<template>
    <div class="login">
        <a class='login-fail' v-show="nameTipIsShow">请您输入手机/邮箱/用户名</a>
        <a class='login-fail' v-show="pwdTipIsShow">请您输入密码</a>
        <p class="loginTip">用户名密码登录</p>
        <div class="userName"><input @focus="focus($event)" @blur="blur($event)" v-model="userName" type="text" placeholder="邮箱/用户名" maxlength="20"/></div>
        <div class="passWord"><input @focus="focus($event)" @blur="blur($event)" v-model="userPwd" type="password" placeholder="密码" maxlength="14"/></div>
        <div class="submit" @click="login">登录</div>
        <a href="javascript:" class="forget-password">忘记密码?</a>
        <div class="login-footer"><a href="./userRegister.html" class="login-register">立即注册</a><a href="" class="login-download">下载贴吧APP</a></div>
    </div>
</template>

<script>
    import axios from "axios";
    import qs from 'qs';
    import Vue from 'vue';
    import VueCookies from 'vue-cookies';
    Vue.use(VueCookies)
    export default {
        name: "login",
        data: function () {
            return {
                userName: '',
                userPwd: '',
                loginType: '',
                pwdTipIsShow: false,
                nameTipIsShow: false,
            }
        },
        methods:{
            focus(el){
                el.target.style.outline = 'none';
                el.target.style.border = '1px solid #3333CC';
            },
            blur(el){
                el.target.style.outline = 'none';
                el.target.style.border = '1px solid silver';
            },
            login(){
                if(this.userName.length === 0){
                    this.nameTipIsShow = true;
                    return;
                }
                if(this.userPwd.length === 0){
                    this.pwdTipIsShow = true;
                    return;
                }
                this.loginType = this.validateEmail(this.userName) ? 'EMAIL' : 'NAME';
                Vue.showLoading();
                this.send();
            },
            validateEmail(userEmail) {
                if(!userEmail.length)return true;
                let myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
                if(myReg.test(userEmail)){
                    return true;
                }else {
                    return false;
                }
            },
            send(){
                axios.post("/RNG/UserLogin",qs.stringify({
                    userName: this.userName,
                    userPwd: this.userPwd,
                    loginBy: this.loginType,
                })).then(function (msg) {
                    Vue.hiddenLoading();
                    if(msg.data.loginJudge === 'true'){
                        VueCookies.set("userName", msg.data.userName, "300MIN");
                        // localStorage.setItem('userName', msg.data.userName);
                        // console.log(localStorage.getItem('userName'));
                        window.location.href = "./abar.html";
                    }else{
                        alert("密码或用户名错误");
                    }
                }).catch(function (error) {
                    Vue.hiddenLoading();
                    alert("网络错误，请稍后再试")
                    console.log(error);
                });
            },
            userRegister(){
                window.location.href = './userRegister.html';
            },
            test(){
                console.log("az");
            }
        },
        watch:{
            userName: function () {
                if(this.userName.length){
                    this.nameTipIsShow = false;
                }
            },
            userPwd: function () {
                if(this.userPwd.length){
                    this.pwdTipIsShow = false;
                }
            }
        },
        mounted() {
            let self = this;
            document.onkeyup = function (e) {
                if (e.code === "Enter"){
                    self.login();
                }
            }
        }
    }
</script>

<style scoped>

.login{
    width: 480px;
    height: 540px;
    /*background-color: skyblue;*/
    background-color: #ffffff;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 1%;
}
.login>.loginTip{
    line-height: 20px;
    margin-bottom: 0;
    padding-top: 50px;
    font-size: 18px;
    color: #141414;
    text-align: center;
}
.login>.userName{
    position: absolute;
    transform: translateX(-50%);
    height: 42px;
    width: 316px;
    top: 135px;
    left: 50%;
}
.login>.passWord{
    position: absolute;
    top: 193px;
    left: 50%;
    transform: translateX(-50%);
    height: 42px;
    width: 316px;
}
.login>div>input{
    line-height: 20px;
    width: 310px;
    font-size: 12px;
    color: rgb(102, 102, 102);
    padding: 10px 8px;
    margin: 0;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
    border-radius: 3px;
    transition: all 0.3s ease 0s;
}
.login>.submit{
    position: absolute;
    top: 303px;
    left: 50%;
    transform: translateX(-50%);
    height: 42px;
    width: 316px;
    font-size: 14px;
    font-weight: 800;
    border: 0;
    color: #fff;
    cursor: pointer;
    background-color: #4490f7;
    text-align: center;
    line-height: 42px;
}
.login>.forget-password{
    position: absolute;
    top: 370px;
    left: 120px;
    transform: translateX(-50%);
    text-decoration: none;
    color: #3482F9;
}
.login>.forget-password:hover{
    opacity: 0.6;
}
.login>.login-footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #F0F6FF;
    border-radius: 0 0 4px 4px;
    display: flex;
    justify-content: space-between;
}
.login>.login-footer>.login-register{
    color: #3482F9;
    text-decoration: none;
    margin-left: 20px;
}
.login>.login-footer>.login-download{
    color: #3482F9;
    text-decoration: none;
    margin-right: 20px;
}
.login>.login-fail{
    display: block;
    line-height: 14px;
    padding-top: 8px;
    height: 24px;
    color: #fc4343;
    position: absolute;
    left: 17%;
    top: 110px;
    font-size: 15px;
}
.login-fail:nth-of-type(2){
    top: 169px;
}
</style>