<template>
  <div>
    <Navigation />
    <div class="container mt-2">
      <p class="treatment-group my-2">Treatment Group: BVA Guided Care</p>
      <form>
        <div class="card p-3">
          <p class="bold-heading mb-2">BVA-Assessment Data Confirmation</p>
          <p>Select which categories apply:</p>
          <div id="radio-box-wrap-1" class="radio-box-wrap py-3 px-2">
            <!-- I WOULD LIKE TO GET THESE IN A DYNAMIC LOOP BUT I RUN INTO ISSUE WHEN SELECTING AN OPTION -->
            <label
              class="underline"
              style="width: 100%"
              v-on:click="confirm1 = 'severeOverload'"
            >
              <div
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Severe overload
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">TBV > +30%</p>
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

            <label style="width: 100%" v-on:click="confirm1 = 'mildOverload'">
              <div
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Mild Overload
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">10% &#60; TBV &#60;= +30%</p>
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

            <label style="width: 100%" v-on:click="confirm1 = 'bvaEuvolemic'">
              <div
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  BVA euvolemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">-10% &#60;= TBV &#60;= +10%</p>
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

            <label style="width: 100%" v-on:click="confirm1 = 'bvaEuvolemic'">
              <div
                class="
                  radio-box
                  no-border
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Hypovolemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">TBV &#60; -10%</p>
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
        </div>
      </form>
      <form>
        <div class="card p-3 mt-1">
          <p>Select which categories apply:</p>
          <div id="radio-box-wrap-2" class="radio-box-wrap py-3 px-2">
            <!-- I WOULD LIKE TO GET THESE IN A DYNAMIC LOOP BUT I RUN INTO ISSUE WHEN SELECTING AN OPTION -->
            <label
              class="underline"
              style="width: 100%"
              v-on:click="confirm2 = 'bvaEuvolemic'"
            >
              <div
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  True anemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">RBCV &#60; -10%</p>
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

            <label style="width: 100%">
              <div
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Normal Red Cell Volume
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">-10% &#60;= RBCV &#60;= +10%</p>
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

            <label style="width: 100%">
              <div
                class="
                  radio-box
                  d-flex
                  align-items-center
                  no-border
                  justify-content-between
                  p-2
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  True polycythemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">RBCV > +10%</p>
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
        </div>
      </form>
    </div>
    <div class="treatment-btn container">
      <router-link
        :to="{
          name: 'BVADataConf2',
          params: { confirm1: this.confirm1, confirm2: this.confirm2 },
        }"
      >
        <button type="submit" class="btn btn-primary mt-3">
          Submit Evaluation
        </button>
      </router-link>
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
  name: "BVADataConf",
  //   methods: {
  //     addClassToLast: function () {
  //       console.log(this.severeOverload);
  //     },
  //   },
  //   beforeMount() {
  //     this.addClassToLast();
  //   },
  data: function () {
    return {
      confirm1: "",
      confirm2: "",
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
