<template bg-color>
  <div class="bg-main min-h-screen">
    <Navbar/>
    <Sidebar/>
    <Usecaseone/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Sidebar from './components/Sidebar.vue';
  import Usecaseone from './components/Usecaseone.vue';

  export default {
    components: {
      Navbar,
      Sidebar,
      Usecaseone,
    },
  };
</script>