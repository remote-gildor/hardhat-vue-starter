<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">

      <ul class="nav flex-column">

        <router-link to="/" style="text-decoration: none">
          <li class="nav-item">
            <a class="nav-link" :class="{active:this.$route.name === 'home'}" aria-current="page" href="/">
              <span data-feather="home"></span>
              Main page
            </a>
          </li>
        </router-link>

        <router-link v-if="isUserConnected" to="/set-value" style="text-decoration: none">
          <li class="nav-item">
            <a class="nav-link" :class="{active:this.$route.name === 'setValue'}" href="/set-value">
              <span data-feather="file"></span>
              Set value
            </a>
          </li>
        </router-link>

        <router-link v-if="isUserConnected" to="/profile" style="text-decoration: none">
          <li class="nav-item">
            <a class="nav-link" :class="{active:this.$route.name === 'profile'}" href="/profile">
              <span data-feather="file"></span>
              Profile
            </a>
          </li>
        </router-link>

        <div class="alert alert-warning m-3" v-if="showChainAlert" role="alert">
          <span v-if="getChainName">Your currently selected chain is <strong>{{getChainName}}</strong> (a testnet).</span>

          <span v-if="!getChainName">
            Please <a href="#" @click="connectWeb3Modal" class="alert-link">connect</a> with MetaMask
            or some other Ethereum wallet.
          </span>
        </div>

      </ul>

    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Sidebar",
  computed: {
    ...mapGetters("accounts", ["getChainName", "isUserConnected", "getWeb3Modal"]),

    showChainAlert() {
      switch (this.getChainName) {
        case "Mainnet":
          return false;
        default:
          return true;
      }
    }
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
