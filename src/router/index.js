import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    name: 'Memo',
    path: '/memo',
    component: () => import('@/views/Memo.vue'),
  },
  {
    name: 'Jadwal',
    path: '/jadwal',
    component: () => import('@/views/Jadwal.vue'),
  },
  {
    name: 'Blank',
    path: '/blank',
    component: () => import('@/views/Blank.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
