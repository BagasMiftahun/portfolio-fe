<template>
  <nav class="flex flex-col pb-2 justify-center items-center gap-y-8 max-w-6xl mx-auto">
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
  <footer class="py-12 max-w-6xl mx-auto">
    <div class="flex flex-col gap-y-24">
      <div class="flex flex-col gap-y-12 items-center">
        <p class="font-medium text-5xl text-black-500">Let’s talk!</p>
        <button class="rounded-full bg-black-500 text-white-500 font-medium text-lg p-5">
          bagasmiftahunaim@gmail.com ↗
        </button>
      </div>
      <div class="flex flex-row items-center justify-between mt-24">
        <p>2023 © — Made by Djectstudio</p>
        <nav>
          <ul class="flex justify-between gap-x-10">
            <li><a href="#" class="text-blue-500 hover:text-blue-700">LinkedIn</a></li>
            <li><a href="#" class="text-purple-500 hover:text-purple-700">Instagram</a></li>
            <li><a href="#" class="text-gray-500 hover:text-gray-700">GitHub</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 10s linear infinite;
}
</style>
