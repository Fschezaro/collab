<template>
  <NavbarComponent/>
  <div class="min-h-screen bg-black text-white px-6 py-12">
    <div class="max-w-5xl mx-auto flex flex-col items-center text-center  animate-fade-in" v-if="show">
      <img src="/mascot.png" alt="Mascote" class="w-60 h-60 rounded-full shadow-2xl border-4 border-pink-500 mb-8 animate-fade-in" />

      <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-700 text-transparent bg-clip-text mb-6 animate-slide-up">
        Conheça nosso Mascote
      </h1>

      <p class="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 animate-fade-in delay-200">
        Nosso mascote é o símbolo da criatividade, da inovação e da energia do nosso time de Publicidade e Propaganda. Ele representa a união de ideias ousadas com execução de alto impacto — sempre com um toque de irreverência e muito carisma.
      </p>

      <div class="flex flex-wrap justify-center gap-6 animate-slide-up delay-300">
        <RouterLink to="/" class="bg-gradient-to-r from-pink-500 to-purple-700 text-white py-3 px-6 rounded-xl hover:scale-105 transition">Voltar à Página Inicial</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavbarComponent from '@/components/NavbarComponent.vue';

const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 50) // Pequeno delay para evitar o \"flash\" no mount
})
</script>


<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}
</style>