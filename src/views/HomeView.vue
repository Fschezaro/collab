<template>
  <div class="bg-black text-white font-sans overflow-x-hidden">
    <NavbarComponent/>

    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6" >
      <img src="/public/collab.png" class="h-40 slide-in-left">
      <h1 class="text-3xl md:text-6xl font-bold mb-6 animate-fade-in-up">Somos o futuro da publicidade</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 animate-fade-in-up delay-200">
        Criatividade, inovação e estratégia para transformar ideias em campanhas inesquecíveis.
      </p>
    </section>

    <section class="py-24 px-6 md:px-20 text-center bg-gradient-to-b from-black to-gray-900" >
      <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Quem somos</h2>
      <p class="text-gray-400 max-w-3xl mx-auto text-lg animate-fade-in-up delay-200">
        Uma equipe apaixonada por comunicação criativa, unindo diferentes talentos para criar campanhas, projetos e experiências marcantes. 
        Atuamos em branding, publicidade digital, design e muito mais.
      </p>
    </section>
     <section class="py-24 px-6 md:px-20 text-center bg-gradient-to-b from-gray-900 to-black" >
      <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Transformamos o comum em surpreendente</h2>
      <p class="text-gray-400 max-w-3xl mx-auto text-lg animate-fade-in-up delay-200">
        Aqui, cada projeto nasce do desejo de inovar, provocar e ir além do esperado. 
        Unimos estratégia, criatividade e execução com propósito. Pensamos fora da caixa, desafiamos padrões e buscamos soluções que tenham impacto real, visual marcante e relevância verdadeira. 
        Seja um site, uma campanha ou uma ideia do zero, nosso compromisso é entregar o novo com consistência e personalidade. Porque no mundo do igual, escolhemos ser a diferença.
      </p>
    </section>
    <div class="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 animate-fade-in-up delay-400 mt-30 mx-10">
        <RouterLink to="/about" class="bg-gradient-to-r from-pink-500 to-purple-700 text-white py-3 px-6 rounded-xl hover:scale-105 transition text-center">Sobre</RouterLink>
        <RouterLink to="/mascot" class="bg-gradient-to-r from-pink-500 to-purple-700 text-white py-3 px-6 rounded-xl hover:scale-105 transition text-center">Mascote</RouterLink>
        <RouterLink to="/team" class="bg-gradient-to-r from-pink-500 to-purple-700 text-white py-3 px-6 rounded-xl hover:scale-105 transition text-center">Portfólios</RouterLink>
        <RouterLink to="/merch" class="bg-gradient-to-r from-pink-500 to-purple-700 text-white py-3 px-6 rounded-xl hover:scale-105 transition text-center">Merch</RouterLink>
    </div>

    <section class="py-16 text-center">
      <h2 class="text-2xl font-semibold mb-6 animate-fade-in-up">Siga nossa turma</h2>
      <div class="flex justify-center space-x-6 text-2xl animate-fade-in-up delay-200">
        <a href="#" class="hover:text-pink-400 transition"><i class="fab fa-instagram">Instagram</i></a>
        <a href="#" class="hover:text-pink-400 transition"><i class="fab fa-behance">Instagram</i></a>
        <a href="#" class="hover:text-pink-400 transition"><i class="fab fa-linkedin">Instagram</i></a>
      </div>
    </section>
  </div>
</template>

<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out both;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.slide-in-left {
	-webkit-animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
</style>