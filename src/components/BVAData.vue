<template>
  <div>
    <Navigation />
    <div class="container mt-2">
      <p class="treatment-group my-2">Treatment Group: BVA Guided Care</p>
      <div class="card p-3">
        <div class="title-wrap d-flex align-items-center mb-2"></div>
        <p class="bold-heading mb-3">BVA-Assessment Data Entry</p>
        <p class="mb-2">
          Enter deviations from ideal values as noted in BVA report in
          Excess/Deficit column.
        </p>
        <p class="mb-2">
          Make sure to include minus signs (-) for negative deviations.
        </p>
        <router-link
          :to="{
            name: 'DailyTreatmentComplete',
          }"
        >
          <form>
            <div class="form-group mb-4">
              <input
                class="form-control"
                id="tbv"
                placeholder="TBV Deviation %"
              />
            </div>
            <div class="form-group mb-4">
              <input
                class="form-control"
                id="rbcv"
                placeholder="RBCV Deviation %"
              />
            </div>
            <div class="form-group mb-5">
              <input
                class="form-control"
                id="hct"
                placeholder="Normalized Hct (nHct)"
              />
            </div>
          </form>
          <button type="submit" class="btn btn-primary">
            Submit Evaluation
          </button>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
  },
  name: "SuggestedTreatment",
  data: function () {
    return {
      congestionLevel: this.$route.params.congestionLevel,
    };
  },
};
</script>

<style scoped>
.card {
  border: none;
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

svg {
  margin-right: 0.75rem;
}
</style>
