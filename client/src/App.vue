<template>
  <div id="app">
    <div>
      <div v-if="loggedIn == false" class="login">
        <div class="jumbotron mb-4">
          <div class="bg-img py-5">
            <div class="gradient-overlay"></div>
            <div class="container">
              <div class="text-wrap text-left">
                <h1 class="light">Reliable, Accurate Fluid Management Data</h1>
                <p>
                  Daxor Decision Support is your resource for efficient, precise
                  blood volume determinations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <img class="logo" alt="logo" src="./assets/logo.png" />
          <h4 class="logo-subheading bold-heading mb-4">Decision Support</h4>
          <h3 class="greeting bold-heading">Welcome Back!</h3>
          <p>Sign in below with your username and password.</p>
          <form>
            <div class="form-group mb-4">
              <input
                type="username"
                class="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
              <p class="link text-left">Forgot Password?</p>
            </div>
            <router-link :to="{ name: 'Patients' }">
              <button
                @click="loggedIn = true"
                type="submit"
                class="btn btn-primary mb-3"
              >
                Log In
              </button>
            </router-link>
            <p class="link">Create an account</p>
          </form>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // TEMPORARILY SET TO TRUE SO LOGIN SCREEN DOESN'T APPEAR EVERY REFRESH
      loggedIn: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400&family=Lato:wght@100;300&display=swap");
body {
  background-color: #e5e5e5 !important;
}

#app {
  font-family: "Cabin", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.logo {
  max-width: 4.625rem;
}

h3,
h4 {
  font-weight: 700;
}

.logo-subheading {
  color: #454545;
  font-size: 1rem;
  text-transform: uppercase;
}

.greeting {
  color: #003c77;
  font-size: 1.25rem;
}

.text-left {
  text-align: left;
}

.text-wrap .text-left p {
  font-size: 0.875rem;
  font-weight: 200;
}

.forgot {
  color: var(--daxor-blue);
  font-size: 0.875rem;
  text-decoration: underline;
}

.jumbotron h1,
.jumbotron p {
  color: #fff;
}

h1.light {
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.0375rem;
}

p.link {
  color: #0d6efd;
  font-size: 0.875rem;
}

.jumbotron {
  position: relative;
}

.bg-img {
  /* padding: 2.5rem 0; */
  background-image: url("./assets/lab.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  position: relative;
}

.gradient-overlay {
  background: rgb(35, 57, 107);
  background: linear-gradient(
    90deg,
    rgba(35, 57, 107, 1) 0%,
    rgba(149, 171, 211, 0.7371323529411764) 78%,
    rgba(149, 171, 211, 0.3449754901960784) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

button {
  background-color: #003c77;
  width: 100%;
}

.bold-heading {
  font-weight: 700;
}

.btn-primary {
  background-color: #23396b !important;
  border: none;
}
</style>
