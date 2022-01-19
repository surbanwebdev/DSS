<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      <div class="card p-3">
        <div class="title-wrap d-flex align-items-center mb-2">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 0V2H17C17.552 2 18 2.448 18 3V19C18 19.552 17.552 20 17 20H1C0.448 20 0 19.552 0 19V3C0 2.448 0.448 2 1 2H4V0H14ZM4 4H2V18H16V4H14V6H4V4ZM10 9V11H12V13H9.999L10 15H8L7.999 13H6V11H8V9H10ZM12 2H6V4H12V2Z"
              fill="#456BB1"
            />
          </svg>

          <h5 class="blue-heading">Suggested Treatment</h5>
        </div>
        <p class="mb-3">
          Initiate oral loop diuretics with goal to keep net even.
        </p>
        <p class="mb-3">
          <span class="bold-heading">Note:</span> New dose of loop diuretics may
          be less than baseline dose in some patients.
        </p>
        <p class="mb-3">
          Follow <span class="link">Guideline Directed Medical Therapy</span>
        </p>
        <router-link
          :to="{
            name: 'TreatmentComplete',
          }"
        >
          <button type="submit" class="btn btn-primary mt-3">
            Acknowledge Treatment Plan
          </button>
        </router-link>
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
      congestionLevel: this.$route.params.congestionLevel,
    };
  },
};
</script>

<style scoped>
.card {
  border: none;
  border-top: 1rem solid #456bb1;
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
