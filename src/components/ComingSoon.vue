<template>
  <div style="background-color: #30b1a7">
    <div class="w3-container w3-center w3-show-small w3-hide-large w3-hide-medium">
      <div class="w3-padding-32">
        <img src="../assets/Scene.svg" alt="banner" width="300" class="w3-image" />
      </div>
      <div style="git " class="w3-padding-32 w3-hide-large w3-show-small w3-container">
        <img
          src="../assets/coming-soon-svg.svg"
          alt="banner"
          style="width: 100%"
          class="w3-image"
        />
        <h2
          style="font-family: poppins-black"
          class="w3-text-red w3-xxlarge w3-hide-large w3-hide-medium mt-5"
        >
          Coming 2021
        </h2>
      </div>

      <div class="w3-container w3-center mb-5" style="margin-bottom: 10em">
        <section class="mb-4">
          <a href="https://twitter.com/_InspireWorks_">
            <img
              src="../assets/coming-soon/twitter.svg"
              class="hover-animate"
              alt="twitter"
              height="50"
            />
          </a>

          <a href="https://www.instagram.com/_inspireworks_/">
            <img
              src="../assets/coming-soon/instagram.svg"
              class="hover-animate"
              alt="instagram"
              height="50"
            />
          </a>

          <a href="https://www.iworks.icu/">
            <img
              src="../assets/Artboard-3.svg"
              width="50"
              class="hover-animate w3-grayscale-max"
          /></a>
        </section>
        <br />
        <a
          onclick="document.getElementById('id01').style.display='block'"
          class="w3-btn w3-round-xxlarge w3-black w3-hover-orange w3-margin-top"
        >
          Let Me Know When You Launch
        </a>
      </div>
    </div>

    <div class="w3-display-container w3-hide-small">
      <img
        src="../assets/coming-soon-3.png"
        class="w3-hide-small w3-show-large"
        alt="banner"
        style="width: 100%; height: 1000px"
      />

      <div class="w3-display-middle w3-center">
        <h2
          style="margin-top: 5em; font-family: poppins-black"
          class="w3-text-red w3-jumbo w3-hide-small mt-5"
        >
          Coming 2021
        </h2>
      </div>
      <div class="w3-display-bottommiddle">
        <div class="w3-container w3-center mb-5" style="margin-bottom: 10em">
          <section class="mb-4">
            <a href="https://twitter.com/_InspireWorks_">
              <img
                src="../assets/coming-soon/twitter.svg"
                class="hover-animate"
                alt="twitter"
                height="50"
              />
            </a>

            <a href="https://www.instagram.com/_inspireworks_/">
              <img
                src="../assets/coming-soon/instagram.svg"
                class="hover-animate"
                alt="instagram"
                height="50"
              />
            </a>

            <a href="https://www.iworks.icu/">
              <img
                src="../assets/Artboard-3.svg"
                width="50"
                class="hover-animate w3-grayscale-max"
            /></a>
          </section>
          <br />
          <a
            onclick="document.getElementById('id01').style.display='block'"
            class="w3-btn w3-round-xxlarge w3-black w3-hover-orange w3-margin-top"
          >
            Let Me Know When You Launch
          </a>
        </div>
      </div>
    </div>

    <div class="w3-container w3-padding-64 w3-center" style="background-color: #ed5f18">
      <h1 class="w3-center w3-xxxlarge" style="font-family: poppins-black">
        Advertising...
      </h1>

      <div class="w3-container w3-content w3-padding-64">
        <div class="w3-third w3-center">
          <img src="../assets/iworks.svg" height="100" />
          <br />
          <h2 class="w3-center" style="font-family: poppins-regular">
            Kaduna-Based <br />
            Events
          </h2>
        </div>
        <div class="w3-third">
          <img src="../assets/iworks.svg" height="100" />
          <br />
          <h2 style="font-family: poppins-regular">
            Kaduna-Based <br />
            Businesses
          </h2>
        </div>
        <div class="w3-third">
          <img src="../assets/iworks.svg" height="100" />
          <br />
          <h2 style="font-family: poppins-regular">Online Events</h2>
        </div>
      </div>
    </div>

    <div class="w3-container w3-center w3-black w3-padding-64">
      <h1 class="w3-center w3-xxxlarge" style="font-family: poppins-black">
        Stay Tuned For The Launch
      </h1>

      <!-- <h4> Let Me Know When You Launch</h4> -->
    </div>

    <div id="id01" class="w3-modal">
      <div class="w3-modal-content w3-round w3-animate-top">
        <div class="w3-container w3-padding-large">
          <h3 v-if="responseMessage" class="w3-center w3-text-green">
            {{ responseMessage }}
          </h3>
          <form action="/action_page.php" @submit.prevent="onSubscribe()">
            <span
              onclick="document.getElementById('id01').style.display='none'"
              class="w3-btn w3-display-topright hover-animate"
              >&times;</span
            >
            <div class="w3-container w3-padding-32">
              <label>Name</label>
              <input
                v-model="name"
                class="w3-input w3-border w3-round-xxlarge w3-margin-bottom hover-animate"
                type="text"
                required
              />

              <label>Email Address</label>
              <input
                v-model="email"
                class="w3-input w3-border w3-round-xxlarge hover-animate"
                type="email"
                required
              />
            </div>
            <div>
              <div v-if="isSending">
                <fingerprint-spinner
                  :animation-duration="1000"
                  :size="40"
                  :color="'#ff1d5e'"
                />
              </div>
              <div v-else>
                <button type="submit" class="w3-btn w3-blue-grey w3-round w3-center">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Countdown from "vuejs-countdown";
import { FingerprintSpinner } from "epic-spinners";
import axios from "axios";
export default {
  methods: {
    async onSubscribe() {
      this.isSending = true;
      await axios
        .post("/api/subscribe", {
          name: this.name,
          email: this.email,
        })
        .catch((error) => {
          if (error.response) {
            this.isSending = false;
          }
        })
        .then((response) => {
          this.isSending = false;
          this.responseMessage = response.data.msg;
          console.log(response.data);
        });
    },
  },
  data() {
    return {
      name: null,
      email: null,
      showModal: false,
      isSending: false,
      responseMessage: null,
    };
  },
  components: { FingerprintSpinner },
  name: "ComingSoon",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@font-face {
  font-family: poppins-black;
  src: url("../assets/fonts/Poppins/Poppins-Black.ttf");
}

@font-face {
  font-family: poppins-regular;
  src: url("../assets/fonts/Poppins/Poppins-Medium.ttf");
}

.hover-animate {
  transition: box-shadow 0.3s;
  /* width: 300px;
  height: 500px;
  margin: 50px; */
  border-radius: 10px;
  /* border: 1px solid #ccc; */
  /* background: #fff; */
  /* float: left; */
}
.hover-animate:hover {
  box-shadow: 0 0 11px rgb(254, 176, 98);
}
</style>
