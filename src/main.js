import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import 'bootstrap/dist/js/bootstrap.js';
import {library} from '@fortawesome/fontawesome-svg-core';
 
import {
  faShoppingCart,
  faDollarSign,
  faSyringe
}
  from "@fortawesome/free-solid-svg-icons";

window.$ = window.jQuery = require('jquery');

library.add(faShoppingCart, faDollarSign, faSyringe);   

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
