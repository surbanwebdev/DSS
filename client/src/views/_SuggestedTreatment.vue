<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container-md mt-5">
      <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      <div class="card p-3">
        <h1>Suggested Treatment</h1>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
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
  border: 1px solid #ededed;
  border-radius: 0.25rem;
}

svg {
  margin-right: 0.75rem;
}
</style>
