<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-3">

    <router-link to="/">
      <b-navbar-brand href="/">My dApp</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link v-if="isUserConnected" to="/set-value"><b-nav-item href="/set-value">Set value</b-nav-item></router-link>
        <router-link v-if="isUserConnected" to="/profile"><b-nav-item href="/profile">
          Profile <small><em>({{getActiveAccount.substring(0, 7)}}...)</em></small>
        </b-nav-item></router-link>

        <b-nav-item v-if="!isUserConnected" @click="connectWeb3Modal">Connect your wallet</b-nav-item>
        <b-nav-item v-if="isUserConnected" @click="disconnectWeb3Modal">Disconnect</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters("accounts", ["getActiveAccount", "isUserConnected", "getWeb3Modal"]),
  },
  created() {
    this.$store.dispatch("accounts/initWeb3Modal");
    this.$store.dispatch("accounts/ethereumListener");
  },
  methods: {
    ...mapActions("accounts", ["connectWeb3Modal", "disconnectWeb3Modal"]),
  }
}
</script>
