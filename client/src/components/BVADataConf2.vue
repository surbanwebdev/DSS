<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <div class="container-md">
      <div
        class="
          container-header
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <div
          @click="goBack"
          class="d-flex justify-content-start align-items-center"
        >
          <font-awesome-icon icon="arrow-circle-left" class="mx-2" />
          <p class="treatment-group my-2">Back</p>
        </div>
        <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      </div>
      <form>
        <div class="card p-3">
          <p class="bold-heading mb-2">BVA-Assessment Data Confirmation</p>
          <p>Select which categories apply:</p>
          <h1>{{ tbvStatus }}</h1>
          <h1>{{ rbcvStatus }}</h1>
        </div>
      </form>
    </div>
    <div class="treatment-btn container-md">
      <router-link :to="{ name: 'Post24Checklist' }">
        <button type="submit" class="btn btn-primary mt-3">
          Submit Evaluation
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BVADataConf2",
  methods: {
    addClassToLast: function () {
      console.log(this.severeOverload);
    },
  },
  beforeMount() {
    this.addClassToLast();
  },
  //   computed: {
  //     tbvStatus: function () {
  //       var tbvStatus = "";

  //       switch (this.confirm1) {
  //         case "severeOverload":
  //           tbvStatus = "TBV > +30%";
  //           break;
  //         case "mildOverload":
  //           tbvStatus = "10% < TBV <= +30%";
  //           break;
  //         case "bvaEuvolemic":
  //           tbvStatus = "-10% <= TBV <= +10%";
  //           break;
  //         case "hypovolemic":
  //           tbvStatus = "TBV < -10%";
  //           break;
  //         default:
  //           return "";
  //       }

  //       return tbvStatus;
  //     },

  //     rbcvStatus: function () {
  //       var rbcvStatus = "";

  //       switch (this.confirm2) {
  //         case "trueAnemic":
  //           rbcvStatus = "rbcv <-10% ";
  //           break;
  //         case "mildOverload":
  //           rbcvStatus = "-10% <= rbcv <= +10%;
  //           break;
  //         case "bvaEuvolemic":
  //           rbcvStatus = "rbcv >+10%";
  //           break;
  //         default:
  //           return "";
  //       }

  //       return rbcvStatus;
  //     },
  //   },
  data: function () {
    return {
      confirm1: this.$route.params.confirm1,
      confirm2: this.$route.params.confirm2,
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
</style>
