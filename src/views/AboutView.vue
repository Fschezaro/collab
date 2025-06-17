<template>
  <section class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
    <div class="max-w-4xl text-center animate-fade-in opacity-0 animate-duration-1000 animate-fill-forwards">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-pink-500">Sobre Nós</h1>
      <p class="text-lg md:text-xl text-gray-300 mb-10">
        Somos um time apaixonado por Publicidade e Propaganda, comprometido com a criatividade, inovação e resultados. Unimos estratégia e arte para transformar ideias em experiências memoráveis, tanto no meio digital quanto físico.
      </p>
      <p class="text-lg md:text-xl text-gray-300 mb-10">
        Combinamos design de alto impacto, narrativas envolventes e soluções personalizadas para conectar marcas com seus públicos. Seja em campanhas, branding ou ações interativas, nossa missão é gerar valor e deixar uma marca.
      </p>
      <div class="flex flex-wrap justify-center gap-6 mt-10">
        <RouterLink to="/" class="bg-gradient-to-r from-pink-500 to-purple-700 text-white py-3 px-6 rounded-xl hover:scale-105 transition">Voltar à Página Inicial</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>