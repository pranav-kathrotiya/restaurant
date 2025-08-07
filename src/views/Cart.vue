<template>
  <div class="cart-page pt-20">
    <!-- Header -->
    <section class="section-padding bg-gradient-dark text-white">
      <div class="container-custom text-center">
        <h1 class="heading-primary text-white mb-6">Shopping Cart</h1>
        <p class="text-lg text-white text-opacity-90">
          Review your selected dishes and proceed to checkout when ready.
        </p>
      </div>
    </section>

    <!-- Cart Content -->
    <section class="section-padding bg-cream-50">
      <div class="container-custom">
        <div v-if="cartStore.items.length === 0" class="text-center py-16">
          <div class="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-shopping-cart text-5xl text-gray-400"></i>
          </div>
          <h2 class="heading-secondary mb-4">Your cart is empty</h2>
          <p class="text-body mb-8">
            Looks like you haven't added anything to your cart yet. Start browsing our delicious menu!
          </p>
          <router-link to="/menu" class="btn-primary text-lg px-8 py-4">
            Browse Menu
          </router-link>
        </div>

        <div v-else class="grid lg:grid-cols-3 gap-8">
          <!-- Cart Items -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <h2 class="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                Cart Items ({{ cartStore.itemCount }})
              </h2>

              <div class="space-y-4">
                <div v-for="item in cartStore.items" :key="item.id"
                     class="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl">
                  <!-- Item Image -->
                  <div class="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                  </div>

                  <!-- Item Details -->
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-lg text-charcoal-800">{{ item.name }}</h3>
                    <p class="text-charcoal-600 text-sm truncate">{{ item.description }}</p>
                    <p class="text-primary-600 font-bold text-lg">₹{{ item.price }}</p>
                  </div>

                  <!-- Quantity Controls -->
                  <div class="flex items-center space-x-3">
                    <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                            class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                      <i class="fas fa-minus text-charcoal-600"></i>
                    </button>
                    <span class="w-12 text-center font-semibold text-lg">{{ item.quantity }}</span>
                    <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                            class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                      <i class="fas fa-plus text-charcoal-600"></i>
                    </button>
                  </div>

                  <!-- Item Total -->
                  <div class="text-right">
                    <p class="font-bold text-lg text-charcoal-800">₹{{ item.price * item.quantity }}</p>
                    <button @click="cartStore.removeItem(item.id)"
                            class="text-red-500 hover:text-red-700 text-sm mt-1">
                      <i class="fas fa-trash mr-1"></i>Remove
                    </button>
                  </div>
                </div>
              </div>

              <!-- Cart Actions -->
              <div class="flex flex-col sm:flex-row gap-4 mt-8">
                <router-link to="/menu" class="btn-secondary flex-1 text-center">
                  <i class="fas fa-arrow-left mr-2"></i>Continue Shopping
                </router-link>
                <button @click="cartStore.clearCart" 
                        class="px-6 py-3 text-red-600 hover:text-red-700 font-medium">
                  <i class="fas fa-trash mr-2"></i>Clear Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 class="font-serif text-xl font-bold text-charcoal-800 mb-6">Order Summary</h3>

              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="text-charcoal-600">Subtotal</span>
                  <span class="font-semibold">₹{{ cartStore.subtotal }}</span>
                </div>

                <div class="flex justify-between">
                  <span class="text-charcoal-600">Delivery Fee</span>
                  <span class="font-semibold" :class="cartStore.deliveryFee === 0 ? 'text-green-600' : ''">
                    {{ cartStore.deliveryFee === 0 ? 'FREE' : `₹${cartStore.deliveryFee}` }}
                  </span>
                </div>

                <div class="flex justify-between">
                  <span class="text-charcoal-600">Tax (8%)</span>
                  <span class="font-semibold">₹{{ cartStore.tax }}</span>
                </div>

                <div class="border-t pt-4 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span class="text-primary-600">₹{{ cartStore.total }}</span>
                </div>
              </div>

              <!-- Free Delivery Notice -->
              <div v-if="cartStore.subtotal > 0 && cartStore.subtotal < 500" 
                   class="mt-4 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                <i class="fas fa-info-circle mr-1"></i>
                Add ₹{{ 500 - cartStore.subtotal }} more for free delivery!
              </div>

              <!-- Delivery Info -->
              <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-2 text-sm text-charcoal-600 mb-2">
                  <i class="fas fa-clock text-primary-500"></i>
                  <span>Estimated delivery: 25-35 minutes</span>
                </div>
                <div class="flex items-center space-x-2 text-sm text-charcoal-600">
                  <i class="fas fa-shield-alt text-green-500"></i>
                  <span>Safe and contactless delivery</span>
                </div>
              </div>

              <!-- Checkout Button -->
              <router-link to="/checkout" class="w-full btn-primary text-center text-lg py-4 mt-6 block">
                <i class="fas fa-credit-card mr-2"></i>Proceed to Checkout
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>
