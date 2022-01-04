<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <p class="treatment-group my-2">Treatment Group: BVA Guided Care</p>

      <div class="card p-3">
        <table class="table table-striped mb-0">
          <tbody>
            <tr>
              <td>
                <p class="bold-heading mb-2">
                  Normalized Hematocrit: {{ nhct }}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p class="bold-heading mb-2">Target Hematocrit: {{ thct }}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p class="bold-heading mb-2">
                  Distance to Target: {{ thct - nhct }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="treatment-btn container">
      <router-link
        v-if="tbv > 10 && rbcv > 10"
        :to="{
          name: 'InitialHypervolemia',
          params: { tbv: this.tbv },
        }"
      >
        <button type="submit" class="btn btn-primary mt-3">Confirm</button>
      </router-link>
      <router-link
        v-else
        :to="{
          name: 'BVASymptoms',
          params: { tbv: this.tbv },
        }"
      >
        <button type="submit" class="btn btn-primary mt-3">Confirm</button>
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";

export default {
  components: {
    Navigation,
    Footer,
  },
  name: "TargetHct",
  methods: {
    calculateTargethct: function () {
      var calculated = this.nhct * 1.1;
      var preThct = calculated.toFixed(2);
      if (this.currentPatientSex == "female" && preThct > 48) {
        this.thct = 48;
      } else if (this.currentPatientSex == "male" && preThct > 49) {
        this.thct = 49;
      } else {
        this.thct = preThct;
      }
    },
  },
  created() {
    this.calculateTargethct();
  },
  data: function () {
    return {
      tbv: this.$store.state.tbv,
      rbcv: this.$store.state.rbcv,
      nhct: this.$store.state.nhct,
      thct: this.$store.state.thct,
      currentPatientID: this.$store.state.currentPatientID,
      currentPatientSex: this.$store.state.currentPatientSex,
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
  border-bottom: 1px solid #979797;
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
