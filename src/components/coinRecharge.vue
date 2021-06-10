<template>
    <div class="content">
        <ul class="coin-check" @click="getNums($event)">
            <li><span>100</span></li>
            <li><span>500</span></li>
            <li><span>1000</span></li>
            <li><span>2000</span></li>
            <li><span><input ref="nums" type="text" v-model = nums @focus="focus($event)" @blur="blur($event)"></span></li>
        </ul>
        <div class="send-charge"><p>充值</p></div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "coinRecharge",
        data: function(){
            return{
                nums: "自定义(100的整数)",
            }
        },
        methods: {
            getNums(el){
                this.nums = el.target.innerText;
                this.$refs.nums.style.fontSize = '30px';
            },
            sendNums(){

            },
            focus(el){
                el.target.style.fontSize = '30px';
            },
            blur(el){
                if (this.nums === '') {
                    this.nums = '自定义(100的整数)';
                    el.target.style.fontSize = '12px';
                }
                else{
                    el.target.style.fontSize = '30px';
                }
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .content{
        width: 50vw;
        height: 78vh;
        margin: 0 auto;
        /*background-color: skyblue;*/
    }
    .coin-check{
        list-style: none;
        position: relative;
        left: 50%;
        top: 10vh;
        transform: translate(-50%);
        width: 45vw;
        height: 10vh;
        /*background-color: red;*/
        display: flex;
        justify-content: space-between;
    }
    .coin-check>li{
        width: 15%;
        height: 100%;
        display: block;
        border: 1px silver solid;
        border-radius: 5%;
    }
    .coin-check>li>span>input{
        width: 99%;
        height: 7vh;
        outline: none;
        border: none;
        font-size: 5px;
        /*font-size: 30px;*/
    }
    .coin-check>li>span>input:focus{
        outline: none;
        border: none;
        font-size: 30px;
    }

    .coin-check>li>span{
        /*background-color: rebeccapurple;*/
        display: inline-block;
        width: 100%;
        height: 10vh;
        text-align: center;
        vertical-align: middle;
        font-size: 30px;
        margin: 0 auto;
        line-height: 10vh;
        cursor: pointer;
    }
    .send-charge{
        width: 5vw;
        height: 5vh;
        /*background-color: rebeccapurple;*/
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: #3a8bfc 1px solid;
        box-sizing: border-box;
        border-radius: 5%;
    }
    .send-charge>p{
        line-height: 5vh;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
    }
</style>