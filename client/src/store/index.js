import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  // INITIAL STATE OF VARIABLES USED THROUGHOUT THE APP
  state: {
    age: null,
    anemic: false,
    currentPatientID: null,
    euvolemic: false,
    firstName: '',
    height: null,
    hypovolemic: false,
    lastName: '',
    mildOverload: false,
    nhct: null,
    notes: '',
    normalRedCellVolume: false,
    phct: null,
    polycythemic: false,
    pv: null,
    rbcv: null,
    severeOverload: false,
    sex: '',
    tbv: null,
    thct: null,
    weight: null,
    sessionGuid: null,
    apiURL: "http://0.0.0.0:8081"
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
    setSessionGuid({ state }, newSessionGuid) {
      state.sessionGuid = newSessionGuid
    },
    setCurrentPatientID({ state }, currentPatientID) {
      state.currentPatientID = currentPatientID
    }
  },
  methods: {


  }
})
