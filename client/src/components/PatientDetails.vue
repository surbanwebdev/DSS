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
        <!-- UPDATE PATIENT MODAL LAUNCH -->
        <button
          type="submit"
          class="btn btn-primary mt-3"
          data-bs-toggle="modal"
          data-bs-target="#updatePatientModal"
        >
          Edit Patient Details
        </button>
        <!-- UPDATE PATIENT MODAL -->
        <div
          class="modal fade"
          id="updatePatientModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="updatePatientModalLabel"
          aria-hidden="true"
        >
          <h1>Update the patient</h1>
        </div>
        <!-- <div
          class="modal fade"
          id="updatePatientModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="updatePatientModalLabel"
          aria-hidden="true"
        >
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
              <label class="form-label" for="tbv-deviation"
                >TBV Deviation</label
              >
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
        </div> -->
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
    updatePatient: async function () {
      const context = this;
      const endpoint = "patient/";
      console.log("Current ID " + context.currentPatientID);
      context.$parent
        .apiCall({
          method: "put",
          data: {
            PatientID: context.currentPatientID,
            Sex: context.patient.Sex,
            Weight: context.patient.Weight,
            Height: context.patient.Height,
            Age: context.patient.Age,
            TBVDeviation: context.patient.TBVDeviation,
            RBCVDeviation: context.patient.RBCVDeviation,
            PVDeviation: context.patient.PVDeviation,
            Phct: context.patient.Phct,
            Nhct: context.patient.Nhct,
            Notes: context.patient.Notes,
          },
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