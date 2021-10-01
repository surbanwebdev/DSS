<template>
  <div>
    <Navigation />
    <div class="container mt-3">
      <div
        class="card p-3 d-flex flex-column align-items-center justify-content-between"
      >
        <img class="directions" src="../assets/directions.png" alt="" />
        <h5 class="bold-heading my-3">
          Which treatment group would you like to employ?
        </h5>
        <router-link :to="{ name: 'ModerateHypovol' }"></router-link>
        <div class="button-wrap d-flex">
          <button class="choice">
            Standard Care
          </button>
          <button class="choice">
            BVA-Guided Care
          </button>
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
  name: 'Choices',
}
</script>

<style scoped>
body {
  background-color: #e5e5e5 !important;
}

.choice {
  background-color: transparent;
  border: 2px solid #23396b;
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
</style>
