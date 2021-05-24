import Vue from 'vue'
import App from './views/App'
import Loading from "./plugin/Loading/index";
Vue.config.productionTip = false
Vue.use(Loading, {
    title: "正在登录...",
});
new Vue({
    el: '#app',
    // render: c => c(App)
    components:{
        app: App,
    },
    template: '<app></app>'
})
