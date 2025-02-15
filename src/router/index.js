import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductosView from '@/views/ProductosView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'ListaProductos',
    component: ProductosView
  },
  {
    path: '/registro',
    name: 'RegisterComponent',
    component: () => import('@/components/RegisterComponent.vue')
  },
  {
    path: '/login',
    name: 'LoginComponent',
    component: () => import('@/components/LoginComponent.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
