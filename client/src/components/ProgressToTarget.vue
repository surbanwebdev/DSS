<template>
  <div class="full-height d-flex flex-column justify-content-between">
    <div class="container-md mt-5">
      <p class="treatment-group my-2">Patient ID: {{ currentPatientID }}</p>
      <div class="card p-3">
        <div class="title-wrap d-flex align-items-center mb-2"></div>
        <p class="bold-heading mb-3">Progress to Target {{ thct }}</p>
        <p>Current Hct: {{ currentHct }}</p>
        <p>Target Hct: {{ calculatedTargetHct }}</p>
        <router-link :to="{ name: 'ChooseStrategy' }">
          <button
            @click="populateDecisionItems"
            type="submit"
            class="btn btn-primary mt-3"
            value="Submit"
          >
            Submit
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      currentPatientID: this.$store.state.currentPatientID,
      currentHct: this.$store.state.currentHct,
      thct: this.$store.state.thct,
    };
  },
  name: "ProgressToTarget",
  computed: {
    calculatedTargetHct() {
      var calculated = this.currentHct * 1.1;
      var preThct = calculated.toFixed(2);
      //  48 POINT CEILING FOR FEMALE AND 49 FOR MALE
      if (this.currentPatientSex == "female" && preThct > 48) {
        return 48;
      } else if (this.currentPatientSex == "male" && preThct > 49) {
        return 49;
      } else {
        return preThct;
      }
    },
  },
  methods: {
    calculateDistanceToTarget: function () {
      var calculated = this.thct - this.nhct;
      this.distanceToTarget = calculated.toFixed(2);
    },
    populateDecisionItems: function () {
      const context = this;
      context.$store.state.decisionItems.push(
        "Progress to target Hct acknowledged"
      );
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
  padding: 1.5rem 1rem;
  border: 1px solid #979797;
  border-radius: 0.25rem;
}

svg {
  margin-right: 0.75rem;
}

.form-group {
  transition: all 0.3s;
}

input {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #979797;
  padding-bottom: 0.0875rem;
}

.form-label {
  font-size: 1rem;
  margin-left: 0.5rem;
  color: #979797;
  opacity: 1;
  transform: translateY(-1.9rem);
  transform-origin: -1.5em -1.75em;
  transition: all 0.3s;
}

.form-control::placeholder {
  color: transparent;
}

.form-control:focus {
  outline: none;
  box-shadow: none;
}

.form-control:focus + .form-label,
.form-control:not(:placeholder-shown) + .form-label {
  transform: translateY(-2.5em) scale(0.75);
}

.form-control:focus-within {
  transform: scale(1.025, 1.025);
}

/* VALIDATION STYLES */
.error-list {
  list-style-type: none;
  color: red;
  padding: 0;
}

#textarea-fg {
  position: relative;
}

label#notes {
  position: absolute;
  top: 46px;
}

textarea#notes {
  border: none;
  background-color: #ededed;
}
</style>
