<template>
  <ul class="footer-nav mt-5">
    <li>Contact Us</li>
    <li>Terms of Use</li>
    <li>Privacy Policy</li>
  </ul>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
ul.footer-nav {
  list-style-type: none;
  padding: 0.5rem 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* position: absolute;
  bottom: 0; */
  background-color: #fff;
  margin: initial;
  font-size: 0.875rem;
  font-family: Lato, Arial, sans-serif;
  color: #454545;
}
</style>
