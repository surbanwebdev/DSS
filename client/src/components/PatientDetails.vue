<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <div class="container mt-5">
      <div class="card p-3">
        <p class="bold-heading mb-4">Patient Details:</p>
        <table class="table table-striped mb-0">
          <tbody>
            <tr>
              <td>
                <div
                  v-if="!editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">Patient:</div>
                  <div class="content-right">{{ currentPatientID }}</div>
                </div>
                <div
                  v-if="editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
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
                  v-if="!editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">Sex:</div>
                  <div class="content-right">{{ patient.Sex }}</div>
                </div>
                <div
                  v-if="editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  Sex:
                  <select class="text-center" v-model="patient.Sex">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  v-if="!editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">Weight:</div>
                  <div class="content-right">{{ patient.Weight }} kg</div>
                </div>
                <div
                  v-if="editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  Weight (kg):
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
                  v-if="!editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">Height:</div>
                  <div class="content-right">{{ patient.Height }} cm</div>
                </div>
                <div
                  v-if="editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  Height (cm):
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
                  v-if="!editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">Age:</div>
                  <div class="content-right">{{ patient.Age }}</div>
                </div>
                <div
                  v-if="editMode"
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
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
        <div
          v-if="!editMode"
          class="d-flex justify-content-between align-items-baseline"
        >
          <button class="btn btn-primary my-3" v-on:click="toggleEditMode()">
            Edit Patient Details
          </button>
        </div>
        <div
          v-if="editMode"
          class="
            d-flex
            justify-content-between
            align-items-baseline
            button-wrap
            py-3
          "
        >
          <button class="btn btn-secondary mt-3" v-on:click="toggleEditMode()">
            Cancel
          </button>
          <button class="btn btn-primary mt-3" v-on:click="updatePatient()">
            Save
          </button>
        </div>

        <router-link
          class="mb-3"
          :to="{
            name: 'BVAData',
          }"
        >
          <button class="btn btn-primary">Enter New BVA Details</button>
        </router-link>

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
        <!-- END DELETE MODAL -->
      </div>
    </div>
    <div class="treatment-btn container"></div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "PatientDetails",
  data: function () {
    return {
      currentPatientID: this.$store.state.currentPatientID,
      patient: "",
      tPatient: "",
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

select {
  width: 295px;
  background-color: #fff;
}

.button-wrap > button {
  width: 240px;
}
</style>