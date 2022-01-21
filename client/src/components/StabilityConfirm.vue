<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container-md mt-5">
      <div
        class="
          container-header
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <div
          @click="goBack"
          class="d-flex justify-content-start align-items-center"
        >
          <font-awesome-icon icon="arrow-circle-left" class="mx-2" />
          <p class="treatment-group my-2">Back</p>
        </div>
        <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      </div>
      <div class="card p-3">
        <p class="bold-heading mb-1">Stability Evaluation</p>
        <p class="mb-2">Select the signs of stability that are present:</p>
        <div class="triple-indent mb-2">
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="option-a"
            />
            <label
              class="form-check-label"
              for="option-a"
              @click="optionA = !optionA"
            >
              Serum creatinine(sCR) stable at level 1.0 mg/dL above baseline at
              start of IV diuretic treatment
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="option-b"
            />
            <label
              class="form-check-label"
              for="option-b"
              @click="optionB = !optionB"
            >
              Hemodynamics (HD) stable
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="option-c"
            />
            <label
              class="form-check-label"
              for="option-c"
              @click="optionC = !optionC"
            >
              Urine Output (UO) stable
            </label>
          </div>
        </div>
        <div v-if="optionA && optionB && optionC">
          <router-link :to="{ name: 'CompletionPlan' }">
            <button type="submit" class="btn btn-primary mt-3">
              Submit Evaluation
            </button>
          </router-link>
        </div>
        <div v-else>
          <router-link :to="{ name: 'DiureticsWarning' }">
            <button type="submit" class="btn btn-primary mt-3">
              Submit Evaluation
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "StabilityConfirm",
  data: function () {
    return {
      optionA: false,
      optionB: false,
      optionC: false,
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
