<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Welcome to Value Setter!</h1>
    </div>

    <p>This is a starter template with a dummy smart contract (Calc.sol) to jumpstart your project.</p>

    <p v-if="isUserConnected">
      <strong>Your current chain:</strong> {{getChainName}}
    </p>

    <router-link v-if="isUserConnected" to="/set-value">
      <button type="button" class="btn btn-outline-primary btn-lg">Go set a new value!</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters("accounts", ["getChainName", "isUserConnected"]),
  },
}
</script>
