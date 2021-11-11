import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // INITIAL STATE OF VARIABLES USED THROUGHOUT THE APP
  state: {
    anemic: false,
    euvolemic: false,
    hypovolemic: false,
    mildOverload: false,
    nhct: null,
    normalRedCellVolume: false,
    polycythemic: false,
    rbcv: null,
    severeOverload: false,
    sex: '',
    tbv: null,
    thct: null,
  },
  // SET ACTIONS TO UPDATE VARIABLES
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
})
