<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <div class="container mt-5">
      <router-link
        class="mb-3 d-flex justify-content-end"
        :to="{
          name: 'NewPatient',
        }"
      >
        <input
          type="submit"
          class="btn btn-primary"
          value="Add a New Patient"
        />
      </router-link>
      <p class="bold-heading mb-4 text-start">Select a Patient:</p>
      <div class="table-wrap p-4">
        <table>
          <thead>
            <tr>
              <th class="text-start">Patient ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="py-2" v-for="patient in patients" :key="patient.pid">
            <tr>
              <td class="text-start">
                {{ patient.PatientID }}
              </td>
              <td class="d-flex justify-content-end">
                <router-link
                  class="my-2"
                  :to="{
                    name: 'PatientDetails',
                  }"
                >
                  <div
                    class="my-1"
                    v-on:click="
                      updateCurrentPatient(patient.PatientID, patient.Sex)
                    "
                  >
                    <font-awesome-icon icon="info-circle" />
                  </div>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
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
