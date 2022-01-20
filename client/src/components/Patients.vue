<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <div class="container-md my-5">
      <div class="d-flex justify-content-end">
        <router-link
          :to="{
            name: 'NewPatient',
          }"
        >
          <div class="d-flex align-items-center new-pt-link">
            <font-awesome-icon icon="plus-square" class="mx-2" />
            New Patient
          </div>
        </router-link>
      </div>
      <p class="bold-heading mb-4 text-start">Select a Patient:</p>

      <div class="container p-0">
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
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
                      justify-content-center
                      align-items-center
                    "
                  >
                    <font-awesome-icon icon="notes-medical" class="mx-2" />
                    {{ patient.PatientID }}
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="treatment-btn container">
      <router-link
        :to="{
          name: 'DecisionItems',
        }"
      >
        <div class="d-flex align-items-center new-pt-link">
          <font-awesome-icon icon="plus-square" class="mx-2" />
          Decision Items Component
        </div>
      </router-link>
    </div>
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

svg.mx-2.svg-inline--fa.fa-plus-square.fa-w-14 {
  font-size: 1.375em;
}

.rounded {
  transition-duration: 0.1s;
  border: 2px solid transparent;
}

.rounded:hover {
  box-shadow: 3px 2px 12px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 3px 2px 12px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 2px 12px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.rounded:focus {
  border: 2px solid #22376c;
}

.new-pt-link {
  color: darkgrey;
  transition-duration: 0.1s;
}

.new-pt-link:hover {
  color: #22376c;
  transition-duration: 0.1s;
}
</style>
