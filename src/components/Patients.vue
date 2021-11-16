<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <div class="card p-3">
        <p class="bold-heading mb-4">Select a Patient:</p>
        <ul class="list-group">
          <!-- <li class="list-group-item bold-heading">Murphy, Joseph A.</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li> -->
          <li class="mb-2" v-for="patient in patients" :key="patient.pid">
            <h5>{{ patient.name }}</h5>
            Patient ID: {{ patient.pid }} <br />
            Date of Birth: {{ patient.dob }} <br />
            Sex: {{ patient.sex }} <br />
            <router-link
              class="mb-3"
              :to="{
                name: 'BVAData',
              }"
            >
              <button type="submit" class="btn btn-primary mt-3">
                Select Patient
              </button>
            </router-link>
            <hr />
          </li>
        </ul>
      </div>
      <p class="my-4">OR</p>
      <div class="card p-3">
        <router-link
          class="mb-3"
          :to="{
            name: 'NewPatient',
          }"
        >
          <button type="submit" class="btn btn-primary mt-3">
            Add a New Patient
          </button>
        </router-link>
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
  components: {
    Navigation,
    Footer,
  },
  name: "Patients",
  methods: {
    calculateTargethct: function () {
      var calculated = this.nhct * 1.1;
      this.thct = calculated.toFixed(2);
    },
  },
  created() {
    this.calculateTargethct();
  },
  data: function () {
    return {
      patients: [
        {
          name: "Carthage, Eugene M.",
          pid: "12234542353",
          dob: "12/30/1942",
          sex: "Male",
          bvaStatus: "Checklist",
        },
        {
          name: "Hinkle, Anna S.",
          pid: "12234542352",
          dob: "08/14/1965",
          sex: "Female",
          bvaStatus: "BVAData",
        },
        {
          name: "Murphy, Joseph A.",
          pid: "12234542351",
          dob: "02/27/1956",
          sex: "Male",
          bvaStatus: "BVAData",
        },
      ],
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

ul {
  list-style: none;
}

.list-group {
  overflow-y: scroll;
  max-height: 450px;
}
</style>
