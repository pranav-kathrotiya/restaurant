<template>
  <div class="menu-page pt-20">
    <!-- Header Section -->
    <section class="section-padding bg-gradient-dark text-white">
      <div class="container-custom text-center">
        <h1 class="heading-primary text-white mb-6">Our Menu</h1>
        <p class="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
          Discover a world of flavors crafted by our expert chefs. From appetizers to desserts, 
          every dish is prepared with the finest ingredients and utmost care.
        </p>
      </div>
    </section>

    <!-- Search and Filters -->
    <section class="py-8 bg-white border-b sticky top-20 z-40">
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <!-- Search Bar -->
          <div class="relative flex-1 max-w-md">
            <input v-model="menuStore.searchQuery"
                   type="text" 
                   placeholder="Search dishes, ingredients..."
                   class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>

          <!-- Category Filters -->
          <div class="flex flex-wrap gap-2">
            <button v-for="category in menuStore.categories" :key="category.id"
                    @click="menuStore.setCategory(category.id)"
                    class="px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2"
                    :class="menuStore.selectedCategory === category.id 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-charcoal-700 hover:bg-gray-200'">
              <i :class="category.icon" class="text-sm"></i>
              <span>{{ category.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Items -->
    <section class="section-padding bg-cream-50">
      <div class="container-custom">
        <!-- Results Info -->
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-serif font-bold text-charcoal-800">
            {{ getCurrentCategoryName() }}
            <span class="text-lg font-normal text-charcoal-600">
              ({{ menuStore.filteredDishes.length }} items)
            </span>
          </h2>
          
          <!-- Sort Options -->
          <select v-model="sortBy" 
                  @change="sortDishes"
                  class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="default">Default</option>
            <option value="name">Name A-Z</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="prep-time">Preparation Time</option>
          </select>
        </div>

        <!-- No Results -->
        <div v-if="sortedDishes.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-search text-3xl text-gray-400"></i>
          </div>
          <h3 class="text-2xl font-serif font-bold text-charcoal-700 mb-4">No dishes found</h3>
          <p class="text-charcoal-600 mb-6">
            Try adjusting your search or browse a different category.
          </p>
          <button @click="clearFilters" class="btn-primary">
            Clear Filters
          </button>
        </div>

        <!-- Dishes Grid -->
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="dish in sortedDishes" :key="dish.id"
               class="food-card group animate-fade-in-up">
            <!-- Image -->
            <div class="relative overflow-hidden">
              <img :src="dish.image" 
                   :alt="dish.name"
                   class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                   loading="lazy">
              
              <!-- Tags -->
              <div class="absolute top-4 left-4 flex flex-wrap gap-2">
                <span v-for="tag in dish.tags" :key="tag"
                      class="px-2 py-1 text-xs font-medium rounded-full"
                      :class="getTagClass(tag)">
                  {{ tag }}
                </span>
              </div>

              <!-- Price Badge -->
              <div class="absolute top-4 right-4">
                <div class="bg-white bg-opacity-95 px-3 py-2 rounded-full shadow-lg">
                  <span class="text-sm font-bold text-charcoal-800">₹{{ dish.price }}</span>
                </div>
              </div>

              <!-- Quick Add Button -->
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button @click="addToCart(dish)" 
                        class="btn-primary flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <i class="fas fa-plus"></i>
                  <span>Quick Add</span>
                </button>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="font-serif text-xl font-semibold text-charcoal-800 line-clamp-1">
                  {{ dish.name }}
                </h3>
                <button @click="toggleFavorite(dish.id)"
                        class="p-2 rounded-full hover:bg-red-50 transition-colors"
                        :class="isFavorite(dish.id) ? 'text-red-500' : 'text-gray-400'">
                  <i class="fas fa-heart"></i>
                </button>
              </div>

              <p class="text-charcoal-600 text-sm mb-4 line-clamp-2">
                {{ dish.description }}
              </p>

              <!-- Ingredients -->
              <div class="mb-4">
                <h4 class="text-xs font-semibold text-charcoal-700 mb-2 uppercase tracking-wide">
                  Key Ingredients
                </h4>
                <div class="flex flex-wrap gap-1">
                  <span v-for="ingredient in dish.ingredients.slice(0, 3)" :key="ingredient"
                        class="px-2 py-1 bg-gray-100 text-xs text-charcoal-600 rounded">
                    {{ ingredient }}
                  </span>
                  <span v-if="dish.ingredients.length > 3"
                        class="px-2 py-1 bg-gray-100 text-xs text-charcoal-500 rounded">
                    +{{ dish.ingredients.length - 3 }} more
                  </span>
                </div>
              </div>

              <!-- Info Row -->
              <div class="flex items-center justify-between text-sm text-charcoal-500 mb-4">
                <div class="flex items-center space-x-4">
                  <span class="flex items-center space-x-1">
                    <i class="fas fa-clock"></i>
                    <span>{{ dish.prepTime }}</span>
                  </span>
                  <span class="flex items-center space-x-1">
                    <i class="fas fa-fire"></i>
                    <span>{{ dish.calories }} cal</span>
                  </span>
                </div>
              </div>

              <!-- Action Button -->
              <button @click="addToCart(dish)" 
                      class="w-full btn-primary flex items-center justify-center space-x-2 group-hover:shadow-flame">
                <i class="fas fa-shopping-cart"></i>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div v-if="canLoadMore" class="text-center mt-12">
          <button @click="loadMore" 
                  class="btn-secondary px-8 py-4">
            Load More Dishes
          </button>
        </div>
      </div>
    </section>

    <!-- Floating Cart Summary -->
    <div v-if="cartStore.itemCount > 0" 
         class="fixed bottom-6 right-6 z-50">
      <button @click="cartStore.openCart"
              class="bg-primary-500 text-white p-4 rounded-full shadow-2xl hover:bg-primary-600 transition-colors duration-300 flex items-center space-x-3">
        <i class="fas fa-shopping-cart text-xl"></i>
        <span class="hidden sm:block font-medium">
          {{ cartStore.itemCount }} items - ₹{{ cartStore.total }}
        </span>
        <div class="sm:hidden w-6 h-6 bg-white text-primary-500 rounded-full flex items-center justify-center font-bold text-sm">
          {{ cartStore.itemCount }}
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useCartStore } from '@/stores/cart'
import { useToast } from 'vue-toastification'

const menuStore = useMenuStore()
const cartStore = useCartStore()
const toast = useToast()

const sortBy = ref('default')
const favorites = ref(new Set())
const displayCount = ref(9)

const sortedDishes = computed(() => {
  let dishes = [...menuStore.filteredDishes]
  
  switch (sortBy.value) {
    case 'name':
      dishes.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'price-low':
      dishes.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      dishes.sort((a, b) => b.price - a.price)
      break
    case 'prep-time':
      dishes.sort((a, b) => parseInt(a.prepTime) - parseInt(b.prepTime))
      break
    default:
      // Keep original order
      break
  }
  
  return dishes.slice(0, displayCount.value)
})

const canLoadMore = computed(() => {
  return displayCount.value < menuStore.filteredDishes.length
})

function getCurrentCategoryName() {
  const category = menuStore.categories.find(cat => cat.id === menuStore.selectedCategory)
  return category ? category.name : 'All Items'
}

function addToCart(dish) {
  cartStore.addItem(dish)
  toast.success(`${dish.name} added to cart!`)
}

function toggleFavorite(dishId) {
  if (favorites.value.has(dishId)) {
    favorites.value.delete(dishId)
    toast.info('Removed from favorites')
  } else {
    favorites.value.add(dishId)
    toast.success('Added to favorites')
  }
}

function isFavorite(dishId) {
  return favorites.value.has(dishId)
}

function getTagClass(tag) {
  const classes = {
    'popular': 'bg-primary-500 text-white',
    'premium': 'bg-secondary-500 text-white',
    'vegetarian': 'bg-green-500 text-white',
    'vegan': 'bg-green-600 text-white',
    'gluten-free': 'bg-blue-500 text-white',
    'seafood': 'bg-cyan-500 text-white',
    'healthy': 'bg-emerald-500 text-white',
    'alcoholic': 'bg-amber-500 text-white'
  }
  return classes[tag] || 'bg-gray-500 text-white'
}

function sortDishes() {
  displayCount.value = 9 // Reset display count when sorting
}

function clearFilters() {
  menuStore.setCategory('all')
  menuStore.setSearchQuery('')
  sortBy.value = 'default'
}

function loadMore() {
  displayCount.value += 9
}

onMounted(() => {
  // Reset display count when component mounts
  displayCount.value = 9
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
