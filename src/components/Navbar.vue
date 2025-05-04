<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrollingDown = ref(false)
const lastScrollPosition = ref(0)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  
  if (currentScrollPosition < 0) return
  
  // Détection plus précise avec seuil de 100px
  if (currentScrollPosition < lastScrollPosition.value - 10 || currentScrollPosition < 100) {
    // Scroll vers le haut ou position haute
    isScrollingDown.value = false
  } else if (currentScrollPosition > lastScrollPosition.value + 10 && currentScrollPosition > 100) {
    // Scroll vers le bas après 100px
    isScrollingDown.value = true
  }
  
  lastScrollPosition.value = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Augmentation de la hauteur du navbar avec py-4 au lieu de py-2 -->
  <nav 
    class="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-500 ease-in-out"
    :class="{ '-translate-y-full': isScrollingDown }"
  >
    <div class="max-w-7xl mx-auto">
      <div class="bg-pepe-green rounded-full px-6 py-3 flex justify-between items-center shadow-lg">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center" @click="closeMenu">
            <img src="/rabbitIcon.svg" alt="Logo" class="h-8 w-8 mr-2" />
            <span class="text-xl font-bold">RABUCKS</span>
          </router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link to="/" class="font-semibold hover:text-white transition-colors">Home</router-link>
          <router-link to="/about" class="font-semibold hover:text-white transition-colors">About</router-link>
          <router-link to="/tokenomics" class="font-semibold hover:text-white transition-colors">Tokenomics</router-link>
          <router-link to="/roadmap" class="font-semibold hover:text-white transition-colors">Roadmap</router-link>
          <router-link to="/contact" class="font-semibold hover:text-white transition-colors">Contact</router-link>
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
      
      <!-- Mobile Menu - Ajout d'un léger délai et amélioration de l'animation -->
      <div 
        v-if="menuOpen" 
        class="md:hidden absolute left-0 right-0 bg-pepe-pink rounded-b-2xl p-5 shadow-lg transition-all duration-300 ease-in-out"
        :class="{ 'mt-4': !isScrollingDown }"
      >
        <div class="flex flex-col space-y-4">
          <router-link to="/" @click="closeMenu" class="font-semibold hover:text-white transition-colors">Home</router-link>
          <router-link to="/about" @click="closeMenu" class="font-semibold hover:text-white transition-colors">About</router-link>
          <router-link to="/tokenomics" @click="closeMenu" class="font-semibold hover:text-white transition-colors">Tokenomics</router-link>
          <router-link to="/roadmap" @click="closeMenu" class="font-semibold hover:text-white transition-colors">Roadmap</router-link>
          <router-link to="/contact" @click="closeMenu" class="font-semibold hover:text-white transition-colors">Contact</router-link>
          
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
  
  <!-- Ajout d'un élément spacer pour créer plus d'espace entre le header et le contenu -->
  <div class="header-spacer h-24"></div>
</template>

<style scoped>
/* Ajouter des transitions plus fluides */
.router-link-active {
  font-weight: bold;
  color: white;
}

/* S'assurer que le menu mobile s'anime correctement */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Style pour le spacer qui assure qu'il y a assez d'espace entre le navbar et le contenu principal */
.header-spacer {
  width: 100%;
}
</style>