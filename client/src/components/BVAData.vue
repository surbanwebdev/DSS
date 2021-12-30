<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
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
              id="tbv"
              @focus="$event.target.select()"
              v-model.number="tbv"
              type="number"
              class="form-control"
              placeholder="TBV Deviation %"
              autofocus="true"
              required
            />
            <label class="form-label" for="tbv">TBV Deviation %</label>
          </div>
          <div class="form-group">
            <input
              id="rbcv"
              @focus="$event.target.select()"
              v-model.number="rbcv"
              type="number"
              class="form-control"
              placeholder="RBCV Deviation %"
              required
            />
            <label class="form-label" for="rbcv">RBCV Deviation %</label>
          </div>
          <div class="form-group">
            <input
              id="pvDeviation"
              @focus="$event.target.select()"
              v-model.number="PVDeviation"
              type="number"
              class="form-control"
              placeholder="PV Deviation %"
              required
            />
            <label class="form-label" for="pvDeviation">PV Deviation %</label>
          </div>
          <div class="form-group">
            <input
              id="phct"
              @focus="$event.target.select()"
              v-model.number="phct"
              type="number"
              class="form-control"
              placeholder="pHct"
              required
            />
            <label class="form-label" for="phct">pHct</label>
          </div>
          <div class="form-group mb-1">
            <input
              id="nhct"
              @focus="$event.target.select()"
              v-model.number="nhct"
              type="number"
              class="form-control"
              placeholder="nHct"
              required
            />
            <label class="form-label" for="nhct">nHct</label>
          </div>
          <div id="textarea-fg" class="form-group mb-1">
            <textarea
              id="notes"
              @focus="$event.target.select()"
              v-model="notes"
              type="text"
              class="form-control"
              placeholder="Notes"
              required
            />
            <label id="notes" class="form-label" for="notes">Notes</label>
          </div>
          <div v-if="validateBvaValues">
            <router-link
              :to="{
                name: 'BVADataConf',
              }"
            >
              <button type="submit" class="btn btn-primary" value="Submit">
                Submit
              </button>
            </router-link>
          </div>
          <div v-else>
            <button
              type="submit"
              class="btn btn-primary disabled"
              value="Submit"
            >
              Submit
            </button>
          </div>
        </form>
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
  name: "BVAData",
  // THESE COMPUTED FUNCTIONS WILL ACCESS AND MODIFY THE DATA IN THE STORE
  computed: {
    tbv: {
      get: function () {
        return this.$store.state.tbv;
      },
      set: function (newTbv) {
        this.$store.dispatch("setTbv", newTbv);
      },
    },
    rbcv: {
      get: function () {
        return this.$store.state.rbcv;
      },
      set: function (newRbcv) {
        this.$store.dispatch("setRbcv", newRbcv);
      },
    },
    nhct: {
      get: function () {
        return this.$store.state.nhct;
      },
      set: function (newNhct) {
        this.$store.dispatch("setNhct", newNhct);
      },
    },
    validateBvaValues: function () {
      var tvbGood = this.tbv || this.tbv === 0;
      var rbcvGood = this.rbcv || this.rbcv === 0;
      var nhctGood = this.nhct || this.nhct === 0;
      return tvbGood && rbcvGood && nhctGood;
    },
  },
  // methods: {
  //   updateTbv: function (tbv) {
  //     this.$store.commit("setTbv", tbv);
  //   },
  //   updateRbcv: function (value) {
  //     this.$store.commit("setRbcv", value);
  //   },
  //   updateNhct: function (value) {
  //     this.$store.commit("setNhct", value);
  //   },
  // },
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
  color: #979797;
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

/* VALIDATION STYLES */
.error-list {
  list-style-type: none;
  color: red;
  padding: 0;
}

#textarea-fg {
  position: relative;
}

label#notes {
  position: absolute;
  top: 46px;
}

textarea#notes {
  border: none;
  background-color: #ededed;
}
</style>
