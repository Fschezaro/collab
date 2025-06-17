<template>
  <NavbarComponent />
  <section class="min-h-screen bg-black text-white py-20 px-6">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-4">Nossa Equipe</h2>
      <p class="text-lg text-gray-300 mb-12">Conheça os profissionais por trás do nosso time de publicidade e propaganda.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div
          v-for="(membro, index) in membros"
          :key="membro.nome"
          @click="toggleAtivo(index)"
          class="relative rounded-2xl overflow-hidden group shadow-lg transform hover:scale-105 transition duration-300 h-80 cursor-pointer">

          <img 
            :src="membro.foto" 
            :alt="membro.nome" 
            class="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-50 transition duration-300">

          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white bg-opacity-50 px-4 text-center transition duration-300"
            :class="ativo === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
          >
            <h3 class="text-xl font-semibold">{{ membro.nome }}</h3>
            <p class="text-pink-400 text-sm">{{ membro.cargo }}</p>
            <p class="text-gray-300 mt-2 text-sm">{{ membro.descricao }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import NavbarComponent from '@/components/NavbarComponent.vue';

const ativo = ref(null)

function toggleAtivo(index) {
  ativo.value = ativo.value === index ? null : index
}

const membros = [
  {
    nome: 'Nathalie Caroline Matias',
    cargo: 'Designer Sênior',
    descricao: 'Responsável por identidades visuais marcantes.',
    foto: '/team/Nathalie Caroline Matias.JPG'
  },
  {
    nome: 'Ingrid Gonçalves França da Cunha',
    cargo: 'Diretora Criativa',
    descricao: 'Especialista em branding e narrativas visuais.',
    foto: '/team/Ingrid Gonçalves França da Cunha.jpg'
  },
  {
    nome: 'Giovanna de Oliveira Rosa',
    cargo: 'Redatora Publicitária',
    descricao: 'Constrói histórias impactantes e slogans memoráveis.',
    foto: '/team/Giovanna de Oliveira Rosa.JPG'
  },
  {
    nome: 'João Eduardo Guerreiro Martins',
    cargo: 'Desenvolvedor Frontend',
    descricao: 'Transforma ideias em experiências digitais.',
    foto: '/team/João Eduardo Guerreiro Martins.jpg'
  },
  {
    nome: 'Júlia Chaves',
    cargo: 'Social Media',
    descricao: 'Garante presença ativa nas redes com criatividade.',
    foto: '/team/Júlia Chaves.jpg'
  },
  {
    nome: 'Lívia Maria De Souza Favarin',
    cargo: 'Videomaker',
    descricao: 'Capta e edita vídeos com linguagem publicitária.',
    foto: '/team/Lívia Maria De Souza Favarin.jpg'
  }
]
</script>

<style scoped>
section {
  scroll-behavior: smooth;
}
</style>
