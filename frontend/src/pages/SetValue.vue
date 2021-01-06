<template>
  <b-container>

    <b-row class="mt-4 text-center">
      <b-col md="4" offset-md="4">
        <h1>Set a new value!</h1>

        <div class="mb-3">
          <b-card title="Current value">
            <b-card-text>
              <strong>Value:</strong> {{ getNum }}
            </b-card-text>
          </b-card>
        </div>

        <div>
          <b-card title="Set new value">
            <b-card-text>
              
              <b-form @submit.prevent="onSubmit">
                <b-form-group id="input-group-1" label-for="crowdsale-ether-field">

                  <b-form-input 
                    style="text-align:center"
                    id="set-value-field" 
                    v-model="newValue" 
                    type="text" 
                    required 
                    placeholder="0"
                    trim
                  >
                  </b-form-input>

                  <b-button class="mt-2" type="submit" variant="primary">Submit</b-button>
                </b-form-group>
              </b-form>

            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import { ethers } from "ethers";
import { mapGetters } from "vuex";

export default {
  name: "Main",
  computed: {
    ...mapGetters("accounts", ["getActiveAccount", "getProviderEthers"]),
    ...mapGetters("contracts", ["getNum", "getCalcAbi", "getCalcAddress"])
  },
  created() {
    this.$store.dispatch("contracts/fetchNum");
    this.$store.dispatch("contracts/storeCalcAbi");
    this.$store.dispatch("contracts/storeCalcAddress");

    // get the contract instance
    let signer = this.getProviderEthers.getSigner(); 
    this.contract = new ethers.Contract(this.getCalcAddress, this.getCalcAbi, signer);

    let component = this;

    // set event listener
    this.contract.on("NumberSet", (_from, value) => {
      // show a toast
      component.$toasted.show('The new number has been set to ' + value, {
        type: 'success',
        duration: 9000,
        theme: "bubble",
        position: "top-center"
      });

      // refresh the num value
      component.$store.dispatch("contracts/fetchNum");
    });
  },
  data() {
    return {
      newValue: null,
      contract: null
    }
  },
  methods: {
    async onSubmit() {
      await this.contract.setNum(this.newValue);
    }
  }
}
</script>

<style>

</style>