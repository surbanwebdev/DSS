<template>
  <div>
    <Navigation />
    <div class="container mt-5">
      <p class="treatment-group my-2">Treatment Group: Standard Care</p>
      <div class="card p-3">
        <p class="bold-heading mb-1">
          Based on your assessment of signs and symptoms, is congestion:
        </p>
        <div class="radio-box-wrap">
          <!-- PARENT LABEL WILL ACTIVATE INNER RADIO BUTTON -->
          <label
            v-on:click="congestionLevel = 'low'"
            class="form-check-label"
            for="Low"
            style="width: 100%"
          >
            <div
              class="
                radio-box
                d-flex
                align-items-center
                justify-content-between
                mt-3
              "
            >
              <div class="content-left d-flex align-items-center">
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M16.0001 0.493118C7.52393 0.493118 0.62793 7.38912 0.62793 15.8653C0.62793 18.265 1.16585 20.5638 2.22665 22.6982C2.33225 22.911 2.51945 23.072 2.74569 23.1446C2.97193 23.217 3.21769 23.1955 3.42761 23.0838L6.70697 21.343C7.13673 21.1152 7.29993 20.5821 7.07209 20.1526C6.84393 19.7232 6.31081 19.5597 5.88169 19.7878L3.42697 21.0909C2.73737 19.4387 2.38857 17.6848 2.38857 15.8653C2.38857 13.4979 2.99721 11.2704 4.06441 9.32928L4.72489 9.84096C4.88521 9.96512 5.07529 10.0253 5.26345 10.0253C5.52649 10.0253 5.78665 9.90784 5.96009 9.68416C6.25801 9.29984 6.18793 8.74688 5.80329 8.44896L5.01609 7.83904C7.32713 4.6848 10.961 2.56064 15.0942 2.28736V3.04224C15.0942 3.52832 15.4884 3.92256 15.9745 3.92256C16.4606 3.92256 16.8548 3.52832 16.8548 3.04224V2.2832C21.0385 2.544 24.714 4.7024 27.0321 7.90656L26.3323 8.44864C25.9479 8.74624 25.8778 9.29952 26.1754 9.68384C26.3489 9.90784 26.609 10.025 26.8721 10.025C27.0602 10.025 27.25 9.9648 27.4106 9.84064L27.9764 9.40224C29.0187 11.3261 29.6113 13.5277 29.6113 15.865C29.6113 17.6947 29.2586 19.4576 28.562 21.1174L25.8295 19.775C25.3934 19.5606 24.8657 19.7411 24.6513 20.177C24.4369 20.6134 24.6171 21.1408 25.0535 21.3555L28.5972 23.0963C28.722 23.1578 28.8545 23.1866 28.9847 23.1866C29.3086 23.1866 29.6199 23.0074 29.7738 22.6976C30.8347 20.5635 31.3726 18.2646 31.3726 15.8646C31.3722 7.3888 24.4762 0.493118 16.0001 0.493118Z"
                      fill="#009C6D"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M17.6624 18.4437L16.4779 6.76198C16.4507 6.49436 16.2221 6.28617 15.9515 6.28154C15.6804 6.27701 15.455 6.47728 15.4313 6.74386L14.3948 18.3504C14.3934 18.3637 14.3928 18.377 14.3929 18.3904C14.3855 19.0379 14.6545 19.5605 15.1174 19.8629C15.3413 20.0092 15.6106 20.104 15.9161 20.1365C16.3813 20.1858 16.7955 20.0638 17.1147 19.784C17.4589 19.482 17.6592 19.0147 17.665 18.5014C17.6652 18.482 17.6645 18.4627 17.6624 18.4437Z"
                      fill="#009C6D"
                      fill-opacity="0.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="32" height="23.68" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Low to Moderate
              </div>
              <div class="content-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="Low"
                  />
                </div>
              </div>
            </div>
          </label>
          <!-- PARENT LABEL WILL ACTIVATE INNER RADIO BUTTON -->
          <label
            v-on:click="congestionLevel = 'high'"
            class="form-check-label"
            for="High"
            style="width: 100%"
          >
            <div
              class="
                radio-box
                d-flex
                align-items-center
                justify-content-between
                mt-3
              "
            >
              <div class="content-left d-flex align-items-center">
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M16.0001 0.493134C7.52393 0.493134 0.62793 7.38913 0.62793 15.8653C0.62793 18.265 1.16585 20.5639 2.22665 22.6983C2.33225 22.9111 2.51945 23.072 2.74569 23.1447C2.97193 23.217 3.21769 23.1955 3.42761 23.0839L6.70697 21.3431C7.13673 21.1152 7.29993 20.5821 7.07209 20.1527C6.84393 19.7232 6.31081 19.5597 5.88169 19.7879L3.42697 21.0909C2.73737 19.4387 2.38857 17.6848 2.38857 15.8653C2.38857 13.4979 2.99721 11.2704 4.06441 9.32929L4.72489 9.84097C4.88521 9.96513 5.07529 10.0253 5.26345 10.0253C5.52649 10.0253 5.78665 9.90785 5.96009 9.68417C6.25801 9.29985 6.18793 8.74689 5.80329 8.44897L5.01609 7.83905C7.32713 4.68481 10.961 2.56065 15.0942 2.28737V3.04225C15.0942 3.52833 15.4884 3.92257 15.9745 3.92257C16.4606 3.92257 16.8548 3.52833 16.8548 3.04225V2.28321C21.0385 2.54401 24.714 4.70241 27.0321 7.90657L26.3323 8.44865C25.9479 8.74625 25.8778 9.29953 26.1754 9.68385C26.3489 9.90785 26.609 10.025 26.8721 10.025C27.0602 10.025 27.25 9.96481 27.4106 9.84065L27.9764 9.40225C29.0187 11.3261 29.6113 13.5277 29.6113 15.865C29.6113 17.6947 29.2586 19.4576 28.562 21.1175L25.8295 19.7751C25.3934 19.5607 24.8657 19.7411 24.6513 20.177C24.4369 20.6135 24.6171 21.1408 25.0535 21.3555L28.5972 23.0963C28.722 23.1578 28.8545 23.1866 28.9847 23.1866C29.3086 23.1866 29.6199 23.0074 29.7738 22.6976C30.8347 20.5635 31.3726 18.2647 31.3726 15.8647C31.3722 7.38881 24.4762 0.493134 16.0001 0.493134Z"
                      fill="#CC0505"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M15.0754 16.7593L26.7653 17.8612C27.0331 17.8864 27.2816 17.7025 27.3386 17.4379C27.3956 17.1728 27.2428 16.9128 26.9859 16.8379L15.8002 13.5717C15.7875 13.5678 15.7746 13.5646 15.7614 13.5621C15.1276 13.4294 14.5628 13.592 14.1764 13.9875C13.9895 14.1788 13.8443 14.4246 13.7532 14.7181C13.6146 15.1648 13.6541 15.5948 13.8667 15.9622C14.0962 16.3584 14.5159 16.6455 15.0183 16.7506C15.0373 16.7546 15.0564 16.7577 15.0754 16.7593Z"
                      fill="#CC0505"
                      fill-opacity="0.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="32" height="23.68" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                High
              </div>
              <div class="content-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="High"
                  />
                </div>
              </div>
            </div>
          </label>
        </div>
        <div v-if="congestionLevel == 'low'" class="assessment-btn">
          <router-link
            :to="{
              name: 'SuggestedTreatment',
              params: { congestionLevel: this.congestionLevel },
            }"
          >
            <button type="submit" class="btn btn-primary mt-3">
              Submit Assessment
            </button>
          </router-link>
        </div>
        <div v-if="congestionLevel == 'high'" class="assessment-btn">
          <router-link
            :to="{
              name: 'SuggestedTreatment',
              params: { congestionLevel: this.congestionLevel },
            }"
          >
            <button type="submit" class="btn btn-primary mt-3">
              Submit Assessment
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";

export default {
  components: {
    Navigation,
    Footer,
  },
  name: "SymptomSeverity",
  data: function () {
    return {
      congestionLevel: "",
    };
  },
};
</script>

<style scoped>
.card {
  border: none;
  background: #fff;
  text-align: left;
}

.card > p,
.treatment-group {
  margin-bottom: 0;
}

.treatment-group {
  text-align: right;
  font-size: 0.875rem;
}

.button-wrap {
  width: 100%;
}

.radio-box {
  width: 100%;
  padding: 1.5rem 1rem;
  border: 1px solid #979797;
  border-radius: 0.25rem;
}

svg {
  margin-right: 0.75rem;
}
</style>
