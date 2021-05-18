<template>
    <div class="container" v-if="isShow">
        <div class="p-loading">
            <div class="loading"></div>
            <p class="title">{{title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        data: function () {
            return {
                title: "正在登录...",
                isShow: false,
            }
        }
    }
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    position: absolute;
    left: 0;
    top: 0;
}
.p-loading{
    width: 100px;
    height: 116px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.loading{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-right-color: #409eff;
    box-sizing: border-box;
    animation: loading 1s ease infinite;
}
.title{
    text-align: center;
    font-size: 16px;
    color: #2e58ff;
}
    @keyframes loading {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
</style>