<template>
    <div id="creatNewBar">
        <div class="bar-info">
            <form>
                <div class="out-bar-name flex"><span class="add">*吧名&ensp;&ensp;&ensp;&ensp;</span><input type="text" class="bar-name"></div>
                <div class="out-bar-master flex"><span class="add">*吧主</span><input type="text" class="bar-master"></div>
                <div class="out-bar-name flex"><span>吧的介绍</span><textarea class="bar-suggest" id="" ></textarea></div>
            </form>
            <div class="send-charge"><p>提交</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "create"
    }
</script>

<style scoped>
    input,textarea{
        box-sizing: border-box;
    }
    input:focus, textarea:focus{
        outline: none;
        border: 1px #3a8bfc solid;
    }
#creatNewBar{
    height: 78vh;
    width: 50vw;
    /*background-color: skyblue;*/
    margin: 0 auto;
}
.flex{
    display: flex;
}
.bar-info{
    width: 40vw;
    height: 45vh;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 20%;
    padding-top: 20px;
    border: 1px slateblue solid;
    border-radius: 5%;
}
.out-bar-master{
    height: 5vh;
}
div>span{
    display: inline-block;
    font-size: 20px;
    line-height: 5vh;
    vertical-align: top;
}
.add{
    margin-right: 1.5vw;
}
input{
    height: 3vh;
    width: 20vw;
}
.send-charge{
    width: 5vw;
    height: 5vh;
    /*background-color: rebeccapurple;*/
    position: relative;
    left: 50%;
    top: 20%;
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
    margin: 0;
}
form{
    width: 30vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-between;
    border: 1px silver solid;
    /*box-sizing: border-box;*/
    padding: 10px 10px 10px 10px;
    border-radius: 3%;
}
.bar-suggest{
    resize: none;
    height: 5vh;
    width: 20vw;
}
</style>