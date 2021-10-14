import Vue from 'vue'
import VueRouter from 'vue-router'
import Results from '../views/Results.vue'
import SuggestedTreatment from '../components/SuggestedTreatment.vue'
import Choices from '../components/Choices.vue'
import Checklist from '../components/Checklist.vue'
import Radios from '../components/Radios.vue'
import DailyTreatmentComplete from '../components/DailyTreatmentComplete.vue'
import Post24Checklist from '../components/Post24Checklist.vue'
import SelectStrategy from '../components/SelectStrategy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '/post-24-checklist',
    name: 'Post24Checklist',
    component: Post24Checklist,
  },
  {
    path: '/select-strategy',
    name: 'SelectStrategy',
    component: SelectStrategy,
  },
  {
    path: '/radios',
    name: 'Radios',
    component: Radios,
  },
  {
    path: '/results',
    component: Results,
  },
  {
    path: '/suggested-treatment/:congestionLevel',
    name: 'SuggestedTreatment',
    component: SuggestedTreatment,
  },
  {
    path: '/daily-treatment-complete',
    name: 'DailyTreatmentComplete',
    component: DailyTreatmentComplete,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
