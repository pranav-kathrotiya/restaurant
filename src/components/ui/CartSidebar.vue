<template>
  <teleport to="body">
    <!-- Overlay -->
    <transition name="overlay">
      <div v-if="cartStore.isOpen" @click="cartStore.closeCart" class="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
    </transition>

    <!-- Cart Sidebar -->
    <transition name="cart-sidebar">
      <div v-if="cartStore.isOpen"
        class="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">

        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 class="font-serif text-2xl font-bold text-charcoal-800">
            Your Cart
          </h2>
          <button @click="cartStore.closeCart"
            class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
            <i class="fas fa-times text-xl text-charcoal-600"></i>
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto">
          <div v-if="cartStore.items.length === 0"
            class="flex flex-col items-center justify-center h-full text-center p-6">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-shopping-cart text-3xl text-gray-400"></i>
            </div>
            <h3 class="text-xl font-semibold text-charcoal-700 mb-2">Your cart is empty</h3>
            <p class="text-charcoal-500 mb-6">Add some delicious items to get started!</p>
            <button @click="goToMenu" class="btn-primary">
              Browse Menu
            </button>
          </div>

          <div v-else class="p-6 space-y-4">
            <div v-for="item in cartStore.items" :key="item.id"
              class="flex items-center space-x-4 bg-gray-50 rounded-xl p-4">
              <!-- Item Image -->
              <div class="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
              </div>

              <!-- Item Details -->
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-charcoal-800 truncate">{{ item.name }}</h4>
                <p class="text-primary-600 font-bold">₹{{ item.price }}</p>

                <!-- Quantity Controls -->
                <div class="flex items-center space-x-2 mt-2">
                  <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                    class="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <i class="fas fa-minus text-xs text-charcoal-600"></i>
                  </button>
                  <span class="w-8 text-center font-medium">{{ item.quantity }}</span>
                  <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                    class="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <i class="fas fa-plus text-xs text-charcoal-600"></i>
                  </button>
                </div>
              </div>

              <!-- Remove Button -->
              <button @click="cartStore.removeItem(item.id)"
                class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <i class="fas fa-trash text-sm"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Footer with Totals and Checkout -->
        <div v-if="cartStore.items.length > 0" class="border-t border-gray-200 p-6 space-y-4">
          <!-- Order Summary -->
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-charcoal-600">Subtotal</span>
              <span class="font-medium">₹{{ cartStore.subtotal }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-charcoal-600">Delivery Fee</span>
              <span class="font-medium" :class="cartStore.deliveryFee === 0 ? 'text-green-600' : ''">
                {{ cartStore.deliveryFee === 0 ? 'FREE' : `₹${cartStore.deliveryFee}` }}
              </span>
            </div>
            <div class="flex justify-between">
              <span class="text-charcoal-600">Tax</span>
              <span class="font-medium">₹{{ cartStore.tax }}</span>
            </div>
            <div class="border-t pt-2 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span class="text-primary-600">₹{{ cartStore.total }}</span>
            </div>
          </div>

          <!-- Free Delivery Notice -->
          <div v-if="cartStore.subtotal > 0 && cartStore.subtotal < 500"
            class="text-xs text-amber-600 bg-amber-50 p-3 rounded-lg">
            <i class="fas fa-info-circle mr-1"></i>
            Add ₹{{ 500 - cartStore.subtotal }} more for free delivery!
          </div>

          <!-- Estimated Delivery Time -->
          <div class="flex items-center space-x-2 text-sm text-charcoal-600">
            <i class="fas fa-clock text-primary-500"></i>
            <span>Estimated delivery: 25-35 minutes</span>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-3">
            <button @click="goToCart" class="w-full btn-secondary">
              View Cart Details
            </button>
            <button @click="goToCheckout" class="w-full btn-primary">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

function goToMenu() {
  cartStore.closeCart()
  router.push('/menu')
}

function goToCart() {
  cartStore.closeCart()
  router.push('/cart')
}

function goToCheckout() {
  cartStore.closeCart()
  router.push('/checkout')
}
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.cart-sidebar-enter-active,
.cart-sidebar-leave-active {
  transition: transform 0.3s ease;
}

.cart-sidebar-enter-from,
.cart-sidebar-leave-to {
  transform: translateX(100%);
}
</style>
