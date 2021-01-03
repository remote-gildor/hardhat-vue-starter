<template>
  <b-container>
    <h1>Main page</h1>

    <p>This is a starter template with a dummy smart contract (Calc.sol) to jumpstart your project.</p>

    <p>
      <strong>Your current chain:</strong> {{getChainName}}
    </p>

    <router-link to="/set-value">
      <b-button size="lg" class="btn-success">Go set a new value!</b-button>
    </router-link>

  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Main",
  computed: {
    ...mapGetters("accounts", ["getChainName"]),
  },
}
</script>

<style>

</style>