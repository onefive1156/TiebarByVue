import Loading from "./Loading";
export default {
    install: function (Vue, Option) {
        let LoadingConstructor = Vue.extend(Loading);
        let LoadingInstance = new LoadingConstructor();
        LoadingInstance.title = Option.title;
        let oDiv = document.createElement("div");
        document.body.appendChild(oDiv);
        LoadingInstance.$mount(oDiv);
        Vue.showLoading = function () {
            LoadingInstance.isShow = true;
        }
        Vue.hiddenLoading = function () {
            LoadingInstance.isShow = false;
        }
    }
}