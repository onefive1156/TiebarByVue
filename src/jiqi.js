const fs =require('fs');
var STOP = [];//停用词数组
var INPUT =[];//新闻数组
var INPUTARR =[]; //把新闻数组中的每个数组中的字符串转化为数组
var DIARR =[]//处理停用词后的INPUTARR数组
var NUMBER =[]//词频
var NTFNUMBER = []
fs.readFile("D:\\机器学习\\VSM\\Chinese-StopWords.txt",(err,data)=>{
    // console.log(data.toString().split("\r\n"));
    STOP = data.toString().split("\r\n");
    // console.log(STOP.length);
})

//input 转换为数组
fs.readFile("D:\\机器学习\\VSM\\input.txt",(err,data)=>{
    // console.log(data.toString().split("\r\n"));
    INPUT = data.toString().split("\r\n");
    // console.log(INPUT);//["string",.....,"string"]string指的每一行
    for(var i=0;i<INPUT.length;i++){
        INPUTARR[i] = INPUT[i].split(" ");//[[item，item],[item，item],[item，item]]
    }

    // console.log(INPUTARR[0]);
    deleteStopWord();
    // deleteRabWord();
    TF();
    NTF(DIARR,DIARR[1]);
    tfAndNDF(DIARR[1])
})

//处理停用词
function deleteStopWord(){
    var temp = INPUTARR
    for(let i=0;i<temp.length;i++){
        for(let j=0;j<temp[i].length;j++){
            for(let k=0;k<STOP.length;k++){
                if(temp[i][j]==STOP[k]){
                    temp[i].splice(j,1);
                }
            }
        }
    }
    DIARR = temp;
    // console.log("1",DIARR);
}
//处理垃圾词
function deleteRabWord(){
    var rabArr  =['十','九','七','八','六','五','四','三','二','一','2'];
    for(let i=0;i<DIARR.length;i++){
        for(let j=0;j<DIARR[i].length;j++){
            for(let k=0;k<rabArr.length;k++){
                if(DIARR[i][j].indexOf(rabArr[k])!=-1){
                    DIARR[i].splice(j,1);
                }
            }
        }
    }
    // console.log("2",DIARR);
}


//计算词频(某个词在文章中的出现次数)
function TF(){
    // for(let i=0;i<DIARR.length;i++){
    var temp  = DIARR[1].reduce((pre,cur)=>{
        if(cur in pre){
            pre[cur] += (1/DIARR[1].length)
        }else{
            pre[cur] = (1/DIARR[1].length);
        }
        return pre
    },{})
    //   let temp = Array.from(temp)
    NUMBER=temp;

    console.log(("TF: "));
    console.log(NUMBER);
    // }
}
//逆文档频率
function NTF(arr1,arr2){
    var num = 143;//文档库的总数
    for (let i = 0; i < arr2.length; i++) {
        NTFNUMBER[arr2[i]]=0;
    }
    for(let i =0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(arr1[j].indexOf(arr2[i])!=-1){
                NTFNUMBER[arr2[i]]++;
            }
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        NTFNUMBER[arr2[i]]=Math.log(num/(NTFNUMBER[arr2[i]]+2));
    }
    console.log(("IDF: "));
    console.log(NTFNUMBER);
}

function tfAndNDF(arr){
    var result = []
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]]=0;
    }
    // console.log(NTFNUMBER);
    // console.log(NUMBER);
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]]=NTFNUMBER[arr[i]]*NUMBER[arr[i]];
    }
    console.log(("TFIDF: "));
    console.log(result);
}
