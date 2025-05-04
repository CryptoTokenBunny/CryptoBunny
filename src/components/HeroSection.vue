<script setup lang="ts">
import Button from './Button.vue'
import { onMounted, ref } from 'vue'

// Animation for characters
const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 300)
})
</script>

<template>
  <section class="py-16 md:py-24 overflow-hidden relative">
    <!-- Enhanced background decorations -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 left-20 text-pepe-pink text-4xl animate-pulse">✨</div>
      <div class="absolute top-10 left-1/2 text-pepe-pink text-2xl animate-pulse animation-delay-500">✨</div>
      <div class="absolute bottom-20 right-20 text-pepe-pink text-3xl animate-pulse animation-delay-1000">✨</div>
      <div class="absolute top-40 right-40 text-pepe-pink text-2xl animate-pulse animation-delay-1500">✨</div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 relative">
      <!-- Two-column layout with text on left, images on right -->
      <div class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 z-10 relative">
        
        <!-- Left column: Content -->
        <div class="flex flex-col lg:w-1/2 text-center lg:text-left">
          <!-- Main Heading -->
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span class="gradient-text block mt-2">THE BILLIONAIRE'S GAME</span>
          </h1>
          
          <!-- Subheading -->
          <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0">
            $Pepe the Billionaire leads the new era of Web3 legends.
            Hold strong. Earn bigger. Celebrate louder.
          </p>
          
          <!-- Features List -->
          <div class="flex flex-col gap-4 mb-8 text-left">
            <div class="flex items-center gap-3">
              <span class="text-pepe-green text-2xl">✓</span>
              <span class="text-lg">Daily rewards system</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-pepe-green text-2xl">✓</span>
              <span class="text-lg">Revolutionary tokenomics</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-pepe-green text-2xl">✓</span>
              <span class="text-lg">Community-driven governance</span>
            </div>
          </div>
          
          <!-- Live Now Button -->
          <div class="mb-8">
            <Button text="LIVE NOW ON BASE" />
          </div>
          
          <!-- Social proof -->
          <div class="flex items-center justify-center lg:justify-start gap-6 mt-4">
          </div>
        </div>
        
        <!-- Right column: Images -->
        <div class="lg:w-1/2 relative">
          <div class="relative h-auto w-full">
            <!-- "PEPE'S NEW FRIEND?" text -->
            <div class="text-center w-full mb-6">
              <span class="inline-block bg-pepe-pink bg-opacity-20 text-white font-bold text-2xl px-6 py-2 rounded-full animate-pulse">
                PEPE'S NEW FRIEND?
              </span>
            </div>
            
            <!-- Version verticale: Lapin en haut, grenouille en bas -->
            <div class="flex flex-col items-center gap-10">
              <!-- Lapin (en haut) avec aura ROSE -->
              <div class="relative"
                   :class="[isLoaded ? 'animate-float' : 'opacity-0', 'transition-all duration-700']">
                <!-- Aura lumineuse rose pour le lapin -->
                <div class="absolute inset-0 w-full h-full rounded-full bg-pepe-pink opacity-20 blur-xl -z-10 scale-125"></div>
                <img src="/pepe-bunny.png" alt="Bunny Character" class="h-80 w-auto drop-shadow-2xl relative z-10" />
              </div>
              
              <!-- Grenouille (en bas) avec aura VERTE -->
              <div class="relative mt-4"
                   :class="[isLoaded ? 'animate-float animation-delay-1000' : 'opacity-0', 'transition-all duration-700 delay-300']">
                <!-- Aura lumineuse verte pour la grenouille Pepe -->
                <div class="absolute inset-0 w-full h-full rounded-full bg-pepe-green opacity-20 blur-xl -z-10 scale-125"></div>
                <img src="/pepe-frog.png" alt="Pepe Frog Character" class="h-72 w-auto drop-shadow-xl relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #60BB46 0%, #FAA5D3 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1500 {
  animation-delay: 1.5s;
}

.drop-shadow-2xl {
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.5));
}
</style>