/* eslint-env jquery */
<template>
  <div>
    <nav class="nav navbar sticky-top navbar-dark bg-light">
      <div class="container-md">
        <div class="nav-left d-flex">
          <img class="logo" src="../assets/logo-white.png" alt="" />
          <h6>Decision Support</h6>
        </div>
        <div class="nav-right">
          <div id="burger" :class="{ active: isBurgerActive }">
            <slot>
              <button
                type="button"
                class="burger-button"
                title="Menu"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
              </button>
            </slot>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto mt-3">
            <li class="nav-item">
              <p
                v-on:click="goHome"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Home
              </p>
            </li>
            <li class="nav-item">
              <p v-on:click="confirmLogout">Logout</p>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: 'DecisionItems',
                }"
              >
                <p
                  style="color: #fff"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Dump
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      id="myModal"
      data-keyboard="false"
      data-backdrop="static"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Please Confirm</h5>
          </div>
          <div class="modal-body">
            <p id="modal-body-text">Please Confirm.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              id="modal-confirm-button"
              v-on:click="modalConfirm"
            >
              Yes
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onclick="$('#myModal').modal('hide')"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import _ from "lodash";
import router from "../router";
import $ from "jquery";
export default {
  name: "Navigation",
  data: function () {
    return {
      action: "",
      previousPage: "",
      isBurgerActive: false,
    };
  },
  mounted: function () {
    this.previousPage = "";
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive;
    },
    logout: function () {
      this.$parent.logout();
    },
    goBack: function () {
      router.go(-1);
    },
    goHome: function () {
      router.push("Patients");
    },
    confirmLogout: function () {
      this.action = "logout";
      $("#modal-body-text").text(
        "You will lose any unsaved progress if you proceed. Are you sure you want to log out?"
      );
      $("#myModal").modal("show");
    },

    modalConfirm: function () {
      $("#myModal").modal("hide");
      switch (this.action) {
        case "logout":
          this.logout();
          break;
        default:
          break;
      }
    },
  },
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

.nav-button {
  width: 200px;
  float: center;
}

.navbar-dark .navbar-toggler {
  border: none;
}

.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  outline: none;
  box-shadow: none;
}
.navbar-toggler-icon {
  width: 1.25em;
  height: 1.25em;
}

ul {
  width: 100%;
  list-style-type: none;
}

.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

/* HAMBURGER */
.burger-button {
  position: relative;
  height: 36px;
  width: 36px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #fff;
  border-radius: 0.25rem;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 0.075em;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(8px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #fff;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}
</style>
