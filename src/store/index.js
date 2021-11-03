import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tbv: '',
    nhtc: '',
    thtc: '',
  },

  getters: {
    getTbv(state) {
      return state.tbv
    },
    getNhtc(state) {
      return state.nhtc
    },
    getThtc(state) {
      return state.thtc
    },
  },

  mutations: {
    setTbv(state, data) {
      state.tbv = data
    },
    getNhtc(state, data) {
      state.nhtc = data
    },
    getThtc(state, data) {
      state.thtc = data
    },
  },
})
