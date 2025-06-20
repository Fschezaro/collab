<template>
  <nav class="bg-black text-white shadow-lg fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/">
            <img class="h-10 w-auto" src="/collab.png" alt="Logo" />
          </RouterLink>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <ul class="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li><RouterLink to="/" class="hover:text-pink-500 transition">Início</RouterLink></li>
          <li><RouterLink to="/mascot" class="hover:text-pink-500 transition">Mascote</RouterLink></li>
          <!-- <li><RouterLink to="/about" class="hover:text-pink-500 transition">Sobre</RouterLink></li> -->
          <li><RouterLink to="/merch" class="hover:text-pink-500 transition">Merch</RouterLink></li>
          <li><RouterLink to="/team" class="hover:text-pink-500 transition">Portifólios</RouterLink></li>
        </ul>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="fade-slide">
      <div v-if="isMobileMenuOpen" class="md:hidden px-4 pb-4 space-y-2 text-white text-lg font-medium bg-black">
        <ul class="space-y-2">
          <li><RouterLink to="/" class="block hover:text-pink-500 transition">Início</RouterLink></li>
          <li><RouterLink to="/mascot" class="hover:text-pink-500 transition">Mascote</RouterLink></li>
          <!-- <li><RouterLink to="/about" class="hover:text-pink-500 transition">Sobre</RouterLink></li> -->
          <li><RouterLink to="/merch" class="hover:text-pink-500 transition">Merch</RouterLink></li>
          <li><RouterLink to="/team" class="hover:text-pink-500 transition">Portifólios</RouterLink></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>