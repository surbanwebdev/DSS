 <template>
  <div class="full-height d-flex flex-column justify-content-between">
    <Navigation />
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
      <div class="card p-3">
        <p class="bold-heading mb-1">
          Is the patient hypotensive, with suspected shock (cold and dry)?
        </p>
        <div class="radio-box-wrap">
          <!-- PARENT LABEL WILL ACTIVATE INNER RADIO BUTTON -->
          <label
            v-on:click="hypotensionPresent = true"
            class="form-check-label"
            for="Low"
            style="width: 100%"
          >
            <div
              class="
                radio-box
                d-flex
                align-items-center
                justify-content-between
                mt-3
              "
            >
              <div class="content-left d-flex align-items-center">Yes</div>
              <div class="content-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="Low"
                  />
                </div>
              </div>
            </div>
          </label>
          <!-- PARENT LABEL WILL ACTIVATE INNER RADIO BUTTON -->
          <label
            v-on:click="hypotensionPresent = false"
            class="form-check-label"
            for="High"
            style="width: 100%"
          >
            <div
              class="
                radio-box
                d-flex
                align-items-center
                justify-content-between
                mt-3
              "
            >
              <div class="content-left d-flex align-items-center">No</div>
              <div class="content-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="High"
                  />
                </div>
              </div>
            </div>
          </label>
        </div>
        <div v-if="hypotensionPresent == true" class="assessment-btn">
          <router-link
            :to="{
              name: 'HypotensivePlan',
              params: { hypotensionPresent: this.hypotensionPresent },
            }"
          >
            <button type="submit" class="btn btn-primary mt-3">
              Submit Assessment
            </button>
          </router-link>
        </div>
        <div v-if="hypotensionPresent == false" class="assessment-btn">
          <router-link
            :to="{
              name: 'Edema',
            }"
          >
            <button type="submit" class="btn btn-primary mt-3">
              Submit Assessment
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Hypotensive",
  data: function () {
    return {
      hypotensionPresent: undefined,
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

.radio-box {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #979797;
}

svg {
  margin-right: 0.75rem;
}
</style>
