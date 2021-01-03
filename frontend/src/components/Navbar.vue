<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-3">

    <router-link to="/">
      <b-navbar-brand href="/">My dApp</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/set-value"><b-nav-item href="/set-value">Set value</b-nav-item></router-link>
        <router-link to="/profile"><b-nav-item href="/profile">Profile</b-nav-item></router-link>

        <b-nav-item v-if="!isUserConnected" @click="login">Connect your wallet</b-nav-item>
        <b-nav-item v-if="isUserConnected">{{getActiveAccount}}</b-nav-item>
        <b-nav-item v-if="isUserConnected" @click="logout">Disconnect</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters("accounts", ["getActiveAccount", "isUserConnected", "getWeb3Modal", "getWeb3"]),
  },
  created() {
    this.$store.dispatch("accounts/initWeb3Modal");
    this.$store.dispatch("accounts/ethereumListener");
  },
  methods: {
    ...mapActions("accounts", ["connectWeb3Modal", "disconnectWeb3Modal"]),

    login() {
      this.connectWeb3Modal();
    },

    logout() {
      this.disconnectWeb3Modal();
    }
  }
}
</script>
