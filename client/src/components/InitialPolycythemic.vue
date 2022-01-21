<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container-md">
      <p v-if="tbv" class="treatment-group my-2">
        Patient ID: {{ currentPatientID }}
      </p>
      <p v-else class="treatment-group my-2">Treatment Group: Standard Care</p>
      <div class="card p-3">
        <div class="title-wrap d-flex align-items-center mb-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3334 1.33325C22.0694 1.33325 22.6667 1.93059 22.6667 2.66659V6.66658H28.0001C28.7361 6.66658 29.3334 7.26392 29.3334 7.99992V26.6666C29.3334 27.4026 28.7361 27.9999 28.0001 27.9999H4.00008C3.26408 27.9999 2.66675 27.4026 2.66675 26.6666V7.99992C2.66675 7.26392 3.26408 6.66658 4.00008 6.66658H9.33342V2.66659C9.33342 1.93059 9.93075 1.33325 10.6667 1.33325H21.3334ZM26.6667 9.33325H5.33341V25.3333H26.6667V9.33325ZM17.3334 11.9999V15.9999H21.3334V18.6666H17.3321L17.3334 22.6666H14.6667L14.6654 18.6666H10.6667V15.9999H14.6667V11.9999H17.3334ZM20.0001 3.99992H12.0001V6.66658H20.0001V3.99992Z"
              fill="#456BB1"
            />
          </svg>
          <h5 class="blue-heading m-0">Polycythemia Treatment</h5>
        </div>
        <p>
          Assess patient for polycythemia vera and suitability of therapies,
          including therapeutic phlebotomy.
        </p>
        <router-link
          :to="{
            name: 'TreatmentComplete',
          }"
        >
          <button
            @click="populateDecisionItems"
            type="submit"
            class="btn btn-primary mt-3"
          >
            Acknowledge Suggestion
          </button>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "InitialPolycythemic",
  data: function () {
    return {
      currentPatientID: this.$store.state.currentPatientID,
      tbv: this.$store.state.tbv,
      rbcv: this.$store.state.tbv,
    };
  },
  methods: {
    populateDecisionItems: function () {
      const context = this;
      context.$store.state.decisionItems.push(
        "Suggested treatment for polycythemia: Assess patient for polycythemia vera and suitability of therapies, including therapeutic phlebotomy"
      );
    },
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
