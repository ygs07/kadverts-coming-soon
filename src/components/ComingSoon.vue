<template>
 <div>

        <div class="w3-display-container" style="background-color:#30B1A7">

            <img src="../assets/coming-soon-3.png" class="w3-hide-small w3-show-large" alt="banner" style="width:100%;height:1000px">

            <div style="git " class="w3-hide-large w3-show-small w3-container">
            <img src="../assets/coming-soon-svg.svg" alt="banner" style="width:100%;height:1000px" class=" w3-image">
            </div>
            <div class="w3-display-middle w3-center">

             

                <Countdown class="w3-text-red w3-hide-small mt-5" deadline="December 10, 2020" style="margin-top:20em"></Countdown>
                <Countdown class="w3-text-red w3-large mt-5 w3-hide-large w3-show-small" deadline="December 10, 2020" style="margin-top:13em;width:250px"></Countdown>



            </div>
            <div class="w3-display-bottommiddle">


            <div class="w3-container w3-center mb-5" style="margin-bottom:10em">
            <section class="mb-4">
            <a href="https://twitter.com/_InspireWorks_" >
                <img src="../assets/coming-soon/twitter.svg" class="hover-animate" alt="twitter" height="50">
            </a>

            <a href="https://www.instagram.com/_inspireworks_/" >
                <img src="../assets/coming-soon/instagram.svg" class="hover-animate" alt="instagram" height="50">
            </a>

            <a href="https://www.iworks.icu/"> <img src="../assets/Artboard-3.svg" width="50" class="hover-animate w3-grayscale-max"></a>
          </section>
            <br>
            <a onclick="document.getElementById('id01').style.display='block'"  class="w3-btn w3-round-xxlarge  w3-black w3-hover-orange w3-margin-top">
                Let Me Know When You Launch
            </a>

            </div>

            </div>
        </div>

        <div class="w3-container w3-padding-64 w3-center" style="background-color:#ED5F18">
            <h1 class="w3-center w3-xxxlarge" style="font-family:poppins-black"> Advertising...</h1>

                <div class="w3-container w3-padding-64">
                <div class="w3-third w3-center">
                <h2  style="font-family:poppins-regular;"> Kaduna-Based <br> Events</h2>
                </div>
                <div class="w3-third">
                <h2 style="font-family:poppins-regular"> Kaduna-Based <br> Businesses</h2>
                </div>
                <div class="w3-third">
                <h2 style="font-family:poppins-regular">Online Events</h2>
                </div>

                </div>


            <h1 class="w3-center w3-xxxlarge" style="font-family:poppins-black"> Stay Tuned For The Launch</h1>

            <h4> Let Me Know When You Launch</h4>

        
        </div>


  <div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-round">
      <div class="w3-container w3-padding-large">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-btn w3-display-topright hover-animate">&times;</span>
        <div class="w3-container w3-padding-32">
       <label>Name</label>
        <input v-model="name" class="w3-input w3-border w3-round-xxlarge w3-margin-bottom hover-animate" type="text">

        <label>Email Address</label>
        <input v-model="email" class="w3-input w3-border w3-round-xxlarge hover-animate" type="email">
        </div>
        <div>
        <div v-if="isSending">
         <fingerprint-spinner
          :animation-duration="1000"
          :size="60"
          :color="'#ff1d5e'"
        />
         </div>
         <div v-else>
         <button @click="onSubscribe" class="w3-btn w3-blue-grey w3-center">Register</button>
       
         </div>
         </div>
      </div>
    </div>
  </div>




</div>
</template>

<script>
import Countdown from 'vuejs-countdown'
 import { FingerprintSpinner } from 'epic-spinners'
 import axios from 'axios'
export default {
  methods: {
    onSubscribe () { 
      axios.post('/subscribe', {
        name : this.name,
        email : this.email
      })
      .then( response => {
        console.log(response.data)
      });
      this.isSending = true
      return null 
    },
  },
  data () {
    return {
      name: "",
      email: "",
      showModal : false,
      isSending : false
    }
  },
  components: { Countdown,  FingerprintSpinner },
  name: 'ComingSoon',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

 
<style scoped>

@font-face {
  font-family: poppins-black;
  src: url('../assets/fonts/Poppins/Poppins-Black.ttf');
}

@font-face {
  font-family: poppins-regular;
  src: url('../assets/fonts/Poppins/Poppins-Medium.ttf');
}


.hover-animate {
    transition: box-shadow .3s;
  /* width: 300px;
  height: 500px;
  margin: 50px; */
  border-radius:10px;
 /* border: 1px solid #ccc; */
  /* background: #fff; */
  /* float: left; */

}
.hover-animate:hover {
  box-shadow: 0 0 11px rgb(254,176,98);
}

</style>
