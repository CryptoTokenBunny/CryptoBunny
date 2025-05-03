<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <section class="py-12 md:py-20 overflow-hidden relative">
    <!-- Stars decorations -->
    <div class="absolute top-20 left-20 text-pepe-pink text-4xl">✨</div>
    <div class="absolute top-10 left-1/2 text-pepe-pink text-2xl">✨</div>
    
    <div class="max-w-7xl mx-auto px-4 relative">
      <div class="flex flex-col items-center text-center z-10 relative">
        <!-- CTA Button -->
        <div class="mb-12">
          <Button primary text="Secure your $PEPE LEGACY" />
        </div>
        
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to<br />
          <span class="gradient-text">THE BILLIONAIRE'S GAME</span>
        </h1>
        
        <!-- Subheading -->
        <p class="text-xl md:text-2xl mb-8 max-w-2xl">
          $Pepe the Billionaire leads the new era of Web3 legends.<br />
          Hold strong. Earn bigger. Celebrate louder.
        </p>
        
        <!-- Live Now Button -->
        <div class="mb-12">
          <Button text="LIVE NOW ON BASE" />
        </div>
        
        <!-- Characters -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-6">
          <div class="animate-float">
            <img src="/pepe-bunny.png" alt="Bunny Character" class="h-64 w-auto" />
          </div>
          <div class="animate-float animation-delay-1000">
            <img src="/pepe-frog.png" alt="Pepe Frog Character" class="h-64 w-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>