<template>
 <div>

        <div class="w3-display-container" style="background-color:#30B1A7">
            <img src="../assets/coming-soon-3.png" class="w3-hide-small w3-show-large" alt="banner" style="width:100%;height:1000px">
            <div style="git " class="w3-hide-large w3-show-small w3-container">
            <img src="../assets/coming-soon-svg.svg" alt="banner" style="width:100%;height:1000px" class=" w3-image">
            </div>
            <div class="w3-display-middle">
                <Countdown class="w3-text-red w3-hide-small mt-5" deadline="December 10, 2020" style="margin-top:20em"></Countdown>
                <Countdown class="w3-text-red w3-large mt-5 w3-hide-large w3-show-small" deadline="December 10, 2020" style="margin-top:13em;width:250px"></Countdown>


            </div>
            <div class="w3-display-bottommiddle">

            <div class="w3-container w3-center mb-5" style="margin-bottom:10em">
            <a href="https://twitter.com/_InspireWorks_" >
                <img src="../assets/coming-soon/twitter.svg" class="hover-animate" alt="banner" height="50">
            </a>

            <a href="https://www.instagram.com/_inspireworks_/" >
                <img src="../assets/coming-soon/instagram.svg" class="hover-animate" alt="banner" height="50">
            </a>

            <a href="https://www.iworks.icu/"> <img src="../assets/Artboard-3.svg" width="50" class="hover-animate w3-grayscale-max"></a>

            </div>

            </div>
        </div>




</div>
</template>

<script>
import Countdown from 'vuejs-countdown'
export default {
  components: { Countdown },
  name: 'ComingSoon',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

 
<style scoped>

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
