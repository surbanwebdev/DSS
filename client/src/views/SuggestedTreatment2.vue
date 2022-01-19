<template>
  <div>
    <div class="container-md mt-2">
      <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      <div class="card p-3">
        <h1>Suggested Treatment 2</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "SuggestedTreatment2",
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

svg {
  margin-right: 0.75rem;
}
</style>
