<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container-md mt-5">
      <div class="card p-3">
        <div class="title-wrap d-flex align-items-center mb-2"></div>
        <p class="bold-heading mb-3">Add a New Patient</p>
        <form>
          <div class="form-group">
            <input
              id="patientID"
              @focus="$event.target.select()"
              v-model="patientID"
              class="form-control"
              placeholder="PatientId"
              autofocus="true"
              required
            />
            <label class="form-label" for="patientId">Patient ID</label>
          </div>
          <div class="form-group mb-1">
            <select
              name="sex"
              id="sex"
              class="form-control"
              placeholder="Sex"
              v-model="sex"
            >
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
            <label class="form-label" for="weight">Weight</label>
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
            <label class="form-label" for="height">Height</label>
          </div>
          <div class="form-group">
            <input
              id="age"
              @focus="$event.target.select()"
              v-model.number="age"
              class="form-control"
              placeholder="Age"
              required
            />
            <label class="form-label" for="age">Age</label>
          </div>
          <div class="form-group">
            <input
              id="tbv-deviation"
              @focus="$event.target.select()"
              v-model.number="tbvDeviation"
              class="form-control"
              placeholder="TBV Deviation"
              required
            />
            <label class="form-label" for="tbv-deviation">TBV Deviation</label>
          </div>
          <div class="form-group">
            <input
              id="rbcv-deviation"
              @focus="$event.target.select()"
              v-model.number="rbcvDeviation"
              class="form-control"
              placeholder="RBCV Deviation"
              required
            />
            <label class="form-label" for="rbcv-deviation"
              >RBCV Deviation</label
            >
          </div>
          <div class="form-group">
            <input
              id="pv-deviation"
              @focus="$event.target.select()"
              v-model.number="pvDeviation"
              class="form-control"
              placeholder="PV Deviation"
              required
            />
            <label class="form-label" for="pv-deviation">PV Deviation</label>
          </div>
          <div class="form-group">
            <input
              id="phct"
              @focus="$event.target.select()"
              v-model.number="phct"
              class="form-control"
              placeholder="PHCT"
              required
            />
            <label class="form-label" for="phct">PHCT</label>
          </div>
          <div class="form-group">
            <input
              id="nhct"
              @focus="$event.target.select()"
              v-model.number="nhct"
              class="form-control"
              placeholder="NHCT"
              required
            />
            <label class="form-label" for="nhct">NHCT</label>
          </div>
          <div class="form-group">
            <input
              id="notes"
              @focus="$event.target.select()"
              v-model.number="notes"
              class="form-control"
              placeholder="Notes"
              required
            />
            <label class="form-label" for="notes">Notes</label>
          </div>
          <div>
            <input
              type="button"
              class="btn btn-primary"
              value="Cancel"
              v-on:click="cancel"
              style="float: left"
            />
            <input
              type="button"
              class="btn btn-primary"
              value="Submit"
              v-on:click="addNewPatient"
              style="float: right"
            />
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import router from "../router";
import _ from "lodash";

export default {
  data: function () {
    return {
      patientID: "",
      sex: "male",
      weight: 0,
      height: 0,
      age: null,
      tbvDeviation: 0,
      rbcvDeviation: 0,
      pvDeviation: 0,
      phct: 0,
      nhct: 0,
      notes: "",
    };
  },
  name: "NewPatient",
  // THESE COMPUTED FUNCTIONS WILL ACCESS AND MODIFY THE DATA IN THE STORE
  computed: {},
  methods: {
    validate: function () {
      let context = this;
      if (_.trim(context.patientID) === "") {
        context.$parent.onFail("Patient ID must not be empty");
        return false;
      }
      if (context.weight === 0) {
        context.$parent.onFail("Patient weight must not be 0");
        return false;
      }
      if (context.height === 0) {
        context.$parent.onFail("Patient height must not be 0");
        return false;
      }
      if (context.age === 0) {
        context.$parent.onFail("Patient age must not be 0");
        return false;
      }
      return true;
    },
    cancel: function () {
      router.back();
    },
    addNewPatient: function () {
      const context = this;
      if (!context.validate()) {
        return;
      }
      this.$parent
        .apiCall({
          method: "post",
          endpoint: "patient",
          data: {
            patientID: context.patientID,
            sex: context.sex,
            weight: context.weight,
            height: context.height,
            age: context.age,
            tbvDeviation: context.tbvDeviation,
            rbcvDeviation: context.rbcvDeviation,
            pvDeviation: context.pvDeviation,
            phct: context.phct,
            nhct: context.nhct,
            notes: context.notes,
          },
        })
        .then((res) => {
          console.log("RES", res);
          context.$parent.onSuccess("Patient Created");
          router.push("patients");
        })
        .catch((err) => {
          console.error("ERR", err);
          context.$parent.onFail(err.response.statusText);
        });
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
