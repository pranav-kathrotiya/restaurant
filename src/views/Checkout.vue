<template>
  <div class="checkout-page pt-20">
    <!-- Header -->
    <section class="section-padding bg-gradient-dark text-white">
      <div class="container-custom text-center">
        <h1 class="heading-primary text-white mb-6">Checkout</h1>
        <p class="text-lg text-white text-opacity-90">
          Complete your order and get your delicious food delivered.
        </p>
      </div>
    </section>

    <!-- Checkout Content -->
    <section class="section-padding bg-cream-50">
      <div class="container-custom">
        <div v-if="cartStore.items.length === 0" class="text-center py-16">
          <div class="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-shopping-cart text-5xl text-gray-400"></i>
          </div>
          <h2 class="heading-secondary mb-4">Your cart is empty</h2>
          <p class="text-body mb-8">
            Add some items to your cart before checking out.
          </p>
          <router-link to="/menu" class="btn-primary text-lg px-8 py-4">
            Browse Menu
          </router-link>
        </div>

        <div v-else class="grid lg:grid-cols-3 gap-8">
          <!-- Checkout Form -->
          <div class="lg:col-span-2">
            <form @submit.prevent="placeOrder" class="space-y-8">
              <!-- Delivery Information -->
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2 class="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                  <i class="fas fa-map-marker-alt mr-2 text-primary-500"></i>
                  Delivery Information
                </h2>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-charcoal-700 mb-2">Full Name *</label>
                    <input v-model="form.name" type="text" required class="form-input">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-charcoal-700 mb-2">Phone Number *</label>
                    <input v-model="form.phone" type="tel" required class="form-input">
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-charcoal-700 mb-2">Email Address</label>
                    <input v-model="form.email" type="email" class="form-input">
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-charcoal-700 mb-2">Delivery Address *</label>
                    <textarea v-model="form.address" rows="3" required class="form-input"></textarea>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-charcoal-700 mb-2">Landmark</label>
                    <input v-model="form.landmark" type="text" class="form-input">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-charcoal-700 mb-2">Pincode *</label>
                    <input v-model="form.pincode" type="text" required class="form-input">
                  </div>
                </div>
              </div>

              <!-- Payment Method -->
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2 class="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                  <i class="fas fa-credit-card mr-2 text-primary-500"></i>
                  Payment Method
                </h2>

                <div class="space-y-4">
                  <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input v-model="form.paymentMethod" type="radio" value="cod" class="mr-4">
                    <div class="flex items-center">
                      <i class="fas fa-money-bill text-green-500 text-xl mr-3"></i>
                      <div>
                        <div class="font-medium">Cash on Delivery</div>
                        <div class="text-sm text-charcoal-600">Pay when your order arrives</div>
                      </div>
                    </div>
                  </label>

                  <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input v-model="form.paymentMethod" type="radio" value="upi" class="mr-4">
                    <div class="flex items-center">
                      <i class="fas fa-mobile-alt text-blue-500 text-xl mr-3"></i>
                      <div>
                        <div class="font-medium">UPI Payment</div>
                        <div class="text-sm text-charcoal-600">Pay via UPI apps</div>
                      </div>
                    </div>
                  </label>

                  <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input v-model="form.paymentMethod" type="radio" value="card" class="mr-4">
                    <div class="flex items-center">
                      <i class="fas fa-credit-card text-purple-500 text-xl mr-3"></i>
                      <div>
                        <div class="font-medium">Credit/Debit Card</div>
                        <div class="text-sm text-charcoal-600">Secure online payment</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Special Instructions -->
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2 class="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                  <i class="fas fa-sticky-note mr-2 text-primary-500"></i>
                  Special Instructions
                </h2>
                <textarea v-model="form.instructions" 
                         rows="3" 
                         placeholder="Any special requests or delivery instructions..."
                         class="form-input"></textarea>
              </div>

              <!-- Place Order Button -->
              <div class="text-center">
                <button type="submit" 
                        :disabled="isPlacingOrder"
                        class="btn-primary text-lg px-12 py-4">
                  <span v-if="!isPlacingOrder">
                    <i class="fas fa-check mr-2"></i>Place Order
                  </span>
                  <div v-else class="flex items-center">
                    <div class="spinner mr-2"></div>Placing Order...
                  </div>
                </button>
              </div>
            </form>
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 class="font-serif text-xl font-bold text-charcoal-800 mb-6">Order Summary</h3>

              <!-- Items -->
              <div class="space-y-3 mb-6">
                <div v-for="item in cartStore.items" :key="item.id"
                     class="flex justify-between items-center text-sm">
                  <div class="flex-1">
                    <span class="font-medium">{{ item.name }}</span>
                    <span class="text-charcoal-600"> x {{ item.quantity }}</span>
                  </div>
                  <span class="font-semibold">₹{{ item.price * item.quantity }}</span>
                </div>
              </div>

              <!-- Totals -->
              <div class="space-y-3 border-t pt-4">
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
                  <span class="text-charcoal-600">Tax</span>
                  <span class="font-semibold">₹{{ cartStore.tax }}</span>
                </div>
                <div class="border-t pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span class="text-primary-600">₹{{ cartStore.total }}</span>
                </div>
              </div>

              <!-- Estimated Delivery -->
              <div class="mt-6 p-4 bg-green-50 rounded-lg">
                <div class="flex items-center space-x-2 text-sm text-green-700">
                  <i class="fas fa-clock"></i>
                  <span class="font-medium">Estimated delivery: 25-35 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useToast } from 'vue-toastification'

const router = useRouter()
const cartStore = useCartStore()
const toast = useToast()

const isPlacingOrder = ref(false)

const form = ref({
  name: '',
  phone: '',
  email: '',
  address: '',
  landmark: '',
  pincode: '',
  paymentMethod: 'cod',
  instructions: ''
})

async function placeOrder() {
  if (!form.value.name || !form.value.phone || !form.value.address || !form.value.pincode) {
    toast.error('Please fill in all required fields')
    return
  }

  isPlacingOrder.value = true

  try {
    // Simulate order placement
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Order placed successfully! You will receive a confirmation shortly.')
    cartStore.clearCart()
    router.push('/')
  } catch (error) {
    toast.error('Failed to place order. Please try again.')
  } finally {
    isPlacingOrder.value = false
  }
}
</script>
