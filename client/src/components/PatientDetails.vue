<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <div class="card p-3">
        <p class="bold-heading mb-4">Patient Details:</p>
        <table class="table table-striped">
          <tbody>
            <tr>
              <td>
                Patient:
                {{ currentPatientID }}
              </td>
            </tr>
            <tr>
              <td>
                Sex:
                {{ patient.Sex }}
              </td>
            </tr>
            <tr>
              <td>
                Weight:
                {{ patient.Weight }}
              </td>
            </tr>
            <tr>
              <td>
                Height:
                {{ patient.Height }}
              </td>
            </tr>
            <tr>
              <td>
                Age:
                {{ patient.Age }}
              </td>
            </tr>
            <tr>
              <td>
                TBV Deviation %:
                {{ patient.TBVDeviation }}
              </td>
            </tr>
            <tr>
              <td>
                RBCV Deviation %:
                {{ patient.RBCVDeviation }}
              </td>
            </tr>
            <tr>
              <td>
                PV Deviation %:
                {{ patient.PVDeviation }}
              </td>
            </tr>
            <tr>
              <td>
                PHCT:
                {{ patient.Phct }}
              </td>
            </tr>
            <tr>
              <td>
                NHCT:
                {{ patient.Nhct }}
              </td>
            </tr>
            <tr>
              <td>
                Notes:
                {{ patient.Notes }}
              </td>
            </tr>
          </tbody>
        </table>
        <router-link
          class="mb-3"
          :to="{
            name: '',
          }"
        >
          <button type="submit" class="btn btn-primary mt-3">
            Edit Patient Details
          </button>
        </router-link>
        <router-link
          class="mb-3"
          :to="{
            name: 'BVAData',
          }"
        >
          <button type="submit" class="btn btn-primary mt-3">
            Enter New BVA Data
          </button>
        </router-link>
        <!-- OPENS PATIENT DELETION MODAL -->
        <button
          class="btn btn-outline-danger mt-3"
          data-bs-toggle="modal"
          data-bs-target="#confirmDeleteModal"
        >
          Delete Patient
        </button>
        <div
          class="modal fade"
          id="confirmDeleteModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Confirm deletion
                </h5>
              </div>
              <div class="modal-body" v-if="isPatientDeleted">
                Patient has been deleted!
              </div>
              <div class="modal-body" v-else>
                Are you sure you would like to delete all patient records for
                Patient: <strong>{{ currentPatientID }}</strong
                >?
              </div>
              <div class="modal-footer" v-if="isPatientDeleted">
                <router-link
                  class="mb-3"
                  :to="{
                    name: 'Patients',
                  }"
                >
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Return to patients
                  </button>
                </router-link>
              </div>
              <div class="modal-footer" v-else>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="deletePatient"
                >
                  Delete Patient
                </button>
              </div>
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
import Navigation from "./Navigation";
import Footer from "./Footer";
import _ from "lodash";

export default {
  name: "PatientDetails",
  components: {
    Navigation,
    Footer,
  },
  data: function () {
    return {
      currentPatientID: this.$store.state.currentPatientID,
      patient: null,
      isPatientDeleted: false,
    };
  },
  methods: {
    loadPatient: async function () {
      const context = this;
      const endpoint = "patient/";
      console.log("Current ID " + context.currentPatientID);
      context.$parent
        .apiCall({
          method: "get",
          data: { patientID: context.currentPatientID },
          endpoint,
        })
        .then((res) => {
          let patient = _.get(res, "data.patient", []);
          console.log("PATIENT", patient);
          context.patient = patient;
        })
        .catch((err) => {
          console.error(err);
          context.$parent.onFail(err.message);
        });
    },
    deletePatient: async function () {
      const context = this;
      const endpoint = "patient/";
      console.log("Current ID " + context.currentPatientID);
      context.$parent
        .apiCall({
          method: "delete",
          data: { patientID: context.currentPatientID },
          endpoint,
        })
        .then((res) => {
          let patient = _.get(res, "data.patient", []);
          console.log("PATIENT", patient);
          context.patient = patient;
          context.isPatientDeleted = true;
        })
        .catch((err) => {
          console.error(err);
          context.$parent.onFail(err.message);
        });
    },
  },
  created() {
    this.loadPatient();
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

.container.test {
  border: 2px solid salmon;
}

.green-box {
  background-color: blueviolet;
  display: inline-block;
  height: 2em;
  width: 2em;
}
</style>
