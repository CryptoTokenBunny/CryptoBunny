<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import FeatureCard from '../components/FeatureCard.vue'
import Button from '../components/Button.vue'
import Loader from '../components/Loader.vue'

const router = useRouter()
const isLoading = ref(true)
const countdown = ref(3)
let timer: number | null = null

// Utilisation de sessionStorage pour persister l'état
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

// Gestion de la navigation
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
      
      <!-- Features Section -->
      <section class="py-12 md:py-20">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="section-title text-center">Why Choose $PEPE?</h2>
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
      <section class="py-12 bg-pepe-pink">
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
              <div class="bg-white p-6 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-pepe-pink">
                <span class="text-3xl">1</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Create Wallet</h3>
              <p>Download MetaMask or your preferred wallet from App Store or Google Play</p>
            </div>
            <div class="text-center">
              <div class="bg-white p-6 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-pepe-pink">
                <span class="text-3xl">2</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Get BASE ETH</h3>
              <p>Transfer ETH to your wallet on Base network or buy directly</p>
            </div>
            <div class="text-center">
              <div class="bg-white p-6 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-pepe-pink">
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