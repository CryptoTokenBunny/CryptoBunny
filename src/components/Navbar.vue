<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 px-4 py-2">
    <div class="max-w-7xl mx-auto">
      <div class="bg-pepe-pink rounded-full px-4 py-2 flex justify-between items-center">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center" @click="closeMenu">
            <img src="/pepe-icon.svg" alt="$PEPE Logo" class="h-8 w-8 mr-2" />
            <span class="text-xl font-bold">$PEPE</span>
          </router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link to="/" class="font-semibold hover:text-white transition-colors">Home</router-link>
          <router-link to="/about" class="font-semibold hover:text-white transition-colors">About</router-link>
          <router-link to="/tokenomics" class="font-semibold hover:text-white transition-colors">Tokenomics</router-link>
          <router-link to="/roadmap" class="font-semibold hover:text-white transition-colors">Roadmap</router-link>
        </div>
        
        <!-- Social Icons -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="https://twitter.com" target="_blank" class="hover:opacity-80 transition-opacity">
            <img src="/twitter-icon.svg" alt="Twitter" class="h-6 w-6" />
          </a>
          <a href="https://youtube.com" target="_blank" class="hover:opacity-80 transition-opacity">
            <img src="/youtube-icon.svg" alt="YouTube" class="h-6 w-6" />
          </a>
        </div>
        
        <!-- Mobile menu button -->
        <button @click="toggleMenu" class="md:hidden flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden absolute left-0 right-0 bg-pepe-pink rounded-b-2xl p-4 shadow-lg">
        <div class="flex flex-col space-y-4">
          <router-link to="/" @click="closeMenu" class="font-semibold hover:text-white transition-colors">Home</router-link>
          <router-link to="/about" @click="closeMenu" class="font-semibold hover:text-white transition-colors">About</router-link>
          <router-link to="/tokenomics" @click="closeMenu" class="font-semibold hover:text-white transition-colors">Tokenomics</router-link>
          <router-link to="/roadmap" @click="closeMenu" class="font-semibold hover:text-white transition-colors">Roadmap</router-link>
          
          <div class="flex space-x-4 pt-2">
            <a href="https://twitter.com" target="_blank" class="hover:opacity-80 transition-opacity">
              <img src="/twitter-icon.svg" alt="Twitter" class="h-6 w-6" />
            </a>
            <a href="https://youtube.com" target="_blank" class="hover:opacity-80 transition-opacity">
              <img src="/youtube-icon.svg" alt="YouTube" class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>