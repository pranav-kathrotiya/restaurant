import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home - FlameBite' }
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      meta: { title: 'Menu - FlameBite' }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: { title: 'Cart - FlameBite' }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      meta: { title: 'Checkout - FlameBite' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: 'About Us - FlameBite' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { title: 'Contact - FlameBite' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'Login - FlameBite' }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { title: 'Sign Up - FlameBite' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'FlameBite - Savor Every Bite, Delivered Right'
  next()
})

export default router
