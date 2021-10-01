import Vue from 'vue'
import VueRouter from 'vue-router'
import ModerateHypovol from '../components/ModerateHypovol.vue'
import Results from '../views/Results.vue'
import Choices from '../components/Choices.vue'
import Checklist from '../components/Checklist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/moderate-hypovolemia',
    name: 'ModerateHypovol',
    component: ModerateHypovol,
  },
  {
    path: '/choices',
    name: 'Choices',
    component: Choices,
  },
  {
    path: '/checklist',
    name: 'Checklist',
    component: Checklist,
  },
  {
    path: '/results',
    component: Results,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
