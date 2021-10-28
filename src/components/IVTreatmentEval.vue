<template>
  <div>
    <Navigation />
    <div class="container mt-5">
      <p class="treatment-group my-2">Treatment Group: Standard Care</p>
      <div class="card p-3">
        <p class="bold-heading mb-1">IV Treatment Evaluation</p>
        <p class="mb-2">
          Evaluate all the following criteria for completion of IV loop diuretic
          therapy:
        </p>
        <p class="bold-heading indent mb-2">
          Has congestion resolved, including ALL of the following:
        </p>
        <div class="triple-indent mb-2">
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="dyspnea"
            />
            <label class="form-check-label" for="dyspnea">
              Jugular venous pressure &#60;/=8 cm H20 or deemed appropriate
              level if there is significant right ventricular failure requiring
              increased preload
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="orthopnea"
            />
            <label class="form-check-label" for="orthopnea">
              No orthopnea
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="edema"
            />
            <label class="form-check-label" for="edema">
              Trace or no peripheral edema
            </label>
          </div>
        </div>

        <router-link :to="{ name: 'SelectStrategyTrunc' }">
          <button type="submit" class="btn btn-primary mt-3">
            Submit Evaluation
          </button>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";

export default {
  components: {
    Navigation,
    Footer,
  },
  name: "IVTreatmentEval",
};
</script>

<style scoped>
body {
  background-color: #e5e5e5 !important;
}

img.directions {
  width: 150px;
}

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

.indent {
  padding-left: 0.25rem;
}

.triple-indent {
  padding-left: 0.75rem;
}

.form-check-input[type="checkbox"] {
  border-radius: 0;
}
</style>
