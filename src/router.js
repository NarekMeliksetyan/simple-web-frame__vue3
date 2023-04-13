import { createRouter, createWebHistory } from 'vue-router'
import CardsPage from '@/pages/index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: CardsPage,
      name: '/',
    },
  ],
})
