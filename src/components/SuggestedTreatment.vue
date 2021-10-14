<template>
  <div>
    <Navigation />
    <div class="container mt-2">
      <p class="treatment-group my-2">Treatment Group: Standard Care</p>
      <div class="card p-3">
        <h4 class="blue-heading">Suggested Treatment</h4>
        <div v-if="congestionLevel == 'low'">
          <p class="bold-heading">Low to moderate congestion</p>
          <p>
            Prescribe 1x outpatient oral dose by continuous infusion or q12 hr
            IV bolus.
          </p>
          <p>Reevaluate in 24 hours.</p>
        </div>
        <div v-if="congestionLevel == 'high'">
          <p class="bold-heading">High congestion</p>
          <p>
            Prescribe 2.5x outpatient oral dose by continuous infusion or q12 hr
            IV bolus.
          </p>
          <p>Reevaluate in 24 hours.</p>
        </div>
        <router-link
          :to="{
            name: 'DailyTreatmentComplete',
          }"
        >
          <button type="submit" class="btn btn-primary mt-3">
            Acknowledge Suggestion
          </button>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer,
  },
  name: 'SuggestedTreatment',
  data: function () {
    return {
      congestionLevel: this.$route.params.congestionLevel,
    }
  },
}
</script>

<style scoped>
.card {
  border: none;
  border-top: 1rem solid #456bb1;
  background: #fff;
  text-align: left;
}

.card > p,
.treatment-group {
  margin-bottom: 0;
}

.treatment-group {
  text-align: right;
  font-size: 0.875rem;
}

.button-wrap {
  width: 100%;
}

.radio-box {
  width: 100%;
  padding: 1.5rem 1rem;
  border: 1px solid #979797;
  border-radius: 0.25rem;
}

.blue-heading {
}

svg {
  margin-right: 0.75rem;
}
</style>
