<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useCustomCursor } from './composables/useCustomCursor';

onMounted(() => {
  const { initCustomCursor } = useCustomCursor();
  initCustomCursor();
});
</script>

<template>
  <div class="app-container min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.app-container {
  background-color: theme('colors.pepe.cream');
  background-image: url('/grid-bg.svg');
  background-size: 40px 40px;
  background-repeat: repeat;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Supprimer les styles de curseur précédents qui ne fonctionnaient pas */
</style>