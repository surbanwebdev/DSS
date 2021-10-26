<template>
  <div>
    <Navigation />
    <div class="container mt-2">
      <p class="treatment-group my-2">Treatment Group: BVA Guided Care</p>
      <form>
        <div class="card p-3">
          <p class="bold-heading mb-2">BVA-Assessment Data Confirmation</p>
          <div id="radio-box-wrap-1" class="radio-box-wrap py-3 px-2">
            <!-- SEVERE OVERLOAD -->
            <label class="underline" style="width: 100%">
              <div
                v-if="tbv > 30"
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  alert-danger
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Severe overload
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">TBV > +30%</p>
                </div>
              </div>
              <div
                v-else
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  disable-opacity
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Severe overload
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">TBV > +30%</p>
                </div>
              </div>
            </label>

            <!-- MILD OVERLOAD -->
            <label style="width: 100%">
              <div
                v-if="tbv > 10 && tbv <= 30"
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  alert-warning
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Mild Overload
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">10% &#60; TBV &#60;= +30%</p>
                </div>
              </div>
              <div
                v-else
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  disable-opacity
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Mild Overload
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">10% &#60; TBV &#60;= +30%</p>
                </div>
              </div>
            </label>

            <!-- BVA EUVOLEMIC -->
            <label style="width: 100%">
              <div
                v-if="tbv >= -10 && tbv <= 10"
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  alert-success
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  BVA euvolemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">-10% &#60;= TBV &#60;= +10%</p>
                </div>
              </div>
              <div
                v-else
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  disable-opacity
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  BVA euvolemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">-10% &#60;= TBV &#60;= +10%</p>
                </div>
              </div>
            </label>

            <!-- HYPOVOLEMIC -->
            <label style="width: 100%">
              <div
                v-if="tbv < -10"
                class="
                  radio-box
                  no-border
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  alert-danger
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Hypovolemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">TBV &#60; -10%</p>
                </div>
              </div>

              <div
                v-else
                class="
                  radio-box
                  no-border
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  disable-opacity
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Hypovolemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">TBV &#60; -10%</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </form>
      <form>
        <div class="card p-3 mt-1">
          <div id="radio-box-wrap-2" class="radio-box-wrap py-3 px-2">
            <!-- TRUE ANEMIA -->
            <label class="underline" style="width: 100%">
              <div
                v-if="rbcv < -10"
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  alert-danger
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  True anemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">RBCV &#60; -10%</p>
                </div>
              </div>

              <div
                v-else
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  disable-opacity
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  True anemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">RBCV &#60; -10%</p>
                </div>
              </div>
            </label>

            <!-- NORMAL RED CELL VOLUME -->
            <label style="width: 100%">
              <div
                v-if="rbcv >= -10 && rbcv < 10"
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  alert-success
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Normal Red Cell Volume
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">-10% &#60;= RBCV &#60;= +10%</p>
                </div>
              </div>

              <div
                v-else
                class="
                  radio-box
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                  disable-opacity
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  Normal Red Cell Volume
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">-10% &#60;= RBCV &#60;= +10%</p>
                </div>
              </div>
            </label>

            <label style="width: 100%">
              <div
                v-if="rbcv > 10"
                class="
                  radio-box
                  d-flex
                  align-items-center
                  no-border
                  justify-content-between
                  p-2
                  alert-danger
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  True polycythemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">RBCV > +10%</p>
                </div>
              </div>

              <div
                v-else
                class="
                  radio-box
                  d-flex
                  align-items-center
                  no-border
                  justify-content-between
                  p-2
                  disable-opacity
                "
              >
                <div
                  class="content-left d-flex align-items-center bold-heading"
                >
                  True polycythemic
                </div>
                <div class="content-right d-flex align-items-center">
                  <p class="my-0 mx-3 spec">RBCV > +10%</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
    <div class="treatment-btn container">
      <router-link
        v-if="tbv > 10 && rbcv > 10"
        :to="{
          name: 'InitialHypervolemia',
          params: { tbv: this.tbv },
        }"
      >
        <button type="submit" class="btn btn-primary mt-3">Confirm</button>
      </router-link>
      <router-link
        v-else
        :to="{
          name: 'InitialHypervolemia',
          params: { tbv: this.tbv },
        }"
      >
        <button type="submit" class="btn btn-primary mt-3">Confirm</button>
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
      tbv: this.$route.params.tbv,
      rbcv: this.$route.params.rbcv,
      nHtc: this.$route.params.nHtc,
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
</style>
