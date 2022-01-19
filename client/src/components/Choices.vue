<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container-md mt-5">
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
        <img class="directions" src="../assets/directions.png" alt="" />
        <h5 class="bold-heading my-3">
          Which treatment group would you like to employ?
        </h5>
        <router-link :to="{ name: '' }"></router-link>
        <div class="button-wrap d-flex my-3">
          <button
            v-on:click="(standardCare = true), (bvaCare = false)"
            class="choice"
          >
            Standard Care
          </button>
          <button
            v-on:click="(bvaCare = true), (standardCare = false)"
            class="choice"
          >
            BVA-Guided Care
          </button>
        </div>
        <div class="treatment-btn" v-if="standardCare == true">
          <router-link :to="{ name: 'Checklist' }">
            <button type="submit" class="btn btn-primary mt-3">
              Go to Standard Treatment
            </button>
          </router-link>
        </div>
        <div class="treatment-btn" v-if="bvaCare == true">
          <router-link :to="{ name: 'BVAData' }">
            <button type="submit" class="btn btn-primary mt-3">
              Go to BVA Treatment
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Choices",
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

.treatment-btn {
  width: 100%;
}
</style>
