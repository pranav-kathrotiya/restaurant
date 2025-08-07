<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop&q=80"
          alt="Delicious food background" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="heading-primary text-white mb-6 animate-fade-in-up">
          Welcome to <span class="text-secondary-400">FlameBite</span>
        </h1>
        <p class="text-xl md:text-2xl text-white mb-8 leading-relaxed animate-fade-in-up stagger-1">
          Savor Every Bite, Delivered Right
        </p>
        <p class="text-lg text-white text-opacity-90 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-2">
          Experience culinary excellence with fresh ingredients, chef-crafted dishes,
          and flavors that ignite your senses. From our kitchen to your doorstep.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
          <router-link to="/menu" class="btn-primary text-lg px-8 py-4 hover:scale-105">
            <i class="fas fa-utensils mr-2"></i>
            Order Now
          </router-link>
          <a href="#featured" class="btn-secondary text-lg px-8 py-4">
            <i class="fas fa-arrow-down mr-2"></i>
            Explore Menu
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Featured Dishes Section -->
    <section id="featured" class="section-padding bg-cream-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-secondary">Featured Dishes</h2>
          <p class="text-body max-w-2xl mx-auto">
            Discover our chef's signature creations, crafted with the finest ingredients
            and bursting with incredible flavors.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="dish in menuStore.featuredDishes" :key="dish.id" class="food-card group">
            <div class="relative overflow-hidden">
              <img :src="dish.image" :alt="dish.name"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute top-4 left-4">
                <span v-for="tag in dish.tags" :key="tag"
                  class="inline-block px-3 py-1 bg-primary-500 text-white text-xs rounded-full mr-2">
                  {{ tag }}
                </span>
              </div>
              <div class="absolute top-4 right-4">
                <div class="bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <span class="text-sm font-bold text-charcoal-800">₹{{ dish.price }}</span>
                </div>
              </div>
            </div>

            <div class="p-6">
              <h3 class="font-serif text-xl font-semibold text-charcoal-800 mb-2">{{ dish.name }}</h3>
              <p class="text-charcoal-600 text-sm mb-4 line-clamp-2">{{ dish.description }}</p>

              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 text-sm text-charcoal-500">
                  <i class="fas fa-clock"></i>
                  <span>{{ dish.prepTime }}</span>
                </div>
                <button @click="addToCart(dish)" class="btn-primary text-sm px-4 py-2 flex items-center space-x-2">
                  <i class="fas fa-plus"></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/menu" class="btn-primary text-lg px-8 py-4">
            View Full Menu
          </router-link>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-secondary">How It Works</h2>
          <p class="text-body max-w-2xl mx-auto">
            Ordering from FlameBite is simple and convenient. Follow these easy steps to enjoy our delicious food.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(step, index) in howItWorksSteps" :key="step.id" class="text-center group">
            <div class="relative mb-6">
              <div
                class="w-20 h-20 bg-gradient-flame rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <i :class="step.icon" class="text-2xl text-white"></i>
              </div>
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-secondary-400 text-charcoal-800 rounded-full flex items-center justify-center font-bold text-sm">
                {{ index + 1 }}
              </div>
            </div>
            <h3 class="font-serif text-xl font-semibold text-charcoal-800 mb-4">{{ step.title }}</h3>
            <p class="text-charcoal-600 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Daily Specials Section -->
    <section class="section-padding bg-charcoal-800 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Today's Specials</h2>
          <p class="text-charcoal-300 text-lg max-w-2xl mx-auto">
            Limited time offers on our premium dishes. Don't miss out on these exceptional flavors.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="special in menuStore.dailySpecials" :key="special.id"
            class="bg-charcoal-700 rounded-2xl overflow-hidden hover-lift">
            <div class="relative">
              <img :src="special.image" :alt="special.name" class="w-full h-40 object-cover">
              <div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Special
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-lg font-semibold text-white mb-2">{{ special.name }}</h3>
              <p class="text-charcoal-300 text-sm mb-4 line-clamp-2">{{ special.description }}</p>
              <div class="flex items-center justify-between">
                <div class="text-secondary-400 font-bold text-lg">₹{{ special.price }}</div>
                <button @click="addToCart(special)"
                  class="bg-white text-charcoal-800 px-4 py-2 rounded-full hover:bg-secondary-100 transition-colors font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Reviews Section -->
    <section class="section-padding bg-cream-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-secondary">What Our Customers Say</h2>
          <p class="text-body max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their FlameBite
            experience.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="review in customerReviews" :key="review.id"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <img :src="review.avatar" :alt="review.name" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="font-semibold text-charcoal-800">{{ review.name }}</h4>
                <div class="flex text-secondary-400">
                  <i v-for="star in 5" :key="star" class="fas fa-star text-sm"
                    :class="star <= review.rating ? 'text-secondary-400' : 'text-gray-300'"></i>
                </div>
              </div>
            </div>
            <p class="text-charcoal-600 italic">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="section-padding bg-gradient-flame text-white">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="font-serif text-3xl md:text-4xl font-bold mb-6">Stay in the Loop</h2>
          <p class="text-white text-opacity-90 text-lg mb-8">
            Be the first to know about new dishes, special offers, and exclusive events.
            Join our newsletter and never miss a delicious update!
          </p>

          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input v-model="newsletterEmail" type="email" placeholder="Enter your email address" required
              class="flex-1 px-4 py-3 rounded-full text-charcoal-800 placeholder-charcoal-500 focus:outline-none focus:ring-2 focus:ring-white">
            <button type="submit"
              class="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              :disabled="isSubscribing">
              <span v-if="!isSubscribing">Subscribe</span>
              <div v-else class="flex items-center justify-center">
                <div class="spinner border-primary-600"></div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useCartStore } from '@/stores/cart'
import { useToast } from 'vue-toastification'

const menuStore = useMenuStore()
const cartStore = useCartStore()
const toast = useToast()

const newsletterEmail = ref('')
const isSubscribing = ref(false)

const howItWorksSteps = [
  {
    id: 1,
    title: 'Choose Your Dish',
    description: 'Browse our delicious menu and select your favorite dishes from our wide variety of options.',
    icon: 'fas fa-utensils'
  },
  {
    id: 2,
    title: 'Order Online',
    description: 'Add items to your cart, customize your order, and proceed to secure checkout with multiple payment options.',
    icon: 'fas fa-shopping-cart'
  },
  {
    id: 3,
    title: 'Get Delivered',
    description: 'Relax while our team prepares your fresh meal and delivers it right to your doorstep in 25-35 minutes.',
    icon: 'fas fa-truck'
  }
]

const customerReviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1555792954-e5de02071902?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    comment: 'Absolutely amazing food! The Wagyu beef was cooked to perfection, and the delivery was super fast. Will definitely order again!'
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    comment: 'FlameBite has become my go-to for special dinners. The quality is consistently excellent, and their customer service is outstanding.'
  },
  {
    id: 3,
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    comment: 'The best restaurant delivery service I\'ve tried! Fresh ingredients, creative dishes, and beautiful presentation every time.'
  }
]

function addToCart(dish) {
  cartStore.addItem(dish)
  toast.success(`${dish.name} added to cart!`)
}

async function subscribeNewsletter() {
  if (!newsletterEmail.value.trim()) return

  isSubscribing.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success(`Thank you! We've added ${newsletterEmail.value} to our newsletter.`)
    newsletterEmail.value = ''
  } catch (error) {
    toast.error('Failed to subscribe. Please try again.')
  } finally {
    isSubscribing.value = false
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hero {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@media (max-width: 768px) {
  .hero {
    background-attachment: scroll;
  }
}
</style>
