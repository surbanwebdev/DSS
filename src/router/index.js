import Vue from 'vue';
import VueRouter from 'vue-router';
import ModerateHypovol from '../components/ModerateHypovol.vue';
import Results from '../views/Results.vue';
import PageOne from '../components/PageOne.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: '/moderate-hypovolemia',
      name: 'ModerateHypovol',
      component: ModerateHypovol
    },
    {
      path: '/page-one',
      name: 'PageOne',
      component: PageOne
    },
    {
      path: '/results',
      component: Results
    }
  ]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router;