<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <p class="treatment-group my-2">Treatment Group: Standard Care</p>
      <div class="card p-3">
        <p class="bold-heading mb-2">
          Has best achievable 'dry weight' been reached?
        </p>
        <p class="bold-heading indent mb-2">
          Select the symptoms that are present:
        </p>
        <div class="triple-indent mb-2">
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="option-a"
              v-on:click="optionA = !optionA"
            />
            <label class="form-check-label" for="option-a">
              Hemodynamic evidence of poor tolerance of fluid removal by
              persistent hemodynamic changes or development of pre-renal
              azotemia
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="option-b"
              v-on:click="optionB = !optionB"
            />
            <label class="form-check-label" for="option-b">
              Net negative &#60;1 L/24 h
            </label>
          </div>
        </div>
        <div v-if="optionA && optionB">
          <router-link :to="{ name: 'StabilityConfirm' }">
            <button type="submit" class="btn btn-primary mt-3">
              Submit Symptoms
            </button>
          </router-link>
        </div>
        <div v-else>
          <router-link :to="{ name: 'SelectStrategyTrunc' }">
            <button type="submit" class="btn btn-primary mt-3">
              Submit Symptoms
            </button>
          </router-link>
        </div>
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
  name: "DryWeightConfirm",
  data: function () {
    return {
      optionA: false,
      optionB: false,
    };
  },
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
