import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tbv: '',
    rbcv: '',
    nhct: '',
    thct: '',
  },

  getters: {
    getTbv: (state) => {
      return state.tbv
    },
    getNhct: (state) => {
      return state.nhct
    },
    getThct: (state) => {
      return state.thct
    },
    getRbcv: (state) => {
      return state.rbcv
    },
  },

  mutations: {
    setTbv(state, data) {
      state.tbv = data
    },
    setNhct(state, data) {
      state.nhct = data
    },
    setThct(state, data) {
      state.thct = data
    },
    setRbcv(state, data) {
      state.rbcv = data
    },
  },
})
