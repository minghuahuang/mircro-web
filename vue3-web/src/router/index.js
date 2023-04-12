import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/v3',
    name: 'V3',
    component: () => import('../views/V3.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router