<template>
  <div>
    <div id="id01" class="w3-modal">
      <div class="w3-modal-content w3-round w3-animate-top">
        <div class="w3-container w3-padding-large">
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
            />

            <label>Email Address</label>
            <input
              v-model="email"
              class="w3-input w3-border w3-round-xxlarge hover-animate"
              type="email"
            />
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
              <button @click="onSubscribe" class="w3-btn w3-blue-grey w3-round w3-center">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
>
