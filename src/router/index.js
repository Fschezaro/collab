import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '@/views/TeamView.vue'
import MascotView from '@/views/MascotView.vue'
import MerchView from '@/views/MerchView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/mascot',
      name: 'mascot',
      component: MascotView,
    },
    {
      path: '/merch',
      name: 'merch',
      component: MerchView,
    },
  ],
})

export default router
