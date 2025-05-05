<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import FeatureCard from '../components/FeatureCard.vue'
import Button from '../components/Button.vue'
import Loader from '../components/Loader.vue'
import SwapInterface from '../components/SwapInterface.vue'

const router = useRouter()
const isLoading = ref(true)
const countdown = ref(3)
let timer: number | null = null

// Gestion adresse
const address = ref('0x532727101955dd16442159440570fa15e8842f4')
const showCheck = ref(false)

const copyAddress = () => {
  navigator.clipboard.writeText(address.value)
    .then(() => {
      showCheck.value = true
      setTimeout(() => showCheck.value = false, 1500)
    })
    .catch(err => console.error('Copy failed:', err))
}

// Gestion loader
const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore')

onMounted(() => {
  if (!hasLoadedBefore) {
    startLoader()
    sessionStorage.setItem('hasLoadedBefore', 'true')
  } else {
    isLoading.value = false
  }
})

onBeforeUnmount(() => {
  if (timer) window.clearInterval(timer)
})

const startLoader = () => {
  isLoading.value = true
  countdown.value = 3
  timer = window.setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0) {
      if (timer) window.clearInterval(timer)
      isLoading.value = false
    }
  }, 1000)
}

router.afterEach((to) => {
  if (to.name === 'home' && hasLoadedBefore) {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <Loader v-if="isLoading" :countdown="countdown" />
    
    <div v-show="!isLoading">
      <HeroSection />

      <!-- Section Swap avec adresse -->
      <section class="py-12 md:py-20">
        <div class="max-w-7xl mx-auto px-4">
          <!-- Bulle améliorée -->
          <div class="flex justify-center mb-20 animate-fade-in-down">
            <div 
              class="group flex items-center gap-3 px-6 py-3 rounded-full border-2 border-pepe-green bg-white/10 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:bg-white/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-pepe-green/10 max-w-[90vw] md:max-w-none"
              @click="copyAddress"
            >
              <!-- Version desktop -->
              <span class="text-pepe-green font-mono text-sm truncate hidden md:inline">
                {{ address }}
              </span>
              
              <!-- Version mobile -->
              <span class="text-pepe-green font-mono text-sm md:hidden">
                {{ address.slice(0, 6) }}...{{ address.slice(-4) }}
              </span>

              <!-- Icône dynamique -->
              <div class="relative w-5 h-5 ml-1 shrink-0">
                <svg
                  v-if="!showCheck"
                  class="w-5 h-5 text-pepe-green transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>

                <svg
                  v-else
                  class="w-5 h-5 text-pepe-green animate-check-pop"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>
          </div>

          <h2 class="section-title text-center mb-8">Swap RABUCKS</h2>
          <SwapInterface />
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-12 md:py-20">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="section-title text-center">Why Choose RABUCKS ?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title="Community Driven"
              description="Join thousands of passionate investors in the fastest growing crypto community."
              icon="👥"
            />
            <FeatureCard
              title="Low Taxes"
              description="Only 4% buy/sell tax, with 1% going to holders and 3% to marketing."
              icon="💸"
            />
            <FeatureCard
              title="Secure & Audited"
              description="Contract audited by top security firms to ensure your investment is safe."
              icon="🔒"
            />
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-12 bg-pepe-green">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <h3 class="text-4xl font-bold mb-2">$1.2M</h3>
              <p class="text-xl">Market Cap</p>
            </div>
            <div class="text-center">
              <h3 class="text-4xl font-bold mb-2">5,000+</h3>
              <p class="text-xl">Holders</p>
            </div>
            <div class="text-center">
              <h3 class="text-4xl font-bold mb-2">$250K</h3>
              <p class="text-xl">24h Volume</p>
            </div>
          </div>
        </div>
      </section>

      <!-- How to Buy Section -->
      <section class="py-12 md:py-20">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="section-title text-center">How to Buy $PEPE</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="bg-white p-6 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-pepe-green">
                <span class="text-3xl">1</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Create Wallet</h3>
              <p>Download MetaMask or your preferred wallet from App Store or Google Play</p>
            </div>
            <div class="text-center">
              <div class="bg-white p-6 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-pepe-green">
                <span class="text-3xl">2</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Get BASE ETH</h3>
              <p>Transfer ETH to your wallet on Base network or buy directly</p>
            </div>
            <div class="text-center">
              <div class="bg-white p-6 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-pepe-green">
                <span class="text-3xl">3</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Swap for $PEPE</h3>
              <p>Go to BaseSwap, paste the $PEPE contract and swap your ETH</p>
            </div>
          </div>
          <div class="text-center mt-12">
            <Button primary text="Buy Now" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
:root {
  --pepe-green: #4CAF50;
}

.bg-pepe-green { background-color: var(--pepe-green); }
.text-pepe-green { color: var(--pepe-green); }
.border-pepe-green { border-color: var(--pepe-green); }

.animate-fade-in-down {
  animation: fadeInDown 0.4s ease-out forwards;
}

.animate-check-pop {
  animation: checkPop 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes checkPop {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  80% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>