<template>
    <div id="show-comment">
        <div class="title"><p>{{title}}</p></div>
        <aComment v-for="(value, index) in data" :title="value.title" :name="value.author" :index="index" :key="index"></aComment>
        <pageList></pageList>
    </div>
</template>

<script>
    import pageList from "./pageList";
    import aComment from "./aComment";
    export default {
        name: "tieComment",
        data: function(){
            return {
                title: "这个贴的主题",
                data:[{
                    title: "贴一",
                    author: "作者一aaaaa",
                    date: "2021-5-17",
                    substance: "贴一的内容"
                },{
                    title: "贴二",
                    author: "作者二",
                    date: "2021-5-17",
                    substance: "贴二的内容"
                },{
                    title: "贴三",
                    author: "作者三",
                    date: "2021-5-17",
                    substance: "贴三的内容"
                },{
                    title: "贴四",
                    author: "作者四",
                    date: "2021-5-17",
                    substance: "贴四的内容"
                }],
            }
        },
        components:{
            pageList: pageList,
            aComment: aComment,
        }
    }
</script>

<style scoped>
#show-comment{
    width: 740px;
    height: 100%;
    /*background-color: skyblue;*/
    display: inline-block;
    /*border: 1px silver solid;*/
    /*box-sizing: border-box;*/
}
.title{
    width: 740px;
    height: 50px;
    border-bottom: 1px silver dashed;
}
.title>p{
    height: 100%;
    width: 200px;
    line-height: 50px;
    font-size: 18px;
    color: red;
    margin-left: 10px;
}
.show-bottom{
    position: relative;
    bottom: -57px;
    padding-top: 0px ;
    margin-top: 10px;
 }
</style>