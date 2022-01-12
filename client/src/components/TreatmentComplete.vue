<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <div
        class="
          card
          p-3
          d-flex
          flex-column
          align-items-center
          justify-content-between
        "
      >
        <img class="directions" src="../assets/complete.png" alt="" />
        <h5 class="bold-heading my-3">Treatment Complete</h5>
        <p>Please allow 24 hours before next assessment.</p>
        <hr class="mb-4" />
        <p></p>
        <router-link :to="{ name: 'CurrentHct' }">
          <button type="submit" class="btn btn-primary" value="Submit">
            24 hour Bypass
          </button>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "TreatmentComplete",
  data: function () {
    return {
      standardCare: false,
      bvaCare: false,
    };
  },
};
</script>

<style scoped>
body {
  background-color: #e5e5e5 !important;
}

.choice {
  background-color: transparent;
  border: 2px solid #23396b;
  font-size: 0.875rem;
  padding: 0.25rem 0;
}

.choice:first-child {
  border-right: 1px solid #23396b;
  border-radius: 5px 0 0 5px;
}

.choice:last-child {
  border-left: 1px solid #23396b;
  border-radius: 0 5px 5px 0;
}

img.directions {
  width: 150px;
}

.card {
  border: none;
  background: #fff;
}

.button-wrap {
  width: 100%;
}

button {
  width: 100%;
}

.treatment-btn {
  width: 100%;
}

hr {
  color: #979797;
}
</style>
