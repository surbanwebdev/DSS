<template>
  <div class="footer-nav mt-5 d-flex justify-content-center">
    <ul class="d-flex justify-content-between">
      <li>Contact Us</li>
      <li>Terms of Use</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-nav {
  background-color: #fff;
  margin: initial;
}

.footer-nav ul {
  list-style-type: none;
  width: 600px;
  padding: 0.5rem 1rem;
  /* position: absolute;
  bottom: 0; */
  font-size: 0.875rem;
  font-family: Lato, Arial, sans-serif;
  color: #454545;
}
</style>
