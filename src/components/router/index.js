import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Menu from '../pages/Menu.vue'
import LoginAdmin from '../pages/LoginAdmin.vue'
import ValidateCode from '../pages/ValidateCode.vue'
import AdminPanel from '../pages/AdminPanel.vue'
import DishInfo from '../pages/DishInfo.vue'
import EditDish from '../pages/EditDish.vue'
import DrinkInfo  from '../pages/DrinkInfo.vue'
import EditDrink from '../pages/EditDrink.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/meny',
      name: 'menu',
      component: Menu
    },
    {
      path: '/login',
      name: 'login',
      component: LoginAdmin
    },
    {
      path: '/ValidateCode',
      name: 'ValidateCode',
      component: ValidateCode
    },
    {
      path: '/AdminPanel',
      name: 'AdminPanel',
      component: AdminPanel
    },
    {
      path: '/DishInfo/:id',
      name: 'DishInfo',
      component: DishInfo
    },
    {
      path: '/EditDish/:id',
      name: 'EditDish',
      component: EditDish
    },
    {
      path: '/EditDrink/:id',
      name: 'EditDrink',
      component: EditDrink
    },
    {
      path: '/DrinkInfo/:id',
      name: 'DrinkInfo',
      component: DrinkInfo
    },

   {
     path: '/:catchAll(.*)',
     name: 'ErrorPage',
     component: Home
  }
  ]
})

export default router
