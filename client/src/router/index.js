import Vue from 'vue'
import VueRouter from 'vue-router'
import Results from '../components/Results.vue'
import SuggestedTreatment from '../components/SuggestedTreatment.vue'
import Choices from '../components/Choices.vue'
import Checklist from '../components/Checklist.vue'
import SymptomSeverity from '../components/SymptomSeverity.vue'
import DailyTreatmentComplete from '../components/DailyTreatmentComplete.vue'
import Post24Checklist from '../components/Post24Checklist.vue'
import IVTreatmentEval from '../components/IVTreatmentEval.vue'
import DryWeightConfirm from '../components/DryWeightConfirm.vue'
import StabilityConfirm from '../components/StabilityConfirm.vue'
import DiureticsWarning from '../components/DiureticsWarning.vue'
import IVTreatment2 from '../components/IVTreatment2.vue'
import CompletionPlan from '../components/CompletionPlan.vue'
import TreatmentComplete from '../components/TreatmentComplete.vue'
import BVAData from '../components/BVAData.vue'
import BVADataConf from '../components/BVADataConf.vue'
import BVADataConf2 from '../components/BVADataConf2.vue'
import InitialHypervolemic from '../components/InitialHypervolemic.vue'
import InitialNonHypervolemic from '../components/InitialNonHypervolemic.vue'
import InitialAnemic from '../components/InitialAnemic.vue'
import InitialPolycythemic from '../components/InitialPolycythemic'
import NonHypervolemicSymptoms from '../components/NonHypervolemicSymptoms.vue'
import Hypotensive from '../components/Hypotensive.vue'
import HypotensivePlan from '../components/HypotensivePlan.vue'
import Edema from '../components/Edema.vue'
import EdemaPlan from '../components/EdemaPlan.vue'
import Renal from '../components/Renal.vue'
import RenalPlan from '../components/RenalPlan.vue'
import DischargePlan from '../components/DischargePlan.vue'
import TargetHct from '../components/TargetHct.vue'
import Patients from '../components/Patients.vue'
import BVASymptoms from '../components/BVASymptoms.vue'
import NewPatient from '../components/NewPatient.vue'
import PatientDetails from '../components/PatientDetails.vue'
import EditPatient from '../components/EditPatient.vue'
import CurrentHct from '../components/CurrentHct.vue'
import ReportSuggestions from '../components/ReportSuggestions.vue'
import ProgressToTarget from '../components/ProgressToTarget.vue'
import ChooseStrategy from '../components/ChooseStrategy.vue'
import ChooseStrategy2 from '../components/ChooseStrategy2.vue'
import BVAHistory from '../components/BVAHistory.vue'
import CongestionResolved from '../components/CongestionResolved.vue'
import TargetHctReached from '../components/TargetHctReached.vue'
import SignsOfStability from '../components/SignsOfStability.vue'
import PreDischargeBVA from '../components/PreDischargeBVA.vue'
import HoldDiuretics from '../components/HoldDiuretics.vue'
import DecisionItems from '../components/DecisionItems.vue'

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
    path: '/symptom-severity',
    name: 'SymptomSeverity',
    component: SymptomSeverity,
  },
  {
    path: '/suggested-treatment/:congestionLevel/:tbvLevel',
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
  {
    path: '/bva-data-conf',
    name: 'BVADataConf',
    component: BVADataConf,
  },
  {
    path: '/bva-data-conf-2/:confirm1/:confirm2',
    name: 'BVADataConf2',
    component: BVADataConf2,
  },
  {
    path: '/initial-hypervolemic',
    name: 'InitialHypervolemic',
    component: InitialHypervolemic,
  },
  {
    path: '/initial-non-hypervolemic',
    name: 'InitialNonHypervolemic',
    component: InitialNonHypervolemic,
  },
  {
    path: '/initial-anemic',
    name: 'InitialAnemic',
    component: InitialAnemic,
  },
  {
    path: '/initial-polycythemic',
    name: 'InitialPolycythemic',
    component: InitialPolycythemic
  },
  {
    path: '/non-hypervolemic-symptoms',
    name: 'NonHypervolemicSymptoms',
    component: NonHypervolemicSymptoms,
  },
  {
    path: '/hypotensive',
    name: 'Hypotensive',
    component: Hypotensive,
  },
  {
    path: '/hypotensive-plan',
    name: 'HypotensivePlan',
    component: HypotensivePlan,
  },
  {
    path: '/edema',
    name: 'Edema',
    component: Edema,
  },
  {
    path: '/edema-plan',
    name: 'EdemaPlan',
    component: EdemaPlan,
  },
  {
    path: '/renal',
    name: 'Renal',
    component: Renal,
  },
  {
    path: '/renal-plan',
    name: 'RenalPlan',
    component: RenalPlan,
  },
  {
    path: '/discharge-plan',
    name: 'DischargePlan',
    component: DischargePlan,
  },
  {
    path: '/target-hct',
    name: 'TargetHct',
    component: TargetHct,
  },
  {
    path: '/patients',
    name: 'Patients',
    component: Patients,
  },
  {
    path: '/bva-symptoms',
    name: 'BVASymptoms',
    component: BVASymptoms,
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
  },
  {
    path: '/new-patient',
    name: 'NewPatient',
    component: NewPatient,
  },
  {
    path: '/patient-details',
    name: 'PatientDetails',
    component: PatientDetails,
  },
  {
    path: '/edit-patient',
    name: 'EditPatient',
    component: EditPatient,
  },
  {
    path: '/current-hct',
    name: 'CurrentHct',
    component: CurrentHct,
  },
  {
    path: '/report-suggestions',
    name: 'ReportSuggestions',
    component: ReportSuggestions,
  },
  {
    path: '/progress-to-target',
    name: 'ProgressToTarget',
    component: ProgressToTarget,
  },
  {
    path: '/choose-strategy',
    name: 'ChooseStrategy',
    component: ChooseStrategy,
  },
  {
    path: '/choose-strategy-2',
    name: 'ChooseStrategy2',
    component: ChooseStrategy2,
  },
  {
    path: '/bva-history',
    name: 'BVAHistory',
    component: BVAHistory,
  },
  {
    path: '/congestion-resolved',
    name: 'CongestionResolved',
    component: CongestionResolved,
  },
  {
    path: '/target-hct-reached',
    name: 'TargetHctReached',
    component: TargetHctReached,
  },
  {
    path: '/signs-of-stability',
    name: 'SignsOfStability',
    component: SignsOfStability,
  },
  {
    path: '/pre-discharge-bva',
    name: 'PreDischargeBVA',
    component: PreDischargeBVA,
  },
  {
    path: '/hold-diuretics',
    name: 'HoldDiuretics',
    component: HoldDiuretics,
  },
  {
    path: '/decision-items',
    name: 'DecisionItems',
    component: DecisionItems,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
