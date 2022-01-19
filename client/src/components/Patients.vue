<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <div class="container mt-5">
      <router-link
        class="mb-3 d-flex justify-content-end"
        :to="{
          name: 'NewPatient',
        }"
      >
        <div class="d-flex align-items-center">
          <font-awesome-icon icon="plus-square" class="mx-2" />
          New Patient
        </div>
      </router-link>
      <p class="bold-heading mb-4 text-start">Select a Patient:</p>

      <div class="container p-0">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div v-for="patient in patients" :key="patient.pid">
            <div class="col">
              <router-link
                :to="{
                  name: 'PatientDetails',
                }"
              >
                <div
                  v-on:click="
                    updateCurrentPatient(patient.PatientID, patient.Sex)
                  "
                >
                  <div
                    class="
                      p-3
                      rounded
                      bg-white
                      d-flex
                      justify-content-around
                      align-items-center
                    "
                  >
                    ID:
                    {{ patient.PatientID }}
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="treatment-btn container"></div>
    <Footer />
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "Patients",
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
    updateCurrentPatient: function (id, sex) {
      this.$store.dispatch("setCurrentPatientID", id);
      this.$store.dispatch("setCurrentPatientSex", sex);
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

.content-wrap {
  width: 100%;
}

h4 {
  color: gray;
}

.item:last-child > .divider {
  display: none;
}

table {
  width: 100%;
}

.table-wrap {
  background-color: #fff;
  border-radius: 0.25rem;
}

tbody {
  border-bottom: 2px solid #ededed;
}
</style>
