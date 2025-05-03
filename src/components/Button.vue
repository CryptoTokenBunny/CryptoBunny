<script setup lang="ts">
defineProps<{
  primary?: boolean;
  text: string;
}>()
</script>

<template>
  <button 
    :class="[
      'font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105',
      primary 
        ? 'bg-pepe-pink text-black hover:bg-pepe-darkpink' 
        : 'bg-pepe-green text-white hover:bg-opacity-90'
    ]"
  >
    {{ text }}
  </button>
</template>