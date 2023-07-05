import { createRouter, createWebHistory } from 'vue-router'
import Cuaca from '../views/Cuaca.vue'
import lokasi from '../views/Lokasi.vue'
import stopwatch from '../views/Stopwatch.vue'
import foto from '../views/Foto.vue'
import bgk from '../views/BGK.vue'

const routes = [
  {
    path: '/',
    name: 'cuaca',
    component: Cuaca
  },
  {
    path: '/lokasi',
    name: 'lokasi',
    component: lokasi
  },
  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: stopwatch
  },
  {
    path: '/foto',
    name: 'foto',
    component: foto
  },
  {
    path: '/bgk',
    name: 'bgk',
    component: bgk
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
