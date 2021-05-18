import Vue from 'vue';
import atie from "./views/atie";
new Vue({
    el: '#app',
    components:{
        app: atie,
    },
    template: '<app></app>'
})