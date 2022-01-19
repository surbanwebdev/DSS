<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container-md mt-5">
      <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      <div class="card p-3">
        <p class="bold-heading mb-1">24 Reevaluation</p>
        <p class="bold-heading indent mb-1">
          What symptoms of congestion are present?
        </p>
        <div class="triple-indent mb-2">
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="dyspnea"
            />
            <label class="form-check-label" for="dyspnea"> Dyspnea </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="orthopnea"
            />
            <label class="form-check-label" for="orthopnea"> Orthopnea </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="edema"
            />
            <label class="form-check-label" for="edema"> Edema </label>
          </div>
        </div>
        <p class="bold-heading indent mb-1">
          What signs of congestion are present?
        </p>
        <div class="triple-indent">
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="rales"
            />
            <label class="form-check-label" for="rales"> Rales </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="peripheralEdema"
            />
            <label class="form-check-label" for="peripheralEdema">
              Peripheral Edema
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="ascites"
            />
            <label class="form-check-label" for="ascites"> Ascites </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" id="pvc" />
            <label class="form-check-label" for="pvc">
              Pulmonary Vascular Congestion on Chest Radiography
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" id="jvp" />
            <label class="form-check-label" for="jvp">
              Jugular Venous Pressure (JVP)
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="orthopnea2"
            />
            <label class="form-check-label" for="orthopnea2"> Orthopnea </label>
          </div>
        </div>
        <router-link :to="{ name: 'ProgressToTarget' }">
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
export default {
  name: "Post24Checklist",
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
