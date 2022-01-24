/* eslint-env jquery */
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
      <div class="card p-3">
        <div class="title-wrap d-flex align-items-center mb-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3334 1.33325C22.0694 1.33325 22.6667 1.93059 22.6667 2.66659V6.66658H28.0001C28.7361 6.66658 29.3334 7.26392 29.3334 7.99992V26.6666C29.3334 27.4026 28.7361 27.9999 28.0001 27.9999H4.00008C3.26408 27.9999 2.66675 27.4026 2.66675 26.6666V7.99992C2.66675 7.26392 3.26408 6.66658 4.00008 6.66658H9.33342V2.66659C9.33342 1.93059 9.93075 1.33325 10.6667 1.33325H21.3334ZM26.6667 9.33325H5.33341V25.3333H26.6667V9.33325ZM17.3334 11.9999V15.9999H21.3334V18.6666H17.3321L17.3334 22.6666H14.6667L14.6654 18.6666H10.6667V15.9999H14.6667V11.9999H17.3334ZM20.0001 3.99992H12.0001V6.66658H20.0001V3.99992Z"
              fill="#456BB1"
            />
          </svg>
          <h5 class="blue-heading m-0">Stability Assessment</h5>
        </div>
        <p class="bold-heading mb-1">
          Are the following signs of stability present?
        </p>
        <ul>
          <li>
            Serum creatinine(sCR) stable at level 1.0 mg/dL above baseline at
            start of IV diuretic treatment,
          </li>
          <li>Hemodynamics (HD) stable</li>
          <li>Urine Output (UO) stable?</li>
        </ul>
        <div class="radio-box-wrap">
          <!-- PARENT LABEL WILL ACTIVATE INNER RADIO BUTTON -->
          <label
            v-on:click="optionA = true"
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
                    value="You selected signs of stability are present"
                    name="flexRadioDefault"
                    id="Low"
                  />
                </div>
              </div>
            </div>
          </label>
          <!-- PARENT LABEL WILL ACTIVATE INNER RADIO BUTTON -->
          <label
            v-on:click="optionA = false"
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
                    value="You selected signs of stability are present"
                    name="flexRadioDefault"
                    id="High"
                  />
                </div>
              </div>
            </div>
          </label>
        </div>
        <div v-if="optionA == true" class="assessment-btn">
          <router-link
            :to="{
              name: 'PreDischargeBVA',
            }"
          >
            <button
              @click="populateDecisionItems"
              type="submit"
              class="btn btn-primary mt-3"
            >
              Submit Assessment
            </button>
          </router-link>
        </div>
        <div v-if="optionA == false" class="assessment-btn">
          <router-link
            :to="{
              name: 'HoldDiuretics',
            }"
          >
            <button
              @click="populateDecisionItems"
              type="submit"
              class="btn btn-primary mt-3"
            >
              Submit Assessment
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignsOfStability",
  data: function () {
    return {
      optionA: undefined,
    };
  },
  methods: {
    populateDecisionItems: function () {
      const context = this;
      $(".form-check-input").each(function (i, obj) {
        if ($(obj).is(":checked")) {
          context.$store.state.decisionItems.push(obj.value);
        }
      });
    },
  },
};
</script>

<style scoped>
.card {
  border: none;
  border-top: 1rem solid #456bb1;
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
  border-bottom: 1px solid #ededed;
}

svg {
  margin-right: 0.75rem;
}
</style>
