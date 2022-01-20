/* eslint-env jquery */
<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container-md">
      <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      <div class="card p-3">
        <p class="bold-heading mb-1">Initial treatment for hypervolmia</p>
        <p class="bold-heading indent mb-1">
          What symptoms of congestion are present?
        </p>
        <div class="triple-indent mb-2">
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="Dyspnea"
              id="dyspnea"
            />
            <label id="lbltxt1" class="form-check-label" for="dyspnea">
              Dyspnea
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="Orthopnea"
              id="orthopnea"
            />
            <label id="lbltxt2" class="form-check-label" for="orthopnea">
              Orthopnea
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="Edema"
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
              value="Rales"
              id="rales"
            />
            <label class="form-check-label" for="rales"> Rales </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="Peripheral edema"
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
              value="Ascites"
              id="ascites"
            />
            <label class="form-check-label" for="ascites"> Ascites </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="Pulmonary Vascular Congestion on Chest Radiography"
              id="pvc"
            />
            <label class="form-check-label" for="pvc">
              Pulmonary Vascular Congestion on Chest Radiography
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="Jugular Venous Pressure (JVP)"
              id="jvp"
            />
            <label class="form-check-label" for="jvp">
              Jugular Venous Pressure (JVP)
            </label>
          </div>
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="Orthopnea"
              id="orthopnea2"
            />
            <label class="form-check-label" for="orthopnea2"> Orthopnea </label>
          </div>
        </div>
        <router-link
          :to="{
            name: 'SuggestedTreatment',
          }"
        >
          <button
            @click="populateDecisionItems"
            type="submit"
            class="btn btn-primary mt-3"
          >
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
  name: "InitialHypervolemic",
  data: function () {
    return {
      currentPatientID: this.$store.state.currentPatientID,
      tbv: this.$store.state.tbv,
    };
  },
  methods: {
    // TAKES ALL CHECKED INPUTS AND PUSHES TO GLOBAL ARRAY
    populateDecisionItems: function () {
      const context = this;
      $(".form-check-input").each(function (i, obj) {
        if ($(obj).is(":checked")) {
          context.$store.state.decisionItems.push(obj.value);
        }
      });
    },
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
