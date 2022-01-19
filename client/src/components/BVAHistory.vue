<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <div class="container-md">
      <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      <div class="card p-3">
        <p class="bold-heading mb-3">BVA Historical View</p>
        <table
          class="table table-striped my-3"
          v-for="dataRow in archivedData"
          :key="dataRow.TestID"
        >
          <tbody>
            <div style="width: 100%" class="d-flex justify-content-end">
              <span class="badge bg-light text-dark">{{
                dataRow.TestDate
              }}</span>
            </div>
            <tr>
              <td>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">TBV Deviation:</div>
                  <div class="content-right">{{ dataRow.TBVDeviation }}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">RBCV Deviation:</div>
                  <div class="content-right">{{ dataRow.RBVDeviation }}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">PV Deviation:</div>
                  <div class="content-right">{{ dataRow.PVDeviation }}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">pHct:</div>
                  <div class="content-right">{{ dataRow.PHCT }}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    full-width
                  "
                >
                  <div class="content-left">nHct</div>
                  <div class="content-right">{{ dataRow.NHCT }}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link :to="{ name: 'Patients' }">
          <button type="submit" class="btn btn-primary" value="Submit">
            Go Back
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      currentPatientID: this.$store.state.currentPatientID,
      archivedData: [],
    };
  },
  name: "BVAHistory",
  created: function () {
    this.getAllArchivedTreatments();
  },
  methods: {
    getAllArchivedTreatments() {
      const context = this;
      this.$parent
        .apiCall({
          method: "get",
          endpoint: "patient/getAllArchivedTreatments",
          data: {
            patientID: this.$store.state.currentPatientID,
          },
        })
        .then((res) => {
          context.archivedData = res.data.treatments;
        })
        .catch((err) => {
          console.error("ERR", err);
          context.$parent.onFail(err.response.statusText);
        });
    },
  },
  computed: {},
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
</style>
