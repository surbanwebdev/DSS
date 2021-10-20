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
        <p class="mb-4">
          Make sure to include minus signs (-) for negative deviations.
        </p>
        <form>
          <div class="form-group">
            <input
              class="form-control"
              id="tbv"
              placeholder="TBV Deviation %"
            />
            <label class="form-label" for="tbv">TBV Deviation %</label>
          </div>
          <div class="form-group">
            <input
              class="form-control"
              id="rbcv"
              placeholder="RBCV Deviation %"
            />
            <label class="form-label" for="rbcv">RBCV Deviation %</label>
          </div>
          <div class="form-group mb-1">
            <input
              class="form-control"
              id="hct"
              placeholder="Normalized Hct (nHct)"
            />
            <label class="form-label" for="hct">Normalized Hct (nHct)</label>
          </div>
        </form>
        <router-link
          :to="{
            name: 'BVADataConf',
          }"
        >
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
  methods: {},
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

.form-group {
  transition: all 0.3s;
}

input {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #979797;
  padding-bottom: 0.0875rem;
}

.form-label {
  font-size: 1rem;
  margin-left: 0.5rem;
  color: #aaa;
  opacity: 1;
  transform: translateY(-1.9rem);
  transform-origin: -1.5em -1.75em;
  transition: all 0.3s;
}

.form-control::placeholder {
  color: transparent;
}

.form-control:focus {
  outline: none;
  box-shadow: none;
}

.form-control:focus + .form-label,
.form-control:not(:placeholder-shown) + .form-label {
  transform: translateY(-2.5em) scale(0.75);
}

.form-control:focus-within {
  transform: scale(1.025, 1.025);
}
</style>
