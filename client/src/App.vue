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
import router from "./router";

export default {
  data: function () {
    return {
      loggedIn: false,
      username: "",
      password: "",
      route: "patients",
      ogRoute: "patients",
      sessionTimeout: 10, //minutes
    };
  },
  mounted: function () {
    let cSessionGuid = this.getCookie("sessionGUID");
    if (!cSessionGuid || cSessionGuid === "") {
      this.loggedIn = false;
      return;
    }

    //if we get here, cookie is present and good.
    this.loggedIn = true;
    
  },
  computed: {
    apiURL: {
      get: function () {
        return this.$store.state.apiURL;
      },
    },
  },
  watch: {
    $route(to, from) {
      this.ping();
    },
  },
  methods: {
    apiCall: async function (cfg) {
      const context = this;
      const sessionGuid = context.getCookie("sessionGUID");
      if (!sessionGuid || sessionGuid === "") {
        context.loggedIn = false;
        return;
      }
      let method = _.toLower(_.get(cfg, "method"));
      let endpoint = _.get(cfg, "endpoint");
      const data = _.get(cfg, "data");

      const headers = {
        sessionGuid,
      };
      if (_.startsWith(endpoint, "/")) {
        endpoint = _.trim(endpoint, "/");
      }
      let url = context.apiURL + "/" + endpoint;
  
      try {
        let response = await axios({
          method,
          url,
          data: method === "get" ? {} : data,
          headers,
          params: method === "get" ? data : {},
        });

        if (response.status >= 200 && response.status <= 299) {
          //Anything in 200 is good
          context.setCookie(sessionGuid, context.sessionTimeout); //reset the cookie timeout
          return response;
        }

        //If not in 200 range, throw and let the catch block deal with it
        throw response;
      } catch (err) {
        const statusCode = err.response.status;
        const statusText = err.response.statusText;
        if (statusCode === 401) {
          //401 at any point means our session timed out.
          context.onFail("The session has expired. Please log in again.");
          context.deleteCookie();
        } else {
          //any other error except 401 means the server still thinks the sesion is good.
          context.setCookie(sessionGuid, context.sessionTimeout); //reset the cookie timeout
        }
        throw err;
      }
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
    setCookie: function (cvalue, exMinutes) {
      const d = new Date();
      d.setTime(d.getTime() + exMinutes * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie =
        "sessionGUID=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: function () {
      let name = "sessionGUID" + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    checkCookie: function () {
      /*
        This gets called immediately after login.
        It first checks to see if the cookie exists / hasn't expired.
        If it is invalid / non-existant, loggedIn = false thus forcing another login.
        If the cookie is present / valid, it sets a timer to call itself (recursion) in X minutes
        to check again.

        After every API call, the cookie should be updated.
      */
      const context = this;
      const tCookie = context.getCookie("sessionGUID");
      if (!tCookie || tCookie === "") {
        context.loggedIn = false;
        return;
      }
      setTimeout(context.checkCookie, context.sessionTimeout * 60 * 1000);
    },
    deleteCookie: function () {
      this.loggedIn = false;
      this.setCookie("Timedout", -100);
    },
    ping: function(){
      const context = this;
      const sessionGuid = context.getCookie();
      if (!sessionGuid || sessionGuid === "") {
        context.loggedIn = false;
        return;
      }

      let url = "session/ping";
      context
        .apiCall({
          endpoint: url,
          method: "post",
          data: {},
        })
        .then(() => {
          context.setCookie(sessionGuid, context.sessionTimeout);
        })
        .catch((err) => {
          console.error(err.response);
          const statusCode = err.response.status;
          if (statusCode === 401) {
            context.onFail("The session has expired. Please log in again.");
            context.deleteCookie();
          }
        });
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
          const sessionGuid = response.data.sessionGuid;
          context.setCookie(sessionGuid, context.sessionTimeout);
          context.loggedIn = true;
          context.checkCookie();
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
