<template>
  <div class="contact-page pt-20">
    <!-- Header -->
    <section class="section-padding bg-gradient-dark text-white">
      <div class="container-custom text-center">
        <h1 class="heading-primary text-white mb-6">Contact Us</h1>
        <p class="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you!
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section-padding bg-cream-50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="font-serif text-2xl font-bold text-charcoal-800 mb-6">Send us a Message</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-charcoal-700 mb-2">First Name *</label>
                  <input v-model="form.firstName" type="text" required class="form-input">
                </div>
                <div>
                  <label class="block text-sm font-medium text-charcoal-700 mb-2">Last Name *</label>
                  <input v-model="form.lastName" type="text" required class="form-input">
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-charcoal-700 mb-2">Email Address *</label>
                <input v-model="form.email" type="email" required class="form-input">
              </div>

              <div>
                <label class="block text-sm font-medium text-charcoal-700 mb-2">Phone Number</label>
                <input v-model="form.phone" type="tel" class="form-input">
              </div>

              <div>
                <label class="block text-sm font-medium text-charcoal-700 mb-2">Subject *</label>
                <select v-model="form.subject" required class="form-input">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="catering">Catering Services</option>
                  <option value="complaint">Complaint</option>
                  <option value="compliment">Compliment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-charcoal-700 mb-2">Message *</label>
                <textarea v-model="form.message" rows="5" required class="form-input" 
                         placeholder="Tell us what's on your mind..."></textarea>
              </div>

              <button type="submit" 
                      :disabled="isSubmitting"
                      class="w-full btn-primary text-lg py-4">
                <span v-if="!isSubmitting">
                  <i class="fas fa-paper-plane mr-2"></i>Send Message
                </span>
                <div v-else class="flex items-center justify-center">
                  <div class="spinner mr-2"></div>Sending...
                </div>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Contact Details -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="font-serif text-xl font-bold text-charcoal-800 mb-6">Get in Touch</h3>
              
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-charcoal-800 mb-1">Visit Us</h4>
                    <p class="text-charcoal-600">123 Culinary Street<br>Food District, City 12345</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-charcoal-800 mb-1">Call Us</h4>
                    <p class="text-charcoal-600">+91 98765 43210<br>+91 98765 43211</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-charcoal-800 mb-1">Email Us</h4>
                    <p class="text-charcoal-600">hello@flamebite.com<br>support@flamebite.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-charcoal-800 mb-1">Operating Hours</h4>
                    <p class="text-charcoal-600">Monday - Sunday<br>11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="font-serif text-xl font-bold text-charcoal-800 mb-6">Follow Us</h3>
              <p class="text-charcoal-600 mb-6">Stay connected and get the latest updates on new dishes, special offers, and events.</p>
              
              <div class="grid grid-cols-2 gap-4">
                <a href="#" class="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  <i class="fab fa-facebook text-2xl text-blue-600"></i>
                  <div>
                    <div class="font-medium text-charcoal-800">Facebook</div>
                    <div class="text-sm text-charcoal-500">@FlameBiteFood</div>
                  </div>
                </a>

                <a href="#" class="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-pink-50 hover:border-pink-300 transition-colors">
                  <i class="fab fa-instagram text-2xl text-pink-600"></i>
                  <div>
                    <div class="font-medium text-charcoal-800">Instagram</div>
                    <div class="text-sm text-charcoal-500">@flamebite</div>
                  </div>
                </a>

                <a href="#" class="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  <i class="fab fa-twitter text-2xl text-blue-500"></i>
                  <div>
                    <div class="font-medium text-charcoal-800">Twitter</div>
                    <div class="text-sm text-charcoal-500">@flamebite</div>
                  </div>
                </a>

                <a href="#" class="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors">
                  <i class="fab fa-youtube text-2xl text-red-600"></i>
                  <div>
                    <div class="font-medium text-charcoal-800">YouTube</div>
                    <div class="text-sm text-charcoal-500">FlameBite Kitchen</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16">
      <div class="container-custom">
        <h2 class="heading-secondary text-center mb-8">Find Us</h2>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <!-- Embedded Map Placeholder -->
          <div class="h-96 bg-gray-200 flex items-center justify-center relative">
            <div class="text-center">
              <i class="fas fa-map-marked-alt text-6xl text-gray-400 mb-4"></i>
              <h3 class="text-xl font-semibold text-charcoal-700 mb-2">Interactive Map</h3>
              <p class="text-charcoal-600">123 Culinary Street, Food District, City 12345</p>
              <button class="mt-4 btn-primary">
                <i class="fas fa-directions mr-2"></i>Get Directions
              </button>
            </div>
            
            <!-- Map overlay with restaurant marker -->
            <div class="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-utensils text-white"></i>
                </div>
                <div>
                  <div class="font-semibold text-charcoal-800">FlameBite Restaurant</div>
                  <div class="text-sm text-charcoal-600">Premium Dining Experience</div>
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
import { useToast } from 'vue-toastification'

const toast = useToast()

const isSubmitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

async function submitForm() {
  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success('Thank you for your message! We\'ll get back to you within 24 hours.')
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    toast.error('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
