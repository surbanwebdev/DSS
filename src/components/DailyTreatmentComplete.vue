<template>
  <div>
    <Navigation />
    <div class="container mt-3">
      <div
        class="card p-3 d-flex flex-column align-items-center justify-content-between"
      >
        <img class="directions" src="../assets/complete.png" alt="" />
        <h5 class="bold-heading my-3">
          Daily Treatment Complete
        </h5>
        <p>
          Revisit in
          <span class="bold-heading">24 hours</span>
          for additional decision support.
        </p>
        <router-link class="full-width" :to="{ name: 'Post24Checklist' }">
          <button type="submit" class="btn btn-primary mt-3">
            24 Hour Bypass
          </button>
        </router-link>
        <hr class="mb-4" />
        <p>Or begin another treatment plan now:</p>
        <router-link :to="{ name: 'ModerateHypovol' }"></router-link>
        <div class="button-wrap d-flex my-3">
          <button
            v-on:click=";(standardCare = true), (bvaCare = false)"
            class="choice"
          >
            Standard Care
          </button>
          <button
            v-on:click=";(bvaCare = true), (standardCare = false)"
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
          <router-link :to="{ name: 'ModerateHypovol' }">
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
import Navigation from './Navigation'
import Footer from './Footer'

export default {
  components: {
    Navigation,
    Footer,
  },
  name: 'DailyTreatmentComplete',
  data: function () {
    return {
      standardCare: false,
      bvaCare: false,
    }
  },
}
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
</style>
