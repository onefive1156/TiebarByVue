<template>
    <div>
        <div class="jump-to-login" v-if="isJump">
            <p v-if="isSuccess">注册成功{{jumpTime}}s后跳转到登录界面</p>
        </div>
        <div class="some-text">
            <h3>用科技</h3>
            <p>让复杂的世界更简单</p>
        </div>
        <div class="content">
            <div class="guid">
                <h3>欢迎注册</h3>
                <p style="display: inline-block">已有账号？</p>
                <a href="./userLogin.html" style="text-decoration: none;font-size: 14px">登录</a>
            </div>
            <div class="reg-content">
                <span class="userTip" v-show="nameTipIsShow">设置后不可更改，中英文均可，最长14个英文或7个汉字</span>
                <span class="passwordTip" v-show="pwdTipIsShow">
                    <p>长度8~14个字符</p>
                    <p>字母/数字以及标点符号至少包含两种</p>
                    <p>不允许有中文空格</p>
                </span>
                <span class="nameError Error" v-show="nameErrorIsShow">用户名不能超过7个汉字或14个字符</span>
                <span class="emailError Error" v-show="emailErrorIsShow">邮箱格式错误</span>
                <span class="passwordError Error" v-show="pwdErrorIsShow">密码设置不符合要求</span>
                <span class="valError Error" v-show="captchaErrorIsShow">验证码错误</span>
                <div class="input"><p>用户名</p><input @focus="focus($event)" @blur="blur($event)"type="text" v-model="userName" class="userName" placeholder="请输入用户名"></div>
                <div class="input"><p>邮&nbsp&nbsp&nbsp箱</p><input @focus="focus($event)" @blur="blur($event)"type="text" v-model="userEmail" class="userEmail" placeholder="可用于登录或找回密码"></div>
                <div class="input"><p>密&nbsp&nbsp&nbsp码</p><input @focus="focus($event)" @blur="blur($event)"type="password" v-model="userPwd" class="userPassword" placeholder="请设置登录密码"></div>
                <div class="input"><p>验证码</p><input ref="captchaInput" @focus="focus($event)" @blur="blur($event)" v-model="captcha" class="input-val" type="text" placeholder="输入验证码（不区分大小写）">
                    <captcha :show_num="shownum" @upSN="upSN"></captcha>
                </div>
                <div class="regiset" @click="submit"><p>注册</p></div>
            </div>
        </div>
    </div>
</template>

<script>
    import captcha from "./captcha";
    import axios from "axios";
    import qs from "qs";
    import Vue from 'vue';
    export default {
        name: "register",
        data: function(){
            return{
                nameTipIsShow: false,
                pwdTipIsShow: false,
                nameErrorIsShow: false,
                emailErrorIsShow: false,
                pwdErrorIsShow: false,
                captchaErrorIsShow: false,
                userName: '',
                userPwd: '',
                userEmail: '',
                captcha: '',
                shownum: [],
                jumpTime: 3,
                isJump: false,
                isSuccess: false,
            }
        },
        methods:{
            focus(el){
                el.target.style.outline = 'none';
                el.target.style.border = '1px solid #3333CC';
                if(el.target.className === 'userName') this.nameTipIsShow = true;
                if(el.target.className === 'userPassword') this.pwdTipIsShow = true;
            },
            blur(el){
                el.target.style.border = '1px solid silver';
                if(el.target.className === 'userName') this.nameTipIsShow = false;
                if(el.target.className === 'userPassword') this.pwdTipIsShow = false;
            },
            upSN(data){
                this.show_num = data;
            },
            submit(){
                this.nameErrorIsShow = !this.validateUserName();
                this.emailErrorIsShow = !this.validateEmail();
                this.pwdErrorIsShow = !this.validatePassword();
                this.captchaErrorIsShow = !this.captchaJudge();
                console.log(this.nameErrorIsShow, this.emailErrorIsShow, this.pwdErrorIsShow, this.captchaErrorIsShow);
                if(!this.nameErrorIsShow && !this.emailErrorIsShow && !this.pwdErrorIsShow && !this.captchaErrorIsShow){
                    Vue.showLoading();
                    let self = this;
                    axios.post("/RNG/UserRegister",qs.stringify({
                        userName: this.userName,
                        userEmail: this.userEmail,
                        userPwd: this.userPwd,
                    })).then(function (msg) {
                        Vue.hiddenLoading();
                        self.isJump = true;
                        self.isSuccess = true;
                        let stop = setInterval(function () {
                            self.jumpTime--;
                            if (self.jumpTime === 0){
                                clearInterval(stop);
                                window.location.href = './userLogin.html';
                            }
                        },1000)
                    }).catch(function (err) {
                        Vue.hiddenLoading();
                        console.log(err);
                    });
                }
            },
            validateUserName() {
                let Length = 0;
                if(this.userName.length < 2){
                    return false;
                }
                for(let i=0;i<this.userName.length;i++){
                    let re = /[\u4E00-\u9FA5]/g;
                    if(this.userName[i]>='a' && this.userName[i]<='z' || this.userName[i]>='A' && this.userName[i]<='Z'
                        || this.userName[i]>='0'&&this.userName[i]<='9'
                        || re.test(this.userName[i])){
                        let now = /[\u4E00-\u9FA5]/g;
                        if(now.test(this.userName[i])){
                            Length += 2;
                        }else {
                            Length +=1;
                        }
                        if (Length > 14){
                            console.log("cnm");
                            return false;
                        }
                    }else {

                        return false;
                    }
                }
                return true;
            },
            validateEmail() {
                if(!this.userEmail.length)return true;
                let myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
                return myReg.test(this.userEmail) ? true : false;
            },
            validatePassword() {
                let re = /[\u4E00-\u9FA5]/g;
                if(!this.userPwd.length)return true;
                if(re.test(this.userPwd) || this.userPwd.length<8 || this.userPwd.length>14)return false;
                for(let i=0;i<this.userPwd.length;i++){
                    let now = /[\u2000—\u206F]/g;
                    if(!(this.userPwd[i]>='a' && this.userPwd[i]<='z' || this.userPwd[i]>='A'&&this.userPwd[i]<='Z'
                        || this.userPwd[i]>='0'&&this.userPwd[i]<='9'
                        || now.test(this.userPwd[i])) || this.userPwd[i] === ' '){
                        return false;
                    }
                }
                let char = /[a-zA-Z]/g;
                let num = /[0-9]/g;
                return char.test(this.userPwd) && num.test(this.userPwd);

            },
            captchaJudge() {
                let val = this.captcha.toLowerCase();
                let num = this.show_num.join("");
                if(val === ''){
                    return null;
                }else if(val === num){
                    return true;
                }else{
                    return false;
                }
            }
        },
        mounted() {
            let self = this;
            document.onkeyup = function (e) {
                if (e.code === "Enter"){
                    self.submit();
                }
            }
        },
        components:{
            captcha: captcha,
       },

    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.jump-to-login{
    position: absolute;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background:rgba(0,0,0,0.5);
}
.jump-to-login>p{
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    font-size: 20px;
    color: whitesmoke;
}
.some-text{
    position: fixed;
    left: 195px;
    top: 314px;
    color: #fff
}
.some-text>h3{
    font-size: 54px;
    font-weight: 700;
}
.some-text>p{
    font-size: 32px;
    letter-spacing: 3.81px;
    font-weight: 300;
}
.content{
    height: 554px;
    position: absolute;
    right: 139px;
    top: 50%;
    margin-top: -340px;
    width: 480px;
    background: #fff;
    background: rgba(255,255,255,.9);
    border-radius: 12px;
    overflow: hidden;
    /*background-color: skyblue;*/
}
.content>.guid{
    margin: 30px 0 0 39px;
    height: 70px;
    width: 441px;
    /*background-color: red;*/
}
.content>.guid>h3{
    font-size: 36px;
    color: #000;
    padding-bottom: 4px;
}
.content>.guid>p{
    font-size: 14px;
    color: #9B9B9B;
}
.guid>p>span{
    color: #2e58ff;
    cursor: pointer;
}
.content>.reg-content{
    position: relative;
    padding-top: 40px;
    width: 100%;
    height: 720px;
    font-size: 12px;
    /*background-color: darkcyan;*/
}
.content>.reg-content>.userTip{
    width: 317px;
    height: 39px;
    line-height: 39px;
    position: absolute;
    left: 97px;
    top: 0;
    text-align: center;
    color: #fff;
    background: url("./../assets/check-username-bg.png") no-repeat;
    background-size: 100%;
}
.content>.reg-content>.passwordTip{
    width: 317px;
    height: 79px;
    position: absolute;
    left: 122px;
    top: 100px;
    background: url("./../assets/check-pwd-bg-2x.png") no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 5px;
    padding-top: 5px;
}
.content>.reg-content>.passwordTip>p{
    /*line-height: 39px;*/
    /*text-align: center;*/
    color: #fff;

}
.content>.reg-content>.passwordTip>p:last-child{
    padding-bottom: 20px;
}
.content>.reg-content>.input>p{
    display: inline-block;
    width: 82px;
    height: 40px;
    text-align: right;
    font-size: 14px;
    color: #333;
    letter-spacing: 0;
    line-height: 40px;
    margin-right: 15px;
    font-weight: 200;
}
.content>.reg-content>.input{
    width: 100%;
    height: 40px;
    margin-bottom: 32px;
}
.content>.reg-content>.input>input{
    padding: 11px 10px;
    max-height: 40px;
    background: #fff;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    font-size: 14px;
    width: 321px;
    color: #000;
}
.content>.reg-content>.input>.input-val{
    width: 183px;
}
.regiset{
    height: 50px;
    width: 400px;
    padding-top: 40px;
    /*background-color: #dddddd;*/
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
}
.regiset>p{
    font: 400 13.3333px Arial;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    color: #fff;
    background: #BDCEFC;
    border-radius: 25px;
    width: 100%;
    text-align: center;
    line-height: 50px;
}
#canvas {
    vertical-align: middle;
    box-sizing: border-box;
    border: 1px solid #ddd;
    cursor: pointer;
}
.Error{
    font-size: 12px;
    color: #F55;
    position: absolute;
}
.nameError{
    left: 97px;
    top: 85px;
}
.emailError{
    left: 97px;
    top: 157px;
}
.passwordError{
    left: 97px;
    top: 229px;
}
.valError{
    left: 97px;
    top: 301px;
}
</style>