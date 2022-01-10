<template>
  <div>
    <nav class="nav navbar sticky-top navbar-dark bg-light">
      <div class="container">
        <div class="nav-left d-flex">
          <img class="logo" src="../assets/logo-white.png" alt="" />
          <h6>Decision Support</h6>
        </div>
        <div class="nav-right">
          <button
            class="navbar-toggler px-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="navbar-toggler-icon">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto mt-3">
            <li class="nav-item">
              <p v-on:click="goHome">Home</p>
            </li>
            <li class="nav-item">
              <p v-on:click="goBack">Back</p>
            </li>
            <li class="nav-item">
              <p v-on:click="confirmLogout">Logout</p>
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
    };
  },
  mounted: function () {
    this.previousPage = "";
  },
  methods: {
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
</style>
