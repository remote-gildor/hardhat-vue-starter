<template>
  <b-container>

    <b-row class="mt-4 text-center">
      <b-col md="4" offset-md="4">
        <h1>Set a new value!</h1>

        <div class="mb-3">
          <b-card title="Current value">
            <b-card-text>
              <strong>Value:</strong> {{ getValue }}
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
import { mapGetters } from "vuex";

export default {
  name: "Main",
  computed: {
    ...mapGetters("accounts", ["activeAccount"]),
    ...mapGetters("contracts", ["getContractData"]),

    getValue() {
      /*
      let value = this.getContractData({
        contract: "Value",
        method: "getValue"
      });

      if (value === "loading") return "0";
      
      return value
      */
     return 0;
    }
  },
  created() {
    this.$store.dispatch("contracts/fetchNum");
  },
  data() {
    return {
      newValue: null
    }
  },
  methods: {
    onSubmit() {
      /*
      this.drizzleInstance.contracts['Value'].methods['setValue'].cacheSend(
        this.newValue,
        {
          from: this.activeAccount
        }
      )*/
    }
  }
}
</script>

<style>

</style>