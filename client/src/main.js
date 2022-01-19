import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from "vuex";
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import 'bootstrap/dist/js/bootstrap.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCompositionAPI from '@vue/composition-api'
import Vuelidate from 'vuelidate';
import VueMq from 'vue-mq'
import store from './store';
import Toasted from 'vue-toasted';

Vue.component('font-awesome-icon', FontAwesomeIcon)

import {
  faShoppingCart,
  faDollarSign,
  faSyringe,
  faInfoCircle,
  faPlusSquare,
  faNotesMedical
}
  from "@fortawesome/free-solid-svg-icons";

window.$ = window.jQuery = require('jquery');

library.add(faShoppingCart, faDollarSign, faSyringe, faInfoCircle, faPlusSquare, faNotesMedical);

Vue.config.productionTip = false;

Vue.use(Vuex)

Vue.use(VueCompositionAPI)

Vue.use(Vuelidate)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

Vue.use(Toasted, {
  duration: 3000
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
