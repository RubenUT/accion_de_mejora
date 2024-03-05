import { createRouter, createWebHistory } from 'vue-router'
import ExamenList from '@/components/ExamenList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ExamenList',
      component: ExamenList
    }
  ]
})

export default router
