<template>
  <nav class="fixed z-50 bg-custom-dark border border-sky-500 rounded-2xl top-3 left-4 right-4">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <img src="/src/assets/logo-zihub.png" class="h-8 ms-3" alt="Zihub" />
        </div>
        <ul class="flex items-center gap-2">
          <li class="p-2 border border-white rounded-lg" @click="toggleFullscreen">
            <font-awesome-icon :icon="isFullscreen ? 'fa-solid fa-compress' : 'fa-solid fa-expand'" class="text-white h-5 w-6" />
          </li>
          <li class="p-2 border border-white rounded-lg" @click="toggleTheme">
            <font-awesome-icon :icon="isDarkMode ? 'fa-solid fa-moon' : 'fa-regular fa-moon'" class="text-white h-5 w-6" />
          </li>
          <li class="p-2 border border-white rounded-lg">
            <font-awesome-icon icon="fa-regular fa-bell" class="text-white h-5 w-6" />
          </li>
          <li class="border-r border-white mx-2 h-8"></li>
          <li class="p-2 border border-white rounded-lg">
            <font-awesome-icon icon="fa-regular fa-circle-user" class="text-white h-5 w-6" />
          </li>
          <li class="flex-1 ms-3 text-white">RSUD Majalengka</li>
          <li>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-white" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      isFullscreen: false,
    };
  },
  methods: {
   toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        this.isFullscreen = true;
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
        this.isFullscreen = false;
      }
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
};
</script>