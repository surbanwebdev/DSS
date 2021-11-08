<template>
  <div>
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
          <li class="mb-5" v-for="patient in patients" :key="patient.name">
            <label>Name:</label> {{ patient.name }} <br />
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
          name: "Murphy, Joseph A.",
          dob: "02/27/1956",
          sex: "Male",
          bvaStatus: "BVAData",
        },
        {
          name: "Hinkle, Anna S.",
          dob: "08/14/1965",
          sex: "Female",
          bvaStatus: "BVAData",
        },
        {
          name: "Carthage, Eugene M.",
          dob: "12/30/1942",
          sex: "Male",
          bvaStatus: "Checklist",
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

.radio-box {
  border-bottom: 1px solid #979797;
}

.radio-box.no-border {
  border-bottom: none;
}

.spec {
  font-size: 0.875rem;
  text-align: right;
}

.disable-opacity {
  opacity: 0.25;
}

ul {
  list-style: none;
}
</style>
