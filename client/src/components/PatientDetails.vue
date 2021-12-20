<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <div class="card p-3">
        <p class="bold-heading mb-4">Patient Details:</p>
        <ul class="list-group">
          <li class="mb-2">
            <table class="table table-striped">
              <tr>
                Patient:
                {{
                  currentPatientID
                }}
              </tr>
              <tr>
                Sex:
                {{
                  patient.Sex
                }}
              </tr>
              <tr>
                Weight:
                {{
                  patient.Weight
                }}
              </tr>
              <tr>
                Height:
                {{
                  patient.Height
                }}
              </tr>
              <tr>
                Age:
                {{
                  patient.Age
                }}
              </tr>
              <tr>
                TBV Deviation %:
                {{
                  patient.TBVDeviation
                }}
              </tr>
              <tr>
                RBCV Deviation %:
                {{
                  patient.RBCVDeviation
                }}
              </tr>
              <tr>
                PV Deviation %:
                {{
                  patient.PVDeviation
                }}
              </tr>
              <tr>
                PHCT:
                {{
                  patient.PHCT
                }}
              </tr>
              <tr>
                NHCT:
                {{
                  patient.NHCT
                }}
              </tr>
              <tr>
                Notes:
                {{
                  patient.Notes
                }}
              </tr>
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
            <hr />
          </li>
        </ul>
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
</style>
