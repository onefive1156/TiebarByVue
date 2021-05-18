import Vue from 'vue'
import App from './views/abar'
Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: c => c(App)
})