<template>
  <div>
    <Navigation />
    <div class="container mt-5">
      <p class="treatment-group my-2">Treatment Group: Standard Care</p>
      <div class="card p-3">
        <h1>Suggested Treatment</h1>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
  },
  name: "SuggestedTreatment",
  data: function () {
    return {
      low: false,
      high: false,
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

.radio-box {
  width: 100%;
  padding: 1.5rem 1rem;
  border: 1px solid #979797;
  border-radius: 0.25rem;
}

svg {
  margin-right: 0.75rem;
}
</style>
