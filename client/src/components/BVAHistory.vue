<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <div class="container">
      <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      <div class="card p-3">
        <p class="bold-heading mb-3">BVA Historical View</p>
        <span class="badge bg-light text-dark">12-01-2021</span>
        <table class="table table-striped mb-3">
          <tbody v-for="dataRow in archivedData" :key="dataRow.ID">
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
                  <div class="content-right">2.4%</div>
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
                  <div class="content-right">1%</div>
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
                  <div class="content-right">3.1%</div>
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
                  <div class="content-right">36</div>
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
                  <div class="content-right">41</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <span class="badge bg-light text-dark">12-20-2021</span>
        <table class="table table-striped mb-3">
          <tbody>
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
                  <div class="content-right"></div>
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
                  <div class="content-right"></div>
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
                  <div class="content-right"></div>
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
                  <div class="content-right"></div>
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
                  <div class="content-left">nHct:</div>
                  <div class="content-right"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <span class="badge bg-light text-dark">01-2-2022</span>
        <table class="table table-striped mb-3">
          <tbody>
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
                  <div class="content-right">{{ dataRow.TBV }}</div>
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
                  <div class="content-right">{{ dataRow.RBCV }}</div>
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
                  <div class="content-right"></div>
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
                  <div class="content-right"></div>
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
                  <div class="content-left">nHct:</div>
                  <div class="content-right"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link :to="{ name: '' }">
          <button type="submit" class="btn btn-primary" value="Submit">
            Submit
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
      archivedData: []
    };
  },
  name: "BVAHistory",
  created: function () {
    getAllArchivedTreatments();
  },
  methods:{
    getAllArchivedTreatments(){
      const context = this;
      if (!context.validate()) {
        return;
      }
      this.$parent
        .apiCall({
          method: "post",
          endpoint: "patient/getAllArchivedTreatments",
          data: {
            patientID: context.currentPatientID
          },
        })
        .then((res) => {
          context.archivedData = res.data;
        })
        .catch((err) => {
          console.error("ERR", err);
          context.$parent.onFail(err.response.statusText);
        });
    },
  }
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
