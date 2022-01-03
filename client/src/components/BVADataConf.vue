<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
    <div class="container mt-5">
      <p class="treatment-group my-2">Treatment Group: BVA Guided Care</p>
      <form>
        <div class="card p-3">
          <p class="bold-heading mb-2">BVA-Assessment Data Confirmation</p>
          <p class="bold-heading mb-2">Your values:</p>
          <ul class="d-flex justify-content-between py-2 px-5 mb-0">
            <li>
              <h5>TBV: {{ tbv }}</h5>
            </li>
            <li>
              <h5>RBCV: {{ rbcv }}</h5>
            </li>
            <li>
              <h5>NHCT: {{ nhct }}</h5>
            </li>
          </ul>
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
                  <p class="my-0 mx-3 spec">rbcv &#60; -10%</p>
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
                  <p class="my-0 mx-3 spec">rbcv &#60; -10%</p>
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
                  <p class="my-0 mx-3 spec">-10% &#60;= rbcv &#60;= +10%</p>
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
                  <p class="my-0 mx-3 spec">-10% &#60;= rbcv &#60;= +10%</p>
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
                  <p class="my-0 mx-3 spec">rbcv > +10%</p>
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
                  <p class="my-0 mx-3 spec">rbcv > +10%</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </form>
      <div
        class="
          d-flex
          justify-content-between
          align-items-baseline
          button-wrap
          py-3
        "
      >
        <router-link
          :to="{
            name: 'BVAData',
          }"
        >
          <button type="submit" class="btn btn-secondary mt-3">Back</button>
        </router-link>
        <router-link
          :to="{
            name: 'TargetHct',
            params: { nhct: this.nhct },
          }"
        >
          <button type="submit" class="btn btn-primary mt-3">Confirm</button>
        </router-link>
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
  name: "BVADataConf",
  data: function () {
    return {
      tbv: this.$store.state.tbv,
      rbcv: this.$store.state.rbcv,
      nhct: this.$store.state.nhct,
      thct: this.$store.state.thct,
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

.button-wrap > a > button {
  width: 240px;
}
</style>
