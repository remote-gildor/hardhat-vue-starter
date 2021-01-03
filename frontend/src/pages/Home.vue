<template>
  <b-container>
    <h1>Main page</h1>

    <p>This dApp allows you to read and set the value in the Calc.sol smart contract.</p>

    <router-link to="/set-value">
      <b-button size="lg" class="btn-success">Go set a new value!</b-button>
    </router-link>

  </b-container>
</template>

<script>
export default {
  name: "Main",
}
</script>

<style>

</style>