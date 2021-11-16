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
            <h5>{{ patient.lastName }}, {{ patient.firstName }}</h5>
            Patient ID: {{ patient.pid }} <br />
            Age: {{ patient.age }} <br />
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
          pid: "Fig1",
          firstName: "fname",
          lastName: "1",
          height: "170",
          weight: "78",
          age: "71",
          sex: "M",
          tbv: "-19.4",
          rbcv: "-49.8",
          pv: "1.4",
          phct: "28",
          nhct: "22.6",
          notes: "Moderate Hypovolemia (Extreme Anemia, Normal Plasma Volume",
        },
        {
          pid: "Fig2",
          firstName: "fname",
          lastName: "2",
          height: "158",
          weight: "59.8",
          age: "79",
          sex: "F",
          tbv: "-25.3",
          rbcv: "-15.9",
          pv: "30.7",
          phct: "45.1",
          nhct: "33.7",
          notes:
            "Severe Hypovolemia (Mild Anemia, Severe Plasma Volume Deficit",
        },
        {
          pid: "Fig3",
          firstName: "fname",
          lastName: "3",
          height: "159",
          weight: "71",
          age: "58",
          sex: "F",
          tbv: "-21.5",
          rbcv: "-7.5",
          pv: "-29.4",
          phct: "47.2",
          nhct: "37",
          notes:
            "Moderate Hypovolemia (Normal Red Cell Volume, Moderate Plasma Volume Deficit)",
        },
        {
          pid: "Fig4",
          firstName: "fname",
          lastName: "4",
          height: "149.86",
          weight: "73.03",
          age: "NA",
          sex: "F",
          tbv: "-34.6",
          rbcv: "12.8",
          pv: "-61.3",
          phct: "69",
          nhct: "45.1",
          notes:
            "Extreme Hypovolemia (Mild Red Cell Excess, Extreme Plasma Volume Deficit)",
        },
        {
          pid: "Fig5",
          firstName: "fname",
          lastName: "5",
          height: "154.94",
          weight: "60.78",
          age: "94",
          sex: "F",
          tbv: "-13.6",
          rbcv: "-25.5",
          pv: "-6.8",
          phct: "34.5",
          nhct: "29.8",
          notes: "Mild Hypovolemia (Severe Anemia, Normal Plasma Volume)",
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
