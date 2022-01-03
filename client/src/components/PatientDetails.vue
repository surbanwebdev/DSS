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
                <div
                  class="d-flex justify-content-between align-items-center"
                  v-if="!editMode"
                >
                  <p>Patient:</p>
                  <p>
                    {{ currentPatientID }}
                  </p>
                </div>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                  v-if="editMode"
                >
                  Patient:
                  <input
                    class="text-center"
                    type="text"
                    v-model="currentPatientID"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                  v-if="!editMode"
                >
                  <p>Sex:</p>
                  <p>
                    {{ patient.Sex }}
                  </p>
                </div>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                  v-if="editMode"
                >
                  Sex:
                  <input
                    class="text-center"
                    type="text"
                    v-model="patient.Sex"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                  v-if="!editMode"
                >
                  <p>Weight:</p>
                  <p>
                    {{ patient.Weight }}
                  </p>
                </div>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                  v-if="editMode"
                >
                  Weight:
                  <input
                    class="text-center"
                    type="text"
                    v-model="patient.Weight"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                  v-if="!editMode"
                >
                  <p>Height:</p>
                  <p>
                    {{ patient.Height }}
                  </p>
                </div>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                  v-if="editMode"
                >
                  Height:
                  <input
                    class="text-center"
                    type="text"
                    v-model="patient.Height"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                  v-if="!editMode"
                >
                  <p>Age:</p>
                  <p>
                    {{ patient.Age }}
                  </p>
                </div>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                  v-if="editMode"
                >
                  Age:
                  <input
                    class="text-center"
                    type="text"
                    v-model="patient.Age"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-center" v-if="!editMode">
          <button class="btn btn-primary mt-3" v-on:click="toggleEditMode()">
            Edit Patient Details
          </button>
        </div>
        <div class="d-flex justify-content-between" v-if="editMode">
          <input
            type="button"
            class="btn btn-secondary mt-3"
            v-on:click="toggleEditMode()"
            value="Cancel"
          />
          <input
            type="button"
            class="btn btn-primary mt-3"
            v-on:click="updatePatient()"
            value="Save"
          />
        </div>

        <!-- DELETE PATIENT MODAL LAUNCH -->
        <button
          class="btn btn-outline-danger mt-3"
          data-bs-toggle="modal"
          data-bs-target="#confirmDeleteModal"
        >
          Delete Patient
        </button>
        <!-- DELETE PATIENT MODAL -->
        <div
          class="modal fade"
          id="confirmDeleteModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="confirmDeleteModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="confirmDeleteModalLabel">
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
      tPatient: null,
      editMode: false,
      isPatientDeleted: false,
    };
  },
  methods: {
    toggleEditMode: function () {
      const context = this;
      let tEditMode = !context.editMode;
      if (tEditMode === true) {
        context.tPatient = context.patient; //preserve OG values in case of cancel or fail
      } else {
        context.patient = context.tPatient;
        context.tPatient = {};
      }
      context.editMode = tEditMode;
    },
    loadPatient: async function () {
      const context = this;
      const endpoint = "patient/";
      context.$parent
        .apiCall({
          method: "get",
          data: { patientID: context.currentPatientID },
          endpoint,
        })
        .then((res) => {
          let patient = _.get(res, "data.patient", {});
          let archivedTreatments = _.get(res, "data.archivedTreatments", []);
          console.log("PATIENT", patient);
          console.log("AT", archivedTreatments);
          context.patient = patient;
          context.archivedTreatments = archivedTreatments;
        })
        .catch((err) => {
          console.error(err);
          context.$parent.onFail(err.message);
        });
    },
    deletePatient: async function () {
      const context = this;
      const endpoint = "patient/";
      context.$parent
        .apiCall({
          method: "delete",
          data: { patientID: context.currentPatientID },
          endpoint,
        })
        .then((res) => {
          let patient = _.get(res, "data.patient", []);
          context.patient = patient;
          context.isPatientDeleted = true;
        })
        .catch((err) => {
          console.error(err);
          context.$parent.onFail(err.message);
        });
    },
    updatePatient: async function () {
      const context = this;
      const endpoint = "patient/";
      context.$parent
        .apiCall({
          method: "put",
          data: {
            PatientID: context.currentPatientID,
            Sex: context.patient.Sex,
            Weight: context.patient.Weight,
            Height: context.patient.Height,
            Age: context.patient.Age,
          },
          endpoint,
        })
        .then((res) => {
          context.tPatient = {};
          context.editMode = false;
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

input.text-center {
  max-width: 120px;
}
</style>