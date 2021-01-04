<template>
  <div id="app">
    <b-alert variant="warning" :show="showChainAlert" class="m-0">
      <span v-if="getChainName">Your currently selected chain is {{getChainName}} (a testnet).</span>

      <span v-if="!getChainName">
        Please connect with <a href="https://metamask.io/" target="_blank" class="alert-link">MetaMask</a> 
        or some other Ethereum wallet.
      </span>
    </b-alert>

    <Navbar />

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters("accounts", ["getChainName", "isUserConnected"]),

    showChainAlert() {
      switch (this.getChainName) {
        case "Mainnet":
          return false;
        default:
          return true;
      }
    }
  },
}
</script>
