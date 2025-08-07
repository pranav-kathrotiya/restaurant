<template>
  <footer class="bg-charcoal-800 text-white">
    <!-- Main Footer Content -->
    <div class="section-padding border-b border-charcoal-600">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Brand Section -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <div class="w-10 h-10 bg-gradient-flame rounded-full flex items-center justify-center">
                <i class="fas fa-fire text-white text-xl"></i>
              </div>
              <div>
                <h3 class="font-serif font-bold text-xl text-white">FlameBite</h3>
                <p class="text-xs text-secondary-400 font-medium">Savor Every Bite</p>
              </div>
            </div>
            <p class="text-charcoal-300 leading-relaxed">
              Experience culinary excellence with fresh ingredients, chef-crafted dishes, 
              and flavors that ignite your senses. Delivered right to your door.
            </p>
            <!-- Social Media -->
            <div class="flex space-x-4 pt-2">
              <a href="#" class="w-10 h-10 bg-charcoal-700 hover:bg-gradient-flame rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-charcoal-700 hover:bg-gradient-flame rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-charcoal-700 hover:bg-gradient-flame rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-charcoal-700 hover:bg-gradient-flame rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h4 class="font-serif font-semibold text-lg text-white">Quick Links</h4>
            <ul class="space-y-3">
              <li v-for="link in quickLinks" :key="link.name">
                <router-link :to="link.to" 
                             class="text-charcoal-300 hover:text-secondary-400 transition-colors duration-200 flex items-center group">
                  <i :class="link.icon" class="w-4 mr-2 group-hover:text-secondary-400"></i>
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="space-y-4">
            <h4 class="font-serif font-semibold text-lg text-white">Contact Us</h4>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <i class="fas fa-map-marker-alt text-primary-500 mt-1"></i>
                <div>
                  <p class="text-charcoal-300">123 Culinary Street</p>
                  <p class="text-charcoal-300">Food District, City 12345</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <i class="fas fa-phone text-primary-500"></i>
                <p class="text-charcoal-300">+91 98765 43210</p>
              </div>
              <div class="flex items-center space-x-3">
                <i class="fas fa-envelope text-primary-500"></i>
                <p class="text-charcoal-300">hello@flamebite.com</p>
              </div>
              <div class="flex items-start space-x-3">
                <i class="fas fa-clock text-primary-500 mt-1"></i>
                <div>
                  <p class="text-charcoal-300">Mon - Sun</p>
                  <p class="text-charcoal-300">11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="space-y-4">
            <h4 class="font-serif font-semibold text-lg text-white">Stay Updated</h4>
            <p class="text-charcoal-300 text-sm">
              Subscribe to get special offers, free giveaways, and updates on new dishes.
            </p>
            <form @submit.prevent="subscribeNewsletter" class="space-y-3">
              <div class="relative">
                <input v-model="email" 
                       type="email" 
                       placeholder="Your email address"
                       required
                       class="w-full px-4 py-3 bg-charcoal-700 text-white placeholder-charcoal-400 border border-charcoal-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-300">
              </div>
              <button type="submit" 
                      class="w-full btn-primary flex items-center justify-center space-x-2"
                      :disabled="isSubscribing">
                <span v-if="!isSubscribing">Subscribe</span>
                <div v-else class="spinner"></div>
                <i v-if="!isSubscribing" class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="py-6">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-charcoal-400 text-sm text-center md:text-left">
            © {{ currentYear }} FlameBite Restaurant. All rights reserved.
          </p>
          <div class="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <a href="#" class="text-charcoal-400 hover:text-secondary-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" class="text-charcoal-400 hover:text-secondary-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" class="text-charcoal-400 hover:text-secondary-400 transition-colors duration-200">Refund Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const email = ref('')
const isSubscribing = ref(false)

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { name: 'Menu', to: '/menu', icon: 'fas fa-utensils' },
  { name: 'About Us', to: '/about', icon: 'fas fa-info-circle' },
  { name: 'Contact', to: '/contact', icon: 'fas fa-phone' },
  { name: 'Cart', to: '/cart', icon: 'fas fa-shopping-cart' },
  { name: 'My Account', to: '/login', icon: 'fas fa-user' }
]

async function subscribeNewsletter() {
  if (!email.value.trim()) return

  isSubscribing.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success(`Thank you! We've added ${email.value} to our newsletter.`)
    email.value = ''
  } catch (error) {
    toast.error('Failed to subscribe. Please try again.')
  } finally {
    isSubscribing.value = false
  }
}
</script>
