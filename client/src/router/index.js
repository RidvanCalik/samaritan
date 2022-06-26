import { createRouter, createWebHistory } from 'vue-router'
import CurrentTodos from '@/views/CurrentTodos.vue'
import PastTodos from '@/views/PastTodos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CurrentTodos',
      component: CurrentTodos
    }, {
      path: '/PastTodos',
      name: 'PastTodos',
      component: PastTodos
    }
  ]
})

export default router
