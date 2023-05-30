import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../pages/index.vue'),
        children: []
      },
      {
        path: '/compareDemo',
        name: 'compareDemo',
        component: () => import('../pages/compareDemo/compareDemo.vue'),
        children: []
      },
      {
        path: '/dragDemo',
        name: 'dragDemo',
        component: () => import('../pages/dragDemo/dragDemo.vue'),
        children: []
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
