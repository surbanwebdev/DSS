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
        <button
          class="btn btn-primary btn-sm"
          v-on:click="checkNavigation()">
          Back
        </button>
        <button
          class="btn btn-primary btn-sm"
          v-on:click="confirmLogout()">
          Logout
        </button>
      </div>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="myModal" data-keyboard="false" data-backdrop="static">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Please Confirm</h5>
          </div>
          <div class="modal-body">
            <p id="modal-body-text">Please Confirm.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" id='modal-confirm-button' v-on:click="modalConfirm">Yes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="$('#myModal').modal('hide')">No</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>


<script>
import _ from "lodash";
import router from '../router';
export default {
  name: "Navigation",

  data: function () {
    return {
      action: ''
    };
  },
  methods: {
    logout: function(){
      this.$parent.$parent.logout();
    },
    goBack: function(){
      router.go(-1); 
    },
    confirmLogout: function(){
      $('#modal-body-text').text('You will lose any unsaved progress if you proceed. Are you sure you want to log out?');
      $('#myModal').modal('show');
      this.action='logout'
    },
    checkNavigation: function(){
      //basically if going back takes the user to login, they're going to be auto logged out...
      //so we want to make the user aware of this.
    },
    modalConfirm: function(){
      $('#myModal').modal('hide');
      switch(this.action){
        case 'logout':
          this.logout();
          break;
        default:
          break;
      }
    }
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
</style>
