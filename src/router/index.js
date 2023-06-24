import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Dashboard from '../views/dashboard/index.vue'

// Barang
import TambahBarang from '../views/barang/tambah.vue'
import UpdateBarang from '../views/barang/update.vue'

// Supplier
import TambahSupplier from '../views/supplier/tambah.vue'
import UpdateSupplier from '../views/supplier/update.vue'

Vue.use(VueRouter)

let isNotAuthenticated = (to, from, next) => {
  if (localStorage.getItem('auth')) {
    return next()
  } else {
    return next('/login')
  }
}

let isAuthenticated = (to, from, next) => {
  if (localStorage.getItem('auth')) {
    return next('/')
  } else {
    return next()
  }
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: isAuthenticated
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: isAuthenticated
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: isNotAuthenticated
  },
  // Barang
  {
    path: '/barang/tambah',
    name: 'tambahBarang',
    component: TambahBarang,
    beforeEnter: isNotAuthenticated
  },
  {
    path: '/barang/update/:id',
    name: 'updateBarang',
    component: UpdateBarang,
    beforeEnter: isNotAuthenticated
  },
  // Supplier
  {
    path: '/supplier/tambah',
    name: 'tambahSupplier',
    component: TambahSupplier,
    beforeEnter: isNotAuthenticated
  },
  {
    path: '/supplier/update/:id',
    name: 'updateSupplier',
    component: UpdateSupplier,
    beforeEnter: isNotAuthenticated
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
