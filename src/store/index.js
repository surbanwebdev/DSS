import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tbv: 0,
    rbcv: 0,
    nhct: 0,
    thct: 0,
  },

  actions: {
    setTbv({ state }, newTbv) {
      state.tbv = newTbv
    },
    setRbcv({ state }, newRbcv) {
      state.rbcv = newRbcv
    },
    setNhct({ state }, newNhct) {
      state.nhct = newNhct
    },
  },

  // getters: {
  //   getTbv: (state) => {
  //     return state.tbv
  //   },
  //   getNhct: (state) => {
  //     return state.nhct
  //   },
  //   getThct: (state) => {
  //     return state.thct
  //   },
  //   getRbcv: (state) => {
  //     return state.rbcv
  //   },
  // },

  // mutations: {
  //   setTbv(state, data) {
  //     state.tbv = data
  //   },
  //   setNhct(state, data) {
  //     state.nhct = data
  //   },
  //   setThct(state, data) {
  //     state.thct = data
  //   },
  //   setRbcv(state, data) {
  //     state.rbcv = data
  //   },
  // },
})
