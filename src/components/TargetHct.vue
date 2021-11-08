<template>
  <div>
    <Navigation />
    <div class="container mt-5">
      <p class="treatment-group my-2">Treatment Group: BVA Guided Care</p>

      <div class="card p-3">
        <p class="bold-heading mb-2">Normalized Hematocrit: {{ nhct }}</p>
        <p class="bold-heading mb-2">Target Hematocrit: {{ thct }}</p>
      </div>
    </div>
    <div class="treatment-btn container">
      <!-- rbcv MAY NEED TO BE CHANGED TO ANOTHER VALUE IN THE FUTURE -->
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
          name: 'Hypertensive',
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
      this.thct = calculated.toFixed(2);
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
