<template>
  <div id="app">
    <div>
      <div v-if="!loggedIn" class="login">
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
                v-model="username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="password"
              />
              <p class="link text-left">Forgot Password?</p>
            </div>
            <input
              type="button"
              class="btn btn-primary mb-3"
              value="Log In"
              v-on:click="login"
            />
            <p class="link">Create an account</p>
          </form>
        </div>
      </div>
      <div v-if="loggedIn">
        <router-view />
      </div>
    </div>
  </div>
</template>




<script>
import axios from "axios";
import _ from "lodash";
import router from './router';

export default {
  data: function () {
    return {
      loggedIn: false,
      username: "",
      password: "",
      route: "patients",
      ogRoute: "patients",
    };
  },
  computed: {
    sessionGuid: {
      get: function () {
        return this.$store.state.sessionGuid;
      },
      set: function (tSessionGuid) {
        this.$store.dispatch("setSessionGuid", tSessionGuid);
      },
    },
    apiURL: {
      get: function () {
        return this.$store.state.apiURL;
      },
    },
  },
  methods: {
    apiCall: async function (cfg) {
      const context = this;
      let method = _.get(cfg, "method");
      let endpoint = _.get(cfg, "endpoint");
      const data = _.get(cfg, "data");

      const headers = {
        sessionGuid: context.sessionGuid,
      };
      if (_.startsWith(endpoint, "/")) {
        endpoint = _.trim(endpoint, "/");
      }
      let url = context.apiURL + "/" + endpoint;
      try {
        let response = await axios({
          method,
          url,
          data,
          headers,
        });
        return response;
      } catch (err) {
        console.error(err.response);
        const statusCode = err.response.status;
        const statusText = err.response.statusText;
        if (statusCode === 401) {
          context.onFail(statusText);
          context.loggedIn = false;
          context.sessionGuid = null;
          return err.response;
        }
        //this.onFail(err); //uncomment this if we want it to automaticlaly toast each time a call fails.
        return err.response;
      }
    },
    login: function () {
      const context = this;
      const payload = {
        username: context.username,
        password: context.password,
      };

      let url = context.apiURL + "/session/login";
      axios
        .post(url, payload)
        .then((response) => {
          context.sessionGuid = response.data.sessionGuid;
          context.loggedIn = true;
          router.push(context.route || context.ogRoute);
        })
        .catch((err) => {
          console.error(err.response);
          const statusCode = err.response.status;
          if (statusCode === 401) {
            context.onFail("The credentials you entered we invalid.");
            context.loggedIn = false;
            context.sessionGuid = null;
          }
        });
    },
    onSuccess: function (message) {
      this.$toasted.success(message, { theme: "bubble" });
    },
    onWarning: function (message) {
      console.warn(message);
      this.$toasted.warn(message, { theme: "bubble" });
    },
    onFail: function (message) {
      console.error("ON FAIL", message);
      this.$toasted.error(message, { theme: "bubble" });
    },
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
