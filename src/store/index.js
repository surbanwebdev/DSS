import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vuexTest: "Before mutation"
  },

  getters: {
    getTest(state) {
      return state.vuexTest;
    }
  },

  mutations: {
    changeTest(state, data) {
      state.vuexTest = data;
    }
  }
});