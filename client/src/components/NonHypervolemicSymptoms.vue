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
        <p class="treatment-group my-2">
          Patient ID: {{ currentPatientID }} - Day
          {{ this.$store.state.dayOfTreatment }}
        </p>
      </div>
      <div class="card p-3">
        <p class="bold-heading mb-3">
          Does the patient has any of the following symptoms?
        </p>

        <div class="form-check form-switch px-0">
          <label
            class="form-check-label d-flex justify-content-between py-2 px-0"
            for="hypertensive"
            @click="hypoCheck"
          >
            Hypertension
            <input
              v-model="hypertensive"
              class="form-check-input"
              type="checkbox"
              value="You selected hypertensive"
              id="hypertensive"
            />
          </label>
        </div>
        <hr />
        <div class="form-check form-switch px-0">
          <label
            class="form-check-label d-flex justify-content-between py-2 px-0"
            for="hypotensive"
            @click="hyperCheck"
          >
            Hypotension
            <input
              v-model="hypotensive"
              class="form-check-input"
              type="checkbox"
              value="You selected hypotensive"
              id="hypotensive"
            />
          </label>
        </div>

        <hr />
        <div class="form-check form-switch px-0">
          <label
            class="form-check-label d-flex justify-content-between py-2 px-0"
            for="edemic"
            @click="!edemic"
          >
            Edemic
            <input
              v-model="edemic"
              class="form-check-input"
              type="checkbox"
              value="You selected edemic"
              id="edemic"
            />
          </label>
        </div>
        <hr />
        <div class="form-check form-switch px-0">
          <label
            class="form-check-label d-flex justify-content-between py-2 px-0"
            for="renal"
            @click="!renalProblems"
          >
            Worsening Renal Function
            <input
              v-model="renalProblems"
              class="form-check-input"
              type="checkbox"
              value="You selected signs of worsening renal function"
              id="renal"
            />
          </label>
        </div>

        <div class="assessment-btn">
          <router-link
            v-if="rbcv < -10"
            :to="{
              name: 'InitialAnemic',
            }"
          >
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
          </router-link>
          <router-link
            v-else-if="rbcv > 10"
            :to="{
              name: 'InitialPolycythemic',
            }"
          >
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
          </router-link>
          <router-link
            v-else
            :to="{
              name: 'DischargePlan',
            }"
          >
            <button
              @click="populateDecisionItems"
              type="submit"
              class="btn btn-primary mt-3"
            >
              Submit
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NonHypervolemicSymptoms",
  data: function () {
    return {
      rbcv: this.$store.state.rbcv,
    };
  },
  methods: {
    hyperCheck: function () {
      if (this.hypertensive) {
        this.hypertensive = false;
        this.hypotensive == true;
      } else {
        this.hypotensive == true;
      }
    },
    hypoCheck: function () {
      if (this.hypotensive) {
        this.hypotensive = false;
        this.hypertensive == true;
      } else {
        this.hypertensive == true;
      }
    },
    // TAKES ALL CHECKED INPUTS AND PUSHES TO GLOBAL ARRAY
    populateDecisionItems: function () {
      const context = this;
      $(".form-check-input").each(function (i, obj) {
        if ($(obj).is(":checked")) {
          context.$store.state.decisionItems.push(obj.value);
        }
      });
    },
  },
  computed: {
    hypertensive: {
      get: function () {
        return this.$store.state.hypertensive;
      },
      set: function (hypertensive) {
        this.$store.dispatch("setHypertensive", hypertensive);
      },
    },
    hypotensive: {
      get: function () {
        return this.$store.state.hypotensive;
      },
      set: function (hypotensive) {
        this.$store.dispatch("setHypotensive", hypotensive);
      },
    },
    edemic: {
      get: function () {
        return this.$store.state.edemic;
      },
      set: function (edemic) {
        this.$store.dispatch("setEdemic", edemic);
      },
    },
    renalProblems: {
      get: function () {
        return this.$store.state.renalProblems;
      },
      set: function (renalProblems) {
        this.$store.dispatch("setRenalProblems", renalProblems);
      },
    },
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
