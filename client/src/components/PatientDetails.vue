<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <div class="card p-3">
        <p class="bold-heading mb-4">Patient Details:</p>
        <ul class="list-group">
          <li class="mb-2">
            <table class="table table-striped">
              <tr>
                Patient:
                {{
                  $route.params.patientID
                }}
              </tr>
              <tr>
                Sex:
                {{
                  $route.params.sex
                }}
              </tr>
              <tr>
                Weight:
                {{
                  $route.params.weight
                }}
              </tr>
              <tr>
                Height:
                {{
                  $route.params.height
                }}
              </tr>
            </table>
            <router-link
              class="mb-3"
              :to="{
                name: '',
              }"
            >
              <button type="submit" class="btn btn-primary mt-3">
                Edit Patient Details
              </button>
            </router-link>
            <router-link
              class="mb-3"
              :to="{
                name: 'BVAData',
              }"
            >
              <button type="submit" class="btn btn-primary mt-3">
                Enter New BVA Data
              </button>
            </router-link>
            <hr />
          </li>
        </ul>
      </div>
    </div>
    <div class="treatment-btn container"></div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";

export default {
  name: "PatientDetails",
  components: {
    Navigation,
    Footer,
  },
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.card {
  border: none;
  background: #fff;
  text-align: left;
}

ul {
  list-style: none;
}

.content-wrap {
  width: 100%;
}
</style>
