<template>
  <nav class="flex flex-col pb-2 justify-center items-center gap-y-8">
    <img src="./assets/logo-1.png" alt="logo">
    <div class="flex flex-row justify-center items-center rounded-3xl gap-x-1 bg-black-500 text-grey-500 p-1 group">
      <router-link to="/" class="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-black-500 hover:bg-grey-500 rounded-3xl" :class="{ 'text-black-500 bg-white-500': !$route.path || $route.path === '/' }">Home</router-link>
      <div class="flex flex-row justify-center items-center px-4 py-2 gap-x-1 group transition-colors duration-300 ease-in-out hover:text-black-500 hover:bg-grey-500 rounded-3xl" :class="{ 'text-black-500 bg-white-500': $route.path === '/project' }">
        <span class="text-sm bg-grey-500 text-black-500 rounded-full px-1 transition-all duration-300 ease-in-out transform hover:-translate-x-1">12</span>
        <router-link to="/project">Project</router-link>
      </div>
      <router-link to="/about" class="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-black-500 hover:bg-grey-500 rounded-3xl" :class="{ 'text-black-500 bg-white-500': $route.path === '/about' }">About</router-link>
      <router-link to="/contact" class="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-black-500 hover:bg-grey-500 rounded-3xl" :class="{ 'text-black-500 bg-white-500': $route.path === '/contact' }">Contact</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>

</style>
