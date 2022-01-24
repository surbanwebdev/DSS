<template>
  <div>
    <h2 class="my-5">Results</h2>
    <ul class="list-group">
      <li class="list-group-item">
        Treat Anemia
      </li>
      <li class="list-group-item">Active Bleeding: <strong>Yes</strong></li>
      <li class="list-group-item list-group-item-info">
        <em>Suggestion: </em><strong><em>Control Bleeding</em></strong>
      </li>
      <li class="list-group-item">Correct Anemia: <strong>Yes</strong></li>
      <li class="list-group-item">
        Mean Arterial Pressure &#60; 80 mmHg: <strong>Yes</strong>
      </li>
      <li class="list-group-item list-group-item-info">
        <em>Suggestion: </em><strong><em>Whole Blood Infusion</em></strong>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Results",
  data: function() {
    return {
      initial: true,
      optionA: false,
      optionB: false,
    };
  },
};
</script>

<style scoped>
.diamond-grp {
  width: 200px;
  height: 200px;
  position: relative;
}

h4.danger-heading {
  color: #842029;
}

h4 {
  color: var(--daxor-blue);
  text-align: center;
}

.diamond {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  border: 3px solid var(--daxor-blue);
  transform: rotate(45deg);
}
</style>
