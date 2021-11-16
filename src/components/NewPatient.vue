<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <div class="card p-3">
        <div class="title-wrap d-flex align-items-center mb-2"></div>
        <p class="bold-heading mb-3">Add a New Patient</p>
        <form>
          <div class="form-group">
            <input
              id="firstName"
              @focus="$event.target.select()"
              v-model="firstName"
              class="form-control"
              placeholder="First Name"
              autofocus="true"
              required
            />
            <label class="form-label" for="firstName">First Name</label>
          </div>
          <div class="form-group">
            <input
              id="lastName"
              @focus="$event.target.select()"
              v-model="lastName"
              class="form-control"
              placeholder="Last Name"
              required
            />
            <label class="form-label" for="lastName">Last Name</label>
          </div>
          <div class="form-group mb-1">
            <select name="sex" id="sex" class="form-control" placeholder="Sex">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label class="form-label" for="sex">Sex</label>
          </div>
          <div class="form-group">
            <input
              id="weight"
              @focus="$event.target.select()"
              v-model.number="weight"
              class="form-control"
              placeholder="Weight (kg)"
              required
            />
            <label class="form-label" for="lastName">Weight</label>
          </div>
          <div class="form-group">
            <input
              id="height"
              @focus="$event.target.select()"
              v-model.number="height"
              class="form-control"
              placeholder="Height (cm)"
              required
            />
            <label class="form-label" for="lastName">Height</label>
          </div>
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
          <div class="form-group mb-1">
            <input
              id="nhct"
              @focus="$event.target.select()"
              v-model.number="nhct"
              type="number"
              class="form-control"
              placeholder="Normalized Hct (nHct)"
              required
            />
            <label class="form-label" for="nhct">Normalized Hct (nhct)</label>
          </div>
          <div class="form-group mb-1">
            <input
              id="pv"
              @focus="$event.target.select()"
              v-model.number="pv"
              type="number"
              class="form-control"
              placeholder="Plasma Volume (PV)"
              required
            />
            <label class="form-label" for="nhct">Plasma Volume (PV)</label>
          </div>
          <button type="submit" class="btn btn-primary" value="Submit">
            Submit
          </button>
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
  name: "NewPatient",
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

select {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #979797;
  width: 100%;
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
</style>
