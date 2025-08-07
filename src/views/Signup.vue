<template>
  <div class="signup-page pt-20">
    <section class="section-padding bg-cream-50 min-h-screen flex items-center">
      <div class="container-custom">
        <div class="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
          <!-- Header -->
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-flame rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-fire text-white text-2xl"></i>
            </div>
            <h1 class="font-serif text-3xl font-bold text-charcoal-800">Join FlameBite</h1>
            <p class="text-charcoal-600 mt-2">Create your account and start ordering</p>
          </div>

          <!-- Signup Form -->
          <form @submit.prevent="handleSignup" class="space-y-6">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-charcoal-700 mb-2">First Name</label>
                <input v-model="form.firstName" 
                       type="text" 
                       required
                       placeholder="First name"
                       class="form-input">
              </div>
              <div>
                <label class="block text-sm font-medium text-charcoal-700 mb-2">Last Name</label>
                <input v-model="form.lastName" 
                       type="text" 
                       required
                       placeholder="Last name"
                       class="form-input">
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-charcoal-700 mb-2">Email Address</label>
              <input v-model="form.email" 
                     type="email" 
                     required
                     placeholder="Enter your email"
                     class="form-input">
            </div>

            <div>
              <label class="block text-sm font-medium text-charcoal-700 mb-2">Phone Number</label>
              <input v-model="form.phone" 
                     type="tel" 
                     required
                     placeholder="Enter your phone number"
                     class="form-input">
            </div>

            <div>
              <label class="block text-sm font-medium text-charcoal-700 mb-2">Password</label>
              <div class="relative">
                <input v-model="form.password" 
                       :type="showPassword ? 'text' : 'password'"
                       required
                       placeholder="Create a password"
                       class="form-input pr-12">
                <button type="button" 
                        @click="showPassword = !showPassword"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-charcoal-500 hover:text-charcoal-700">
                  <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
              <!-- Password strength indicator -->
              <div class="mt-2">
                <div class="text-xs text-charcoal-500 mb-1">Password strength:</div>
                <div class="flex space-x-1">
                  <div class="h-1 flex-1 rounded" 
                       :class="passwordStrength >= 1 ? 'bg-red-500' : 'bg-gray-200'"></div>
                  <div class="h-1 flex-1 rounded" 
                       :class="passwordStrength >= 2 ? 'bg-yellow-500' : 'bg-gray-200'"></div>
                  <div class="h-1 flex-1 rounded" 
                       :class="passwordStrength >= 3 ? 'bg-green-500' : 'bg-gray-200'"></div>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-charcoal-700 mb-2">Confirm Password</label>
              <input v-model="form.confirmPassword" 
                     type="password" 
                     required
                     placeholder="Confirm your password"
                     class="form-input">
              <div v-if="form.confirmPassword && form.password !== form.confirmPassword" 
                   class="text-red-500 text-xs mt-1">
                Passwords do not match
              </div>
            </div>

            <div class="flex items-start">
              <input v-model="form.acceptTerms" 
                     type="checkbox" 
                     required
                     class="mt-1 mr-3">
              <label class="text-sm text-charcoal-600">
                I agree to the 
                <a href="#" class="text-primary-500 hover:text-primary-700">Terms of Service</a> 
                and 
                <a href="#" class="text-primary-500 hover:text-primary-700">Privacy Policy</a>
              </label>
            </div>

            <div class="flex items-start">
              <input v-model="form.newsletter" type="checkbox" class="mt-1 mr-3">
              <label class="text-sm text-charcoal-600">
                Subscribe to our newsletter for special offers and updates
              </label>
            </div>

            <button type="submit" 
                    :disabled="isSigningUp || !canSubmit"
                    class="w-full btn-primary text-lg py-4"
                    :class="!canSubmit ? 'opacity-50 cursor-not-allowed' : ''">
              <span v-if="!isSigningUp">Create Account</span>
              <div v-else class="flex items-center justify-center">
                <div class="spinner mr-2"></div>Creating Account...
              </div>
            </button>
          </form>

          <!-- Social Signup -->
          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-charcoal-500">Or sign up with</span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-4">
              <button class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <i class="fab fa-google text-red-500 mr-2"></i>
                <span class="text-sm font-medium text-charcoal-700">Google</span>
              </button>
              <button class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <i class="fab fa-facebook text-blue-600 mr-2"></i>
                <span class="text-sm font-medium text-charcoal-700">Facebook</span>
              </button>
            </div>
          </div>

          <!-- Login link -->
          <div class="text-center mt-8">
            <p class="text-charcoal-600">
              Already have an account?
              <router-link to="/login" class="text-primary-500 hover:text-primary-700 font-medium">
                Sign in here
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const toast = useToast()

const showPassword = ref(false)
const isSigningUp = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
  newsletter: false
})

const passwordStrength = computed(() => {
  const password = form.value.password
  let strength = 0
  
  if (password.length >= 6) strength++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++
  if (/\d/.test(password) && /[!@#$%^&*]/.test(password)) strength++
  
  return strength
})

const canSubmit = computed(() => {
  return form.value.firstName &&
         form.value.lastName &&
         form.value.email &&
         form.value.phone &&
         form.value.password &&
         form.value.confirmPassword &&
         form.value.password === form.value.confirmPassword &&
         form.value.acceptTerms &&
         passwordStrength.value >= 2
})

async function handleSignup() {
  if (!canSubmit.value) {
    toast.error('Please fill in all required fields correctly')
    return
  }

  if (form.value.password !== form.value.confirmPassword) {
    toast.error('Passwords do not match')
    return
  }

  isSigningUp.value = true

  try {
    // Simulate signup API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Account created successfully! Welcome to FlameBite!')
    router.push('/')
  } catch (error) {
    toast.error('Failed to create account. Please try again.')
  } finally {
    isSigningUp.value = false
  }
}
</script>
