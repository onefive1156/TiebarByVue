import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      wasLogged: false,
      isTie: true,
      inputContent: '帖子',
      barId: 0,
      nowPage: 1,
      page: 0,
  },
  mutations: {
    focus(state){
      state.el.target.style.outline = 'none';
      state.el.target.style.border = '1px solid #3333CC';
    },
    blur(state){
      state.el.target.style.outline = 'none';
      state.el.target.style.border = '1px solid silver';
    },
    changeTie(state, payload){
       state.isTie = payload;
       state.inputContent = state.isTie ? '帖子' : '视频';
    },
      getBarId(state, payload){
        state.barId = payload;
      },
      pageDown(state, payload){
        state.nowPage--;
      },
      pageUp(state, payload){
        state.nowPage++;
      },
      setPage(state, page){
        state.page = page;
      },
      setNowPage(state, nowPage){
        state.nowPage = nowPage;
          console.log(nowPage);
      }
  },
  actions: {
  },
  modules: {
  }
})
