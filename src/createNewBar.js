import Vue from 'vue'
import createNewBar from "./views/createNewBar";
new Vue({
    el: '#app',
    render: c=>c(createNewBar),
})