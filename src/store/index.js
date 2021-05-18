import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      wasLogged: false,
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
  },
  actions: {
  },
  modules: {
  }
})
