<template>
  <div class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="section-title text-center mb-12">Tokenomics</h1>
      
      <div class="bg-white rounded-2xl p-8 shadow-md mb-12">
        <h2 class="text-2xl font-bold mb-6">Token Distribution</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div class="mb-6">
              <h3 class="text-lg font-semibold mb-2">Initial Supply:</h3>
              <p class="text-2xl font-bold">100,000,000,000 $PEPE</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-2">Distribution:</h3>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <div class="w-4 h-4 rounded-full bg-pepe-pink mr-2"></div>
                  <span><strong>40%</strong> - Liquidity Pool</span>
                </li>
                <li class="flex items-center">
                  <div class="w-4 h-4 rounded-full bg-pepe-green mr-2"></div>
                  <span><strong>25%</strong> - Marketing & Development</span>
                </li>
                <li class="flex items-center">
                  <div class="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  <span><strong>15%</strong> - Team (locked for 6 months)</span>
                </li>
                <li class="flex items-center">
                  <div class="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                  <span><strong>10%</strong> - Ecosystem Growth</span>
                </li>
                <li class="flex items-center">
                  <div class="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                  <span><strong>10%</strong> - Community Rewards</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-center justify-center">
            <!-- This would be a pie chart in a real implementation -->
            <div class="w-48 h-48 rounded-full border-8 border-pepe-pink relative flex items-center justify-center bg-gradient-to-br from-pepe-pink via-pepe-green to-blue-500">
              <div class="absolute w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span class="font-bold text-center">$PEPE<br/>Token</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl p-8 shadow-md mb-12">
        <h2 class="text-2xl font-bold mb-6">Transaction Taxes</h2>
        
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <div class="p-4 bg-pepe-cream rounded-lg border-2 border-pepe-pink flex-1">
            <h3 class="text-xl font-bold mb-2">Buy Tax: 4%</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="mr-2">⚡</span>
                <span><strong>1%</strong> - Reflections to Holders</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">📈</span>
                <span><strong>2%</strong> - Marketing</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔄</span>
                <span><strong>1%</strong> - Liquidity</span>
              </li>
            </ul>
          </div>
          
          <div class="p-4 bg-pepe-cream rounded-lg border-2 border-pepe-pink flex-1">
            <h3 class="text-xl font-bold mb-2">Sell Tax: 4%</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="mr-2">⚡</span>
                <span><strong>1%</strong> - Reflections to Holders</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">📈</span>
                <span><strong>2%</strong> - Marketing</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔄</span>
                <span><strong>1%</strong> - Liquidity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl p-8 shadow-md">
        <h2 class="text-2xl font-bold mb-4">Contract Information</h2>
        
        <div class="p-4 bg-gray-100 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
          <p>0x1234567890abcdef1234567890abcdef12345678</p>
        </div>
        
        <div class="flex flex-wrap gap-4">
          <a href="#" class="btn-primary inline-block">View on Etherscan</a>
          <a href="#" class="btn-secondary inline-block">View on Dextools</a>
        </div>
      </div>
    </div>
  </div>
</template>