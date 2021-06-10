import Vue from 'vue';
import userRegister from "./views/userRegister.vue";
import Loading from "./plugin/Loading/index";
Vue.config.productionTip = false;
Vue.use(Loading, {
    title: "正在注册",
});
new Vue({
    // el: '#app',
    render: c => c(userRegister)
}).$mount('#app')