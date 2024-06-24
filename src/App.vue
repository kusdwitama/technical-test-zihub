<template bg-color>
  <div class="bg-background-utama min-h-screen">
    <Navbar/>
    <Sidebar/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Sidebar from './components/Sidebar.vue';

  export default {
    components: {
      Navbar,
      Sidebar,
    },
  };
</script>