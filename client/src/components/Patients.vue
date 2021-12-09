<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <div class="card p-3">
        <p class="bold-heading mb-4">Select a Patient:</p>
        <ul class="list-group">
          <li class="mb-2" v-for="patient in patients" :key="patient.pid">
            <div class="content-wrap d-flex justify-content-around">
              <div class="content-left">
                Patient ID: {{ patient.PatientID }} <br />
                Sex: {{ patient.Sex }} <br />
              </div>
              <div class="content-right">
                Weight: {{ patient.Weight }} <br />
                Height: {{ patient.Height }} <br />
              </div>
            </div>
            <router-link
              class="mb-3"
              :to="{
                name: 'PatientDetails',
              }"
            >
              <button
                type="submit"
                class="btn btn-primary mt-3"
                v-on:click="updateCurrentPatient(patient.PatientID)"
              >
                View Patient
              </button>
            </router-link>
            <hr />
          </li>
        </ul>
      </div>
      <p class="my-4">OR</p>
      <div class="card p-3">
        <router-link
          class="mb-3"
          :to="{
            name: 'NewPatient',
          }"
        >
          <button type="submit" class="btn btn-primary mt-3">
            Add a New Patient
          </button>
        </router-link>
      </div>
    </div>
    <div class="treatment-btn container"></div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
import _ from "lodash";

export default {
  name: "Patients",
  components: {
    Navigation,
    Footer,
  },
  data: function () {
    return {
      patients: [],
    };
  },

  methods: {
    calculateTargethct: function () {
      var calculated = this.nhct * 1.1;
      this.thct = calculated.toFixed(2);
    },
    updateCurrentPatient: function (id) {
      this.$store.dispatch("setCurrentPatientID", id);
    },
    loadPatients: async function () {
      const context = this;
      const endpoint = "patient/getAll";
      context.$parent
        .apiCall({
          method: "get",
          endpoint,
        })
        .then((res) => {
          let patients = _.get(res, "data.patients", []);
          console.log("PATIENTS", patients);
          context.patients = patients;
        })
        .catch((err) => {
          console.error(err);
          context.$parent.onFail(err.message);
        });
    },
  },
  created() {
    this.calculateTargethct();
    this.loadPatients();
  },
};
</script>

<style scoped>
.card {
  border: none;
  background: #fff;
  text-align: left;
}

ul {
  list-style: none;
}

.list-group {
  overflow-y: scroll;
  max-height: 450px;
}

.content-wrap {
  width: 100%;
}

.content-left,
.content-right {
}
</style>
