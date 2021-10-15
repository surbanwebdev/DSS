import Vue from 'vue'
import VueRouter from 'vue-router'
import Results from '../views/Results.vue'
import SuggestedTreatment from '../components/SuggestedTreatment.vue'
import Choices from '../components/Choices.vue'
import Checklist from '../components/Checklist.vue'
import SymptomSeverity from '../components/SymptomSeverity.vue'
import DailyTreatmentComplete from '../components/DailyTreatmentComplete.vue'
import Post24Checklist from '../components/Post24Checklist.vue'
import SelectStrategy from '../components/SelectStrategy.vue'
import IVTreatmentEval from '../components/IVTreatmentEval.vue'
import SelectStrategyTrunc from '../components/SelectStrategyTrunc.vue'
import DryWeightConfirm from '../components/DryWeightConfirm.vue'
import StabilityConfirm from '../components/StabilityConfirm.vue'
import DiureticsWarning from '../components/DiureticsWarning.vue'
import IVTreatment2 from '../components/IVTreatment2.vue'
import CompletionPlan from '../components/CompletionPlan.vue'
import TreatmentComplete from '../components/TreatmentComplete.vue'
import BVAData from '../components/BVAData.vue'

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
    path: '/select-strategy-trunc',
    name: 'SelectStrategyTrunc',
    component: SelectStrategyTrunc,
  },
  {
    path: '/symptom-severity',
    name: 'SymptomSeverity',
    component: SymptomSeverity,
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
  {
    path: '/iv-treatment-eval',
    name: 'IVTreatmentEval',
    component: IVTreatmentEval,
  },
  {
    path: '/dry-weight-confirm',
    name: 'DryWeightConfirm',
    component: DryWeightConfirm,
  },
  {
    path: '/stability-confirm',
    name: 'StabilityConfirm',
    component: StabilityConfirm,
  },
  {
    path: '/diuretics-warning',
    name: 'DiureticsWarning',
    component: DiureticsWarning,
  },
  {
    path: '/iv-treatment-2',
    name: 'IVTreatment2',
    component: IVTreatment2,
  },
  {
    path: '/completion-plan',
    name: 'CompletionPlan',
    component: CompletionPlan,
  },
  {
    path: '/treatment-complete',
    name: 'TreatmentComplete',
    component: TreatmentComplete,
  },
  {
    path: '/bva-data',
    name: 'BVAData',
    component: BVAData,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
