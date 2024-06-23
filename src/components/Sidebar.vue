<template>
<aside class="fixed top-[13%] left-4 w-[14%] h-[85%] pt-3 bg-custom-dark border border-sky-500 rounded-2xl">
   <div class="h-full px-3 pb-4 rounded-lg">
      <ul class="space-y-2 font-medium">
         <li>
            <span class="flex-1 ms-3 text-text text-xs">USE CASES</span>
         </li>
            <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="fa-regular fa-rectangle-list" class="w-10 h-4 ms-4" fill='#979dad' />
               <span class="flex-1 ms-3 whitespace-nowrap">Use Case 1</span>
             </span>
            </li>
         <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="fa-regular fa-rectangle-list" class="w-10 h-4 ms-4" fill='#979dad' />
               <span class="flex-1 ms-3 whitespace-nowrap">Use Case 2</span>
             </span>
            </li>
         <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="fa-regular fa-rectangle-list" class="w-10 h-4 ms-4" fill='#979dad' />
               <span class="flex-1 ms-3 whitespace-nowrap">Use Case 3</span>
             </span>
            </li>
         <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="fa-regular fa-rectangle-list" class="w-10 h-4 ms-4" fill='#979dad' />
               <span class="flex-1 ms-3 whitespace-nowrap">Use Case 4</span>
             </span>
            </li>
         <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="fa-regular fa-rectangle-list" class="w-10 h-4 ms-4" fill='#979dad' />
               <span class="flex-1 ms-3 whitespace-nowrap">Use Case 5</span>
             </span>
         </li>
            <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="fa-regular fa-rectangle-list" class="w-10 h-4 ms-4" fill='#979dad' />
               <span class="flex-1 ms-3 whitespace-nowrap">Use Case 6</span>
             </span>
            </li>
         <li>
            <span class="flex-1 ms-3 text-text text-xs">MASTER DATA</span>
         </li>
            <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="location-dot" class="w-10 h-4 ms-4" fill='#979dad' />
                  <span class="flex-1 ms-3 whitespace-nowrap">Location</span>
               </span>
            </li>
            <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="users" class="w-10 h-4 ms-4" fill='#979dad' /> 
               <span class="flex-1 ms-3 whitespace-nowrap">Organization</span>
            </span>
         </li>
            <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="user-group" class="w-10 h-4 ms-4" fill='#979dad' />
               <span class="flex-1 ms-3 whitespace-nowrap">Patient</span>
            </span>
         </li>
            <li @click="default" class="hover:bg-hover dark:hover:bg-gray-700 cursor-pointer rounded-lg">
               <span class="flex items-center p-0.5 text-text dark:text-white group w-full h-full">
                  <font-awesome-icon icon="user" class="w-10 h-4 ms-4" fill='#979dad' />
               <span class="flex-1 ms-3 whitespace-nowrap">Practitioner</span>
            </span>
         </li>
      </ul>
   </div>
</aside>
</template>

<script>
export default {
  methods: {
    default() {
      window.location.href = '#';
    },
  },
};
</script>