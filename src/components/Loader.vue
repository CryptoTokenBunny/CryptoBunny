<script setup>
import { defineProps, onMounted } from 'vue'

defineProps({
  countdown: {
    type: Number,
    required: true
  }
})

// Initialisation dynamique du composant Lottie
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs'
  script.type = 'module'
  document.head.appendChild(script)
})
</script>

<template>
  <div class="loader-container">
    <dotlottie-player 
      src="https://lottie.host/3b1dde3d-c7bc-4c63-bbda-1dc1fa5c7bf2/L1n4lQL3ZP.lottie"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    >
    </dotlottie-player>
    
    <div class="loading-text">Loading ({{ countdown }}s)</div>
  </div>
</template>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
}

.loading-text {
  color: #2ecc71;
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px; /* Augmenté l'espace pour décoller le texte */
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { opacity: 1 }
  50% { opacity: 0.5 }
  100% { opacity: 1 }
}
</style>
