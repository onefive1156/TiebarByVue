<template>
    <div class="show-bottom">
        <div class="pageList">
            <!--                <a href="javascript:" class="pageItem">1</a>-->
            <a href="" class="pageItem" v-show="nowPage != 1" @click.prevent="prePage">上一页</a>
            <a href="javascript:" class="pageItem" v-for="(index) in page" :class="{'currentPageItem': index === nowPage}" @click.stop="toPage($event)" :key="index">{{index}}</a>
            <a href="" class="pageItem" @click.prevent="lastPage">末页</a>
            <a href="" class="pageItem" @click.prevent="nextPage" v-show="nowPage != page">下一页</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pageList",
        data: function(){
            return {
                nowPage: 2,
                page: 4,
            }
        },
        methods:{
            prePage(){
                this.nowPage--;
            },
            nextPage(){
                this.nowPage++;
            },
            lastPage(){
                this.nowPage = this.page;
            },
            toPage(index){
                this.nowPage = parseInt(index.path[0].innerText);
            }
        },
    }
</script>

<style scoped>
.show-bottom{
    width: 740px;
    height: 57px;
    padding-top: 15px;
    /*background-color: blue;*/
    position: relative;
    top: 100%;
    transform: translateY(-100%);
}
.pageList{
    width: 720px;
    height: 28px;
    /*background-color: green;*/
    margin: 0 0 15px 20px;
}
/*.pageList>a{*/
/*    display: inline-block;*/
/*    line-height: 28px;*/
/*    width: 28px;*/
/*    height: 28px;*/
/*    text-align: center;*/
/*    background-color: skyblue;*/
/*}*/
.pageItem{
    display: inline-block;
    line-height: normal;
    text-decoration: none;
    padding: 5px 9px;
    font-size: 12px;
    background: #fff;
    color: #666;
    border: 1px solid #e6e6e6;
    margin-right: 2px;
}
.pageItem:hover{
    color: #3a8bfc;
    border: 1px solid #3a8bfc;
}
.currentPageItem{
    border: 1px solid transparent;
    color: #3a8bfc;
}
.currentPageItem:hover{
    border: 1px solid transparent;
    color: #3a8bfc;
    }
</style>