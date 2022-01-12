import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  // INITIAL STATE OF VARIABLES USED THROUGHOUT THE APP
  state: {
    age: null,
    anemic: false,
    currentPatientID: null,
    currentPatientSex: null,
    currentHct: null,
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
    apiURL: "http://localhost:8081",
    symHypertension: false,
    symHypotension: false,
    symEdemic: false,
    symRenal: false
  },
  // SET ACTIONS TO UPDATE VARIABLES
  actions: {
    setTbv({ state }, newTbv) {
      state.tbv = newTbv
    },
    setRbcv({ state }, newRbcv) {
      state.rbcv = newRbcv
    },
    setPv({ state }, newPv) {
      state.pv = newPv
    },
    setNhct({ state }, newNhct) {
      state.nhct = newNhct
    },
    setSessionGuid({ state }, newSessionGuid) {
      state.sessionGuid = newSessionGuid
    },
    setCurrentPatientID({ state }, currentPatientID) {
      state.currentPatientID = currentPatientID
    },
    setCurrentPatientSex({ state }, currentPatientSex) {
      state.currentPatientSex = currentPatientSex
    },
    setHypertension({ state }, newHypertension) {
      state.symHypertension = newHypertension
    },
    setHypotension({ state }, newHypotension) {
      state.symHypotension = newHypotension
    },
    setEdemic({ state }, newEdemic) {
      state.symEdemic = newEdemic
    },
    setRenal({ state }, newRenal) {
      state.symRenal = newRenal
    },
    setCurrentHct({ state }, newCurrentHct) {
      state.currentHct = newCurrentHct
    },
  },
  methods: {


  }
})
