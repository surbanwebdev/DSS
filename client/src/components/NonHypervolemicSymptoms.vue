 <template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container">
      <p class="treatment-group my-2">Treatment Group: BVA-Guided Care</p>
      <div class="card p-3">
        <p class="bold-heading mb-3">
          Does the patient has any of the following symptoms?
        </p>

        <div class="form-check">
          <label
            class="form-check-label d-flex justify-content-between py-2 px-0"
            for="hypertension"
          >
            Hypertension
            <input class="form-check-input" type="checkbox" id="hypertension" />
          </label>
        </div>
        <hr />
        <div class="form-check">
          <label
            class="form-check-label d-flex justify-content-between py-2 px-0"
            for="hypotension"
          >
            Hypotension
            <input class="form-check-input" type="checkbox" id="hypotension" />
          </label>
        </div>
        <hr />
        <div class="form-check">
          <label
            class="form-check-label d-flex justify-content-between py-2 px-0"
            for="edemic"
          >
            Edemic
            <input class="form-check-input" type="checkbox" id="edemic" />
          </label>
        </div>
        <hr />
        <div class="form-check">
          <label
            class="form-check-label d-flex justify-content-between py-2 px-0"
            for="renal"
          >
            Worsening Renal Function
            <input class="form-check-input" type="checkbox" id="renal" />
          </label>
        </div>

        <div class="assessment-btn">
          <router-link
            :to="{
              name: 'HypertensivePlan',
              params: { hypertensionPresent: this.hypertensionPresent },
            }"
          >
            <button type="submit" class="btn btn-primary mt-3">
              Submit Assessment
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
  name: "NonHypervolemicSymptoms",
  data: function () {
    return {
      symHypotension: this.$store.state.symHypotension,
      symEdemic: this.$store.state.symEdemic,
      symRenal: this.$store.state.symRenal,
    };
  },
  computed: {
    symHypertension: {
      get: function () {
        return this.$store.state.symHypertension;
      },
      set: function (newHypertension) {
        this.$store.dispatch("setHypertension", newHypertension);
      },
    },
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
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #979797;
}

svg {
  margin-right: 0.75rem;
}
</style>
