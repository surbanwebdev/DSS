<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container">
      <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      <div class="card p-3">
        <table class="table table-striped mb-0">
          <tbody>
            <tr>
              <td class="d-flex justify-content-between align-items-baseline">
                <div class="content-left">Normalized Hematocrit:</div>
                <div class="content-right">
                  {{ nhct }}
                </div>
              </td>
            </tr>
            <tr>
              <td class="d-flex justify-content-between align-items-baseline">
                <div class="content-left">Target Hematocrit:</div>
                <div class="content-right">
                  {{ thct }}
                </div>
              </td>
            </tr>
            <tr>
              <td class="d-flex justify-content-between align-items-baseline">
                <div class="content-left">Distance to Target Hct:</div>
                <div class="content-right">
                  {{ distanceToTarget }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="treatment-btn container">
          <router-link
            v-if="tbv > 10 && pv > 10"
            :to="{
              name: 'InitialHypervolemic',
            }"
          >
            <button type="submit" class="btn btn-primary mt-3">Confirm</button>
          </router-link>
          <router-link
            v-else
            :to="{
              name: 'NonHypervolemicSymptoms',
            }"
          >
            <button type="submit" class="btn btn-primary mt-3">Confirm</button>
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "TargetHct",
  methods: {
    calculateTargethct: function () {
      var calculated = this.nhct * 1.1;
      var preThct = calculated.toFixed(2);
      //  48 POINT CEILING FOR FEMALE AND 49 FOR MALE
      if (this.currentPatientSex == "female" && preThct > 48) {
        this.thct = 48;
      } else if (this.currentPatientSex == "male" && preThct > 49) {
        this.thct = 49;
      } else {
        this.thct = preThct;
      }
    },
    calculateDistanceToTarget: function () {
      var calculated = this.thct - this.nhct;
      this.distanceToTarget = calculated.toFixed(2);
    },
  },
  created() {
    this.calculateTargethct();
    this.calculateDistanceToTarget();
  },
  data: function () {
    return {
      currentPatientID: this.$store.state.currentPatientID,
      currentPatientSex: this.$store.state.currentPatientSex,
      distanceToTarget: null,
      nhct: this.$store.state.nhct,
      rbcv: this.$store.state.rbcv,
      tbv: this.$store.state.tbv,
      pv: this.$store.state.pv,
      thct: this.$store.state.thct,
    };
  },
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

.button-wrap {
  width: 100%;
}

svg {
  margin-right: 0.75rem;
}

.radio-box {
  border-bottom: 1px solid #ededed;
}

.radio-box.no-border {
  border-bottom: none;
}

.spec {
  font-size: 0.875rem;
  text-align: right;
}

.disable-opacity {
  opacity: 0.25;
}

ul {
  list-style: none;
}
</style>
