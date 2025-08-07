<template>
  <nav class="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="[
    isScrolled ? 'bg-white shadow-lg' : (isHomePage ? 'bg-transparent' : 'bg-white shadow-lg'),
    isMenuOpen ? 'bg-white' : ''
  ]">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div
            class="w-10 h-10 bg-gradient-flame rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <i class="fas fa-fire text-white text-xl"></i>
          </div>
          <div>
            <h1 class="font-serif font-bold text-xl"
              :class="isHomePage ? (isScrolled || isMenuOpen ? 'text-charcoal-800' : 'text-white') : 'text-charcoal-800'">
              FlameBite
            </h1>
            <p class="text-xs text-secondary-500 font-medium hidden sm:block">
              Savor Every Bite
            </p>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link v-for="link in navLinks" :key="link.name" :to="link.to"
            class="nav-link font-medium transition-all duration-300 relative"
            :class="isHomePage ? (isScrolled ? 'text-charcoal-700 hover:text-primary-500' : 'text-white hover:text-secondary-300') : 'text-charcoal-700 hover:text-primary-500'"
            active-class="nav-link-active">
            {{ link.name }}
          </router-link>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-4">
          <!-- Cart Button -->
          <button @click="cartStore.openCart()"
            class="relative p-2 rounded-full transition-all duration-300 hover:scale-110"
            :class="isHomePage ? (isScrolled || isMenuOpen ? 'text-charcoal-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-20') : 'text-charcoal-700 hover:bg-gray-100'">
            <i class="fas fa-shopping-cart text-xl"></i>
            <span v-if="cartStore.itemCount > 0"
              class="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {{ cartStore.itemCount }}
            </span>
          </button>

          <!-- User Menu / Login -->
          <div class="hidden sm:flex items-center space-x-2">
            <router-link to="/login" class="px-4 py-2 rounded-full font-medium transition-all duration-300"
              :class="isHomePage ? (isScrolled || isMenuOpen ? 'text-charcoal-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-20') : 'text-charcoal-700 hover:bg-gray-100'">
              Login
            </router-link>
            <router-link to="/signup" class="btn-primary text-sm px-4 py-2">
              Sign Up
            </router-link>
          </div>

          <!-- Mobile Menu Toggle -->
          <button @click="toggleMobileMenu" class="lg:hidden p-2 rounded-md transition-all duration-300"
            :class="isHomePage ? (isScrolled || isMenuOpen ? 'text-charcoal-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-20') : 'text-charcoal-700 hover:bg-gray-100'">
            <i class="fas text-xl" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <div v-if="isMenuOpen" class="lg:hidden border-t border-gray-200 bg-white">
          <div class="py-4 space-y-2">
            <router-link v-for="link in navLinks" :key="link.name" :to="link.to" @click="closeMobileMenu"
              class="block px-4 py-3 text-charcoal-700 hover:bg-gray-50 hover:text-primary-500 transition-colors duration-200 font-medium">
              {{ link.name }}
            </router-link>
            <div class="border-t border-gray-200 pt-4 px-4 space-y-2">
              <router-link to="/login" @click="closeMobileMenu"
                class="block py-2 text-charcoal-700 hover:text-primary-500 font-medium">
                Login
              </router-link>
              <router-link to="/signup" @click="closeMobileMenu" class="block btn-primary text-center">
                Sign Up
              </router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>

  <!-- Cart Sidebar -->
  <CartSidebar />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import CartSidebar from '@/components/ui/CartSidebar.vue'

const cartStore = useCartStore()
const route = useRoute()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const isHomePage = computed(() => route.path === '/')

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Menu', to: '/menu' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' }
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function toggleMobileMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMobileMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #dc2626, #f59e0b);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link-active::after {
  width: 100%;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  max-height: 400px;
}
</style>
