<template>
  <b-container>
    <h1>Main page</h1>

    <p>This is a starter template with a dummy smart contract (Calc.sol) to jumpstart your project.</p>

    <p>
      <strong>Your current chain:</strong> {{getChainName}}
    </p>

    <router-link v-if="isUserConnected" to="/set-value">
      <b-button size="lg" variant="primary">Go set a new value!</b-button>
    </router-link>

    <b-button v-if="!isUserConnected" size="lg" variant="success" @click="connectWeb3Modal">Connect your wallet!</b-button>

  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Main",
  computed: {
    ...mapGetters("accounts", ["getChainName", "isUserConnected"]),
  },
  methods: {
    ...mapActions("accounts", ["connectWeb3Modal"]),
  }
}
</script>

<style>

</style>