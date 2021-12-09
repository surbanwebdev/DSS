<template>
  <div>
    <div class="nav d-flex justify-content-between">
      <div class="nav-left d-flex">
        <router-link :to="{ name: 'Home' }">
          <img class="logo" src="../assets/logo-white.png" alt="" />
        </router-link>

        <h6>Decision Support</h6>
      </div>

      <div class="nav-right">
        <!-- <i class="ri-menu-3-line menu"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.nav {
  background: linear-gradient(269.83deg, #23396b -5.47%, #456bb1 129.81%);
  padding: 0.75rem 1rem;
  color: #fff;
}

.nav-left {
  align-items: center;
}

h6 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.75em;
  margin-left: 0.5rem;
}

.menu {
  font-size: 1.5rem;
}
</style>
