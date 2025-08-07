<template>
  <div class="login-page pt-20">
    <section class="section-padding bg-cream-50 min-h-screen flex items-center">
      <div class="container-custom">
        <div class="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
          <!-- Header -->
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-flame rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-fire text-white text-2xl"></i>
            </div>
            <h1 class="font-serif text-3xl font-bold text-charcoal-800">Welcome Back</h1>
            <p class="text-charcoal-600 mt-2">Sign in to your FlameBite account</p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-charcoal-700 mb-2">Email Address</label>
              <input v-model="form.email" type="email" required placeholder="Enter your email" class="form-input">
            </div>

            <div>
              <label class="block text-sm font-medium text-charcoal-700 mb-2">Password</label>
              <div class="relative">
                <input v-model="form.password" :type="showPassword ? 'text' : 'password'" required
                  placeholder="Enter your password" class="form-input pr-12">
                <button type="button" @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-charcoal-500 hover:text-charcoal-700">
                  <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input v-model="form.rememberMe" type="checkbox" class="mr-2">
                <span class="text-sm text-charcoal-600">Remember me</span>
              </label>
              <a href="#" class="text-sm text-primary-500 hover:text-primary-700">Forgot password?</a>
            </div>

            <button type="submit" :disabled="isLogging" class="w-full btn-primary text-lg py-4">
              <span v-if="!isLogging">Sign In</span>
              <div v-else class="flex items-center justify-center">
                <div class="spinner mr-2"></div>Signing In...
              </div>
            </button>
          </form>

          <!-- Social Login -->
          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-charcoal-500">Or continue with</span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-4">
              <button
                class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <i class="fab fa-google text-red-500 mr-2"></i>
                <span class="text-sm font-medium text-charcoal-700">Google</span>
              </button>
              <button
                class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <i class="fab fa-facebook text-blue-600 mr-2"></i>
                <span class="text-sm font-medium text-charcoal-700">Facebook</span>
              </button>
            </div>
          </div>

          <!-- Sign up link -->
          <div class="text-center mt-8">
            <p class="text-charcoal-600">
              Don't have an account?
              <router-link to="/signup" class="text-primary-500 hover:text-primary-700 font-medium">
                Sign up here
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const toast = useToast()

const showPassword = ref(false)
const isLogging = ref(false)

const form = ref({
  email: '',
  password: '',
  rememberMe: false
})

async function handleLogin() {
  if (!form.value.email || !form.value.password) {
    toast.error('Please fill in all fields')
    return
  }

  isLogging.value = true

  try {
    // Simulate login API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Welcome back! You have been logged in successfully.')
    router.push('/')
  } catch (error) {
    toast.error('Invalid email or password. Please try again.')
  } finally {
    isLogging.value = false
  }
}
</script>
