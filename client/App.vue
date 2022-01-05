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
      sessionTimer: undefined,
      lastInteraction: undefined,
      intervalCounter: 0,
      settings: {}
    };
  },
  beforeUnmount: function(){
    clearInterval(this.sessionTimer);
  },
  mounted: async function () {
    const context = this;
    await context.loadSettings();
    context.lastInteraction = new Date();

    let cSessionGuid = this.getSessionCookie("sessionGUID");
    if ((!cSessionGuid || cSessionGuid === "") && context.loggedIn) {
      context.logout();
      return;
    }

    let url = _.trim(window.location.href,'/');
    if (_.endsWith(url,':8080')){
      //we were redirected to login the non-conventional way...
      context.logout();
      return;
    }

    var events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(function(name) {
      document.addEventListener(name, context.setLastInteraction, true);
    });

    context.loggedIn = true;
    context.checkSession();
    
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
      const context = this;
      let url = _.trim(window.location.href,'/');
      if (_.endsWith(url,':8080')){
        //we were redirected to login the non-conventional way...
        context.logout();
        return;
      }
      this.ping();
    },
  },
  methods: {
    apiCall: async function (cfg) {
      const context = this;
      const sessionGuid = context.getSessionCookie("sessionGUID");
      if (!sessionGuid || sessionGuid === "") {
        /*
          if I don't have a session guid, I can't logout anyway
          so may as well just delete the sesion cookie and redirect
          to login.
        */
        context.deleteSessionCookie();
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
          context.setSessionCookie(sessionGuid, context.settings.SessionTimeout); //reset the cookie timeout
          return response;
        }

        //If not in 200 range, throw and let the catch block deal with it
        throw response;
      } catch (err) {
        const statusCode = err.response.status;
        const statusText = err.response.statusText;
        if (statusCode === 403) {
          /*
            403 at any point means our session timed out on the API
            so all we need to do is get rid of the cookie and force
            the user to login again
          */

          context.onFail("The session has expired. Please log in again.");
          context.deleteSessionCookie();
        } else {
          //any other error except 401 means the server still thinks the sesion is good.
          if (endpoint != 'session/ping'){
            context.setSessionCookie(sessionGuid, context.settings.SessionTimeout); //reset the cookie timeout
          }
        }
        throw err;
      }
    },
    onSuccess: function (message) {
      this.$toasted.success(message, { theme: "bubble" });
    },
    onWarning: function (message) {
      console.warn(message);
      this.$toasted.info(message, { theme: "bubble" });
    },
    onFail: function (message) {
      console.error("ON FAIL", message);
      this.$toasted.error(message, { theme: "bubble" });
    },
    setSessionCookie: function (cvalue, exMinutes) {
      const d = new Date();
      d.setTime(d.getTime() + exMinutes * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie =
        "sessionGUID=" + cvalue + ";" + expires + ";path=/";
    },
    getSessionCookie: function () {
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
    deleteSessionCookie: function(){
      this.setSessionCookie("Session Time Out", -100);
      this.loggedIn = false;
      clearInterval(this.sessionTimer);
    },
    setLastInteraction(){
      this.lastInteraction = new Date();
    },
    checkSession: function(){
      const context = this;
      if (!context.loggedIn){
        console.log('Not logged in at session check')
        return;
      }
      clearInterval(context.sessionTimer);
      context.intervalCounter = 0;
      context.sessionTimer = setInterval(()=>{
        let delta = Math.abs(new Date() - context.lastInteraction); //millisecs
        if (delta > context.settings.SessionTimeout * 60 * 1000){
          //if no keyboard, mouse, touchscreen interaction in the specified timeout, kill the session
          context.onFail('No activity in specified timeout. Logging out.');
          context.logout();
          return;
        }

        if (delta > (context.settings.SessionTimeout * 0.9) * 60 * 1000){
          delta = (context.settings.SessionTimeout * 60 * 1000) - delta; //reusing variable
          delta = Math.round(delta / 1000);
          context.onWarning("Session ends in "+delta+" seconds unless interaction occurs");
        }

        if (context.intervalCounter === 60){
          //if we've hit 60 1-second intervals, ping the server and let them know we're still good on the UI.
          context.ping();//let the API know the user is still doing something on the UI
          context.intervalCounter = 0;
        }
        context.intervalCounter++;
      }, 1000);

    },
    ping: function(){
      //the point of this function is to make the server check it's session and update if not expired
      const context = this;
      const sessionGuid = context.getSessionCookie();
      if (!sessionGuid || sessionGuid === "") {
        context.deleteSessionCookie();
        return;
      }

      if (!this.loggedIn){
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
          console.log(new Date()+' Ping... OK');
        })
        .catch((err) => {
          console.log(new Date()+'Ping... FAIL');
          console.error(err);
          const statusCode = err.response.status;
        });
    },
    login: function () {
      const context = this;
      const payload = {
        username: context.username,
        password: context.password,
      };

      let ogURL = window.location.href;
      let ogRoute = _.last(_.split(ogURL, '/'));
      if (ogRoute === '' || ogRoute === '/'){
        context.route = 'patients'
      }else{
        context.route = ogRoute;
      }

      let url = context.apiURL + "/session/login";
      axios
        .post(url, payload)
        .then((response) => {
          const sessionGuid = response.data.sessionGuid;
          context.setSessionCookie(sessionGuid, context.settings.SessionTimeout);
          context.loggedIn = true;
          context.checkSession();
          router.push(context.route);
        })
        .catch((err) => {
          console.error(err);
          const statusCode = err.response.status;
          if (statusCode === 401) {
            context.onFail("The credentials you entered we invalid.");
            console.log('login fail logout')
            context.logout();
          }
        });
    },
    logout: function () {
      console.log('Logging out...')
      const context = this;
      let url = "session/logout";
      context
        .apiCall({
          endpoint: url,
          method: "post",
          data: {},
        })
        .catch((err) => {
          console.error(err);
          const statusCode = err.response.status;
        }).finally(()=>{
          this.deleteSessionCookie();
        });
    },//here is the end of the chain
    loadSettings: function(){
      return new Promise((resolve,reject)=>{
        const context = this;
        let url = context.apiURL + "/settings/GetAllSettings";
        axios
          .get(url)
          .then((response) => {
            let tSettings = {};
            let settings = response.data.settings;
            for(var i = 0; i < settings.length; i++){
              let tSetting = settings[i];
              _.set(tSettings, tSetting.Setting, tSetting.Value);
            }
            context.settings = tSettings;
            resolve();
          })
          .catch((err) => {
            context.onFail(err);
            reject();
          });
      });
    }//end of chain
  }
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
