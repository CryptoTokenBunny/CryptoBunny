<script setup lang="ts">
import { ref } from 'vue'

const fromAmount = ref('1')
const toAmount = ref('0.0000000')
const slippage = ref('0.5%')
const selectedToken = ref(null)
const isConnected = ref(false)

const connectWallet = () => {
  isConnected.value = true
}

const toggleInformation = (section) => {
  // Logique pour afficher/masquer les informations
}
</script>

<template>
  <div class="swap-container">
    <!-- Boutons en haut -->
    <div class="flex justify-center space-x-4 mb-6">
      <button class="px-6 py-2 bg-pepe-green text-white rounded-full border-2 border-white flex items-center">
        BUY ON OKX
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </button>
      <button class="px-6 py-2 bg-pepe-green text-white rounded-full border-2 border-white">
        DEXTOOLS CHART
      </button>
    </div>

    <!-- Interface de Swap -->
    <div class="max-w-md mx-auto bg-black bg-black rounded-lg p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-white">Swap</h2>
        <button class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>
      </div>

      <!-- From Token Section -->
      <div class="bg-gray-800 rounded-lg p-4 mb-2">
        <div class="flex justify-between mb-2">
          <span class="text-gray-400">Max</span>
          <span class="text-gray-400">0</span>
        </div>
        <div class="flex justify-between">
          <input
            v-model="fromAmount"
            type="text"
            class="bg-transparent text-white text-xl font-bold w-1/2 focus:outline-none"
          />
          <button class="bg-gray-700 text-white px-3 py-1 rounded-lg flex items-center">
            ETH
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Swap Arrow -->
      <div class="flex justify-center -my-2 relative z-10">
        <div class="bg-pepe-green rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </div>
      </div>

      <!-- To Token Section -->
      <div class="bg-gray-800 rounded-lg p-4 mt-2">
        <div class="flex justify-between mb-2">
          <span class="text-gray-400"></span>
          <span class="text-gray-400">0</span>
        </div>
        <div class="flex justify-between">
          <input
            v-model="toAmount"
            type="text"
            class="bg-transparent text-white text-xl font-bold w-1/2 focus:outline-none"
            readonly
          />
          <button class="bg-gray-700 text-white px-3 py-1 rounded-lg flex items-center">
            Select a token
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Slippage -->
      <div class="flex justify-between items-center mt-4 text-white text-sm">
        <span>Max slippage: {{ slippage }}</span>
        <button class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <!-- Information Section -->
      <div class="mt-4 border border-pepe-green rounded-lg overflow-hidden">
        <div class="flex justify-between items-center p-3 bg-pepe-green bg-opacity-20">
          <span class="text-white">MORE INFORMATION</span>
          <button class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div class="p-3 border-t border-pepe-green border-opacity-30">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="text-white mr-1">Minimum Received</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-white">—</span>
          </div>
        </div>
        
        <div class="p-3 border-t border-pepe-green border-opacity-30">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="text-white mr-1">Gas Fee</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-white">—</span>
          </div>
        </div>
        
        <div class="p-3 border-t border-pepe-green border-opacity-30">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="text-white mr-1">Price Impact</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-white">—</span>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <button class="w-full bg-gray-700 text-white py-3 rounded-lg mt-4 font-bold">
        Insufficient liquidity
      </button>

      <!-- Footer -->
      <div class="flex justify-between items-center mt-4 text-sm">
        <div class="flex items-center text-gray-400">
          <span>Powered By</span>
        </div>
        <span class="text-pepe-green">Support</span>
      </div>
    </div>

    <!-- Connect Wallet Button -->
    <div class="flex justify-center mt-8">
      <button 
        @click="connectWallet"
        class="px-8 py-3 bg-white text-pepe-green font-bold rounded-full border-2 border-pepe-green"
      >
        CONNECT YOUR WALLET
      </button>
    </div>
  </div>
</template>

<style scoped>
.swap-container {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
}

/* Definir la couleur verte de Pepe */
:root {
  --pepe-green: #4CAF50;
}

.bg-pepe-green {
  background-color: var(--pepe-green);
}

.text-pepe-green {
  color: var(--pepe-green);
}

.border-pepe-green {
  border-color: var(--pepe-green);
}
</style>