<template>
  <div>
    <Navigation />
    <div class="container mt-5">
      <p class="treatment-group my-2">Treatment Group: Standard Care</p>
      <div class="card p-3">
        <p class="bold-heading mb-1">
          Based on your assessment of signs and symptoms, choose a strategy:
        </p>
        <div id="radio-box-wrap" class="radio-box-wrap py-3 px-2">
          <!-- I WOULD LIKE TO GET THESE IN A DYNAMIC LOOP BUT I RUN INTO ISSUE WHEN SELECTING AN OPTION -->
          <label
            class="underline"
            style="width: 100%"
            v-on:click="(optionA = true), (optionB = false)"
          >
            <div
              class="
                radio-box
                d-flex
                align-items-center
                justify-content-between
                py-3
                px-2
              "
            >
              <div class="content-left d-flex align-items-center">
                Increase diuretic dose by 50%
              </div>
              <div class="content-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                  />
                </div>
              </div>
            </div>
          </label>

          <label
            style="width: 100%"
            v-on:click="(optionA = true), (optionB = false)"
          >
            <div
              class="
                radio-box
                d-flex
                align-items-center
                justify-content-between
                py-3
                px-2
              "
            >
              <div class="content-left d-flex align-items-center">
                Maintain same strategy
              </div>
              <div class="content-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                  />
                </div>
              </div>
            </div>
          </label>

          <label
            style="width: 100%"
            v-on:click="(optionA = true), (optionB = false)"
          >
            <div
              class="
                radio-box
                d-flex
                align-items-center
                justify-content-between
                py-3
                px-2
              "
            >
              <div class="content-left d-flex align-items-center">
                Continue with reduced IV diuretic dose
              </div>
              <div class="content-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                  />
                </div>
              </div>
            </div>
          </label>

          <label
            style="width: 100%"
            v-on:click="(optionA = false), (optionB = true)"
          >
            <div
              class="
                radio-box
                no-border
                d-flex
                align-items-center
                justify-content-between
                py-3
                px-2
              "
            >
              <div class="content-left d-flex align-items-center">
                Consider ending IV treatment and change to oral diuretics
              </div>
              <div class="content-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                  />
                </div>
              </div>
            </div>
          </label>
        </div>
        <!-- BUTTONS WILL NOT BE VISIBLE UNTIL USER SELECTS AN OPTION -->
        <div class="treatment-btn" v-if="optionA == true">
          <router-link :to="{ name: 'Post24Checklist' }">
            <button type="submit" class="btn btn-primary mt-3">
              Go to 24hr
            </button>
          </router-link>
        </div>
        <div class="treatment-btn" v-if="optionB == true">
          <router-link :to="{ name: 'IVTreatmentEval' }">
            <button type="submit" class="btn btn-primary mt-3">
              Go to IV Treatment
            </button>
          </router-link>
        </div>
      </div>
    </div>
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
  name: "SelectStrategy",
  // methods: {
  //   addClassToLast: function () {
  //     var lastItem = this.strategies.pop()
  //     console.log(lastItem)
  //   },
  // },
  // beforeMount() {
  //   this.addClassToLast()
  // },
  data: function () {
    return {
      optionA: false,
      optionB: false,
      strategies: [
        { choice: "Increase diuretic dose by 50%" },
        { choice: "Maintain same strategy" },
        { choice: "Continue with reduced IV diuretic dose" },
        { choice: "Consider ending IV treatment and change to oral diuretics" },
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
</style>
