<template>
  <div>
    <div class="nav">
      <div class="nav-left d-flex">
        <img class="logo" src="../assets/logo-white.png" alt="" />
        <h6>Decision Support</h6>
      </div>
      <div class="nav-right">
        menu
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
.nav {
  background: linear-gradient(269.83deg, #23396b -5.47%, #456bb1 129.81%);
  padding: 1rem 1.5rem;
  color: #fff;
}

.nav-left {
}

h6 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.75em;
  margin-left: 0.5rem;
}
</style>
