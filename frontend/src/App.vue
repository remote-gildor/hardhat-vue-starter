<template>
  <div id="app">
    <Navbar />

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
