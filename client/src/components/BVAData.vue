<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <div class="container-md">
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
              id="pv"
              @focus="$event.target.select()"
              v-model.number="pv"
              type="number"
              class="form-control"
              placeholder="PV Deviation %"
              required
            />
            <label class="form-label" for="pv">PV Deviation %</label>
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
          <div class="d-flex justify-content-center" v-if="validateBvaValues">
            <router-link
              :to="{
                name: 'BVADataConf',
              }"
            >
              <input class="btn btn-primary mt-3 rounded" value="Submit" />
            </router-link>
          </div>
          <div class="d-flex justify-content-center" v-else>
            <input
              class="btn btn-primary disabled mt-3 rounded"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      currentPatientID: this.$store.state.currentPatientID,
    };
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
    pv: {
      get: function () {
        return this.$store.state.pv;
      },
      set: function (newPv) {
        this.$store.dispatch("setPv", newPv);
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
      var pvGood = this.pv || this.pv === 0;
      return tvbGood && rbcvGood && nhctGood && pvGood;
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
  top: 38px;
}

textarea#notes {
  border: none;
  background-color: #ededed;
}
</style>
