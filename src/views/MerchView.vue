<template>
  <NavbarComponent/>
  <section class="min-h-screen bg-black text-white py-16 px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 animate-fade-up">Nossos Produtos</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="(produto, index) in produtos" :key="index" class="bg-gradient-to-br from-purple-700 to-pink-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 animate-fade-up">
          <img :src="produto.imagem" :alt="produto.nome" class="w-full h-48 object-cover rounded-xl mb-4">
          <h3 class="text-2xl font-semibold mb-2">{{ produto.nome }}</h3>
          <p class="text-white/80 mb-4">{{ produto.descricao }}</p>
          <span class="block text-lg font-bold">R$ {{ produto.preco.toFixed(2) }}</span>
          <button class="mt-4 bg-white text-black py-2 px-4 rounded-xl hover:bg-pink-300 transition">Comprar</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';

const produtos = [
  {
    nome: 'Camiseta Collab',
    descricao: 'Estampa exclusiva com tecido premium.',
    preco: 89.90,
    imagem: '/produtos/camiseta1.png'
  },
  {
    nome: 'Moletom Edição Limitada',
    descricao: 'Confortável e estiloso para dias frios.',
    preco: 159.90,
    imagem: '/produtos/moletom1.png'
  },
  {
    nome: 'Boné Logo Oficial',
    descricao: 'Ideal para completar o look urbano.',
    preco: 49.90,
    imagem: '/produtos/bone1.png'
  },
  {
    nome: 'Ecobag Collab',
    descricao: 'Sustentável e cheia de atitude.',
    preco: 29.90,
    imagem: '/produtos/ecobag1.png'
  },
  {
    nome: 'Adesivo Vintage',
    descricao: 'Para personalizar tudo com estilo.',
    preco: 9.90,
    imagem: '/produtos/adesivo1.png'
  },
  {
    nome: 'Caneca Logo Collab',
    descricao: 'Design minimalista e resistente.',
    preco: 39.90,
    imagem: '/produtos/caneca1.png'
  }
]
</script>

<style scoped>
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.8s ease-out;
}
</style>