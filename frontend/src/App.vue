<template>
  <div>

    <Navbar />

    <div class="container-fluid">
      <div class="row">

        <Sidebar />

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

          <keep-alive>
            <router-view />
          </keep-alive>

        </main>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
