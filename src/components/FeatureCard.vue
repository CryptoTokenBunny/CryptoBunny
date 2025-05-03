<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon: string;
}>()
</script>

<template>
  <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-pepe-pink">
    <div class="flex items-center mb-4">
      <span class="text-3xl mr-3">{{ icon }}</span>
      <h3 class="text-xl font-bold">{{ title }}</h3>
    </div>
    <p>{{ description }}</p>
  </div>
</template>