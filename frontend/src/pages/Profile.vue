<template>
  <b-container class="text-center">
    <h1>Profile</h1>

    <b-row class="mt-4">
      <b-col md="4" offset-md="4">

        <b-card class="mb-2">

          <Gravatar class="img-fluid" :email="getActiveAccount" default-img="robohash" :size=200 />

          <b-card-text class="mt-2">
            <p>{{ getActiveAccount }}</p>
            <p><strong>Your ETH balance:</strong> {{ Number(getActiveBalanceEth).toFixed(4) }} ETH</p>
          </b-card-text>

        </b-card>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Gravatar from "vue-gravatar";

export default {
  name: 'Profile',
  components: {
    Gravatar
  },
  computed: {
    ...mapGetters("accounts", ["getActiveAccount", "getActiveBalanceEth"]),
  },
  created() {
    this.$store.dispatch("accounts/fetchActiveBalance");
  },
}
</script>
