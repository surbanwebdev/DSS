<template>
  <div>
    <Navigation />
    <div class="container mt-2">
      <p class="path-text my-2">Treatment Group: Standard Care</p>
      <div class="card p-3">
        <p class="bold-heading mb-1">Initial Evaluation</p>
        <p class="bold-heading indent mb-1">
          What symptoms of congestion are present?
        </p>
        <div class="triple-indent mb-2">
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Dyspnea
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Orthopnea
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckChecked">
              Edema
            </label>
          </div>
        </div>
        <p class="bold-heading indent mb-1">
          What signs of congestion are present?
        </p>
        <div class="triple-indent">
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Rales
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Peripheral Edema
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Ascites
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Pulmonary Vascular Congestion on Chest Radiography
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Jugular Venous Pressure (JVP)
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="flexCheckDefault">
              Orthopnea
            </label>
          </div>
        </div>
        <router-link :to="{ name: 'ModerateHypovol' }">
          <button type="submit" class="btn btn-primary mt-3">
            Submit Evaluation
          </button>
        </router-link>
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
  name: 'Checklist',
}
</script>

<style scoped>
body {
  background-color: #e5e5e5 !important;
}

img.directions {
  width: 150px;
}

.card {
  border: none;
  background: #fff;
  text-align: left;
}

.card > p,
.path-text {
  margin-bottom: 0;
}

.path-text {
  text-align: right;
  font-size: 0.875rem;
}

.button-wrap {
  width: 100%;
}

.indent {
  padding-left: 0.25rem;
}

.triple-indent {
  padding-left: 0.75rem;
}

.form-check-input[type='checkbox'] {
  border-radius: 0;
}
</style>
