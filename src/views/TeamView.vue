<template>
  <NavbarComponent />
  <section class="min-h-screen bg-black text-white py-20 px-6">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-4">Nossa Equipe</h2>
      <p class="text-lg text-gray-300 mb-12">Criatividade em grupo, impacto em massa.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div
          v-for="(membro, index) in membros"
          :key="membro.nome"
          @click="toggleAtivo(index)"
        >
          <div
            class="relative overflow-hidden group shadow-lg cursor-pointer transition-all duration-500 ease-in-out mx-auto"
            :class="ativo === index 
              ? 'rounded-2xl h-80 max-w-sm w-full' 
              : 'rounded-full h-52 w-52 sm:w-52 md:w-64'"
          >
            <img 
              :src="membro.foto" 
              :alt="membro.nome" 
              class="absolute inset-0 w-full h-full object-cover transition duration-300 brightness-90 group-hover:brightness-50 rounded-full group-hover:rounded-2xl"
            >
            <div
              class="absolute inset-0 flex flex-col justify-center items-center text-white bg-opacity-50 px-4 text-center transition duration-300"
              :class="ativo === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
            >
              <h3 class="text-xl font-semibold">{{ membro.nome }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const ativo = ref(null)

function toggleAtivo(index) {
  ativo.value = ativo.value === index ? null : index
}

const membros = [  { nome: "Ana Júlia de Sousa", foto: "./team/Ana Júlia de Sousa.jpg" },
  { nome: "Beatriz Briner", foto: "./team/Beatriz Briner.jpg" },
  { nome: "Beatriz Vitória", foto: "./team/Beatriz Vitória.jpg" },
  { nome: "Bia Jácome", foto: "./team/Bia Jácome.jpg" },
  { nome: "Elaine Cristina", foto: "./team/Elaine Cristina.jpg" },
  { nome: "Evedjina Ottilus", foto: "./team/Evedjina Ottilus.jpg" },
  { nome: "Evelin Almeida", foto: "./team/Evelin Almeida.jpg" },
  { nome: "Gabriel Manfron", foto: "./team/Gabriel Manfron.JPG" },
  { nome: "Gean Carlos da Luz", foto: "./team/Gean Carlos da Luz.jpg" },
  { nome: "Giovanna de Oliveira Rosa", foto: "./team/Giovanna de Oliveira Rosa.jpg" },
  { nome: "Giovanna Varela", foto: "./team/Giovanna Varela.jpg" },
  { nome: "Gustavo Henrique Belão", foto: "./team/Gustavo Henrique Belão.jpg" },
  { nome: "Helena Diniz", foto: "./team/Helena Diniz.jpg" },
  { nome: "Heloísa Oliveira Fernandes", foto: "./team/Heloisa Oliveira Fernandes.JPG" },
  { nome: "Ingrid Gonçalves França da Cunha", foto: "./team/Ingrid Gonçalves França da Cunha.jpg" },
  { nome: "Isabele Larissa Dias", foto: "./team/Isabele Larissa Dias.jpg" },
  { nome: "Isabella Schultz", foto: "./team/Isabella Schultz_.jpg" },
  { nome: "Isadora Sumeck", foto: "./team/Isadora Sumeck.jpg" },
  { nome: "Jean Alves", foto: "./team/Jean Alves.jpg" },
  { nome: "Júlia Chaves", foto: "./team/Júlia Chaves.jpg" },
  { nome: "Kauã Santiago", foto: "./team/Kauã Santiago.jpg" },
  { nome: "Kemilly Gomes", foto: "./team/Kemilly Gomes.jpg" },
  { nome: "Máira Abdalla", foto: "./team/Maíra Abdalla.jpg" },
  { nome: "Manuela Ravanello", foto: "./team/Manuela Ravanello_.jpg" },
  { nome: "Maria Eduarda de Almeida", foto: "./team/Maria Eduarda de Almeida_.jpg" },
  { nome: "Maria Eduarda dos Santos", foto: "./team/Maria Eduarda dos Santos_.jpg" },
  { nome: "Maria Eduarda Dutra", foto: "./team/Maria Eduarda Dutra_.jpg" },
  { nome: "Mariah do Nascimento", foto: "./team/Mariah do Nascimento.jpeg" },
  { nome: "Matheus Gabriel", foto: "./team/Matheus Gabriel_.jpg" },
  { nome: "Melissa Falavinha", foto: "./team/Melissa Falavinha.jpg" },
  { nome: "Nathalie Caroline Matias", foto: "./team/Nathalie Caroline Matias.jpg" },
  { nome: "Pablo Gabriel", foto: "./team/Pablo Gabriel.jpg" },
  { nome: "Raoni Botelho", foto: "./team/Raoni Botelho.jpg" },
  { nome: "Rayssa Mendes", foto: "./team/Rayssa Mendes.jpg" },
  { nome: "Sarah Babone", foto: "./team/Sarah Babone.jpg" },
  { nome: "Vinicius Azevedo", foto: "./team/Vinicius Azevedo.jpg" },
  { nome: "Vinicius Krupp", foto: "./team/Vinicius Krupp.jpg" }
]

</script>

<style scoped>
section {
  scroll-behavior: smooth;
}
</style>