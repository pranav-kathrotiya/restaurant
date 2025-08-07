import {
  defineStore
} from 'pinia'
import {
  ref,
  computed
} from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const categories = ref([{
      id: 'all',
      name: 'All Items',
      icon: 'fas fa-utensils'
    },
    {
      id: 'starters',
      name: 'Starters',
      icon: 'fas fa-leaf'
    },
    {
      id: 'mains',
      name: 'Main Course',
      icon: 'fas fa-drumstick-bite'
    },
    {
      id: 'desserts',
      name: 'Desserts',
      icon: 'fas fa-ice-cream'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: 'fas fa-coffee'
    }
  ])

  const dishes = ref([
    // Starters
    {
      id: 1,
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls filled with truffle and parmesan, served with aioli',
      price: 280,
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
      category: 'starters',
      ingredients: ['Arborio rice', 'Truffle oil', 'Parmesan', 'Breadcrumbs'],
      tags: ['vegetarian', 'popular'],
      prepTime: '15 mins',
      calories: 320
    },
    {
      id: 2,
      name: 'Flame-Grilled Prawns',
      description: 'Succulent prawns grilled to perfection with garlic herb butter',
      price: 450,
      image: 'https://images.unsplash.com/photo-1559742811-822873691df8?w=400&h=300&fit=crop',
      category: 'starters',
      ingredients: ['Tiger prawns', 'Garlic', 'Herbs', 'Lemon'],
      tags: ['seafood', 'gluten-free'],
      prepTime: '12 mins',
      calories: 180
    },
    {
      id: 3,
      name: 'Artisan Bruschetta',
      description: 'Fresh tomatoes, basil, and burrata on toasted sourdough',
      price: 220,
      image: 'https://images.unsplash.com/photo-1572695157360-1153aaad020b?w=400&h=300&fit=crop',
      category: 'starters',
      ingredients: ['Sourdough', 'Tomatoes', 'Burrata', 'Basil'],
      tags: ['vegetarian'],
      prepTime: '8 mins',
      calories: 240
    },

    // Main Course
    {
      id: 4,
      name: 'Wagyu Beef Tenderloin',
      description: 'Premium wagyu beef with roasted vegetables and red wine reduction',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      category: 'mains',
      ingredients: ['Wagyu beef', 'Seasonal vegetables', 'Red wine', 'Herbs'],
      tags: ['premium', 'gluten-free'],
      prepTime: '25 mins',
      calories: 680
    },
    {
      id: 5,
      name: 'Lobster Thermidor',
      description: 'Classic French lobster dish with cognac and gruyere cheese',
      price: 950,
      image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&h=300&fit=crop',
      category: 'mains',
      ingredients: ['Fresh lobster', 'Cognac', 'Gruyere cheese', 'Cream'],
      tags: ['seafood', 'premium'],
      prepTime: '30 mins',
      calories: 520
    },
    {
      id: 6,
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with orange glaze and roasted root vegetables',
      price: 720,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
      category: 'mains',
      ingredients: ['Duck leg', 'Orange', 'Root vegetables', 'Herbs'],
      tags: ['gluten-free'],
      prepTime: '35 mins',
      calories: 650
    },
    {
      id: 7,
      name: 'Wild Mushroom Risotto',
      description: 'Creamy arborio rice with wild mushrooms and truffle oil',
      price: 480,
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop',
      category: 'mains',
      ingredients: ['Arborio rice', 'Wild mushrooms', 'Truffle oil', 'Parmesan'],
      tags: ['vegetarian', 'popular'],
      prepTime: '20 mins',
      calories: 420
    },

    // Desserts
    {
      id: 8,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, vanilla ice cream',
      price: 320,
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
      category: 'desserts',
      ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Vanilla ice cream'],
      tags: ['popular', 'vegetarian'],
      prepTime: '18 mins',
      calories: 450
    },
    {
      id: 9,
      name: 'Crème Brûlée',
      description: 'Classic French custard with caramelized sugar crust',
      price: 280,
      image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop',
      category: 'desserts',
      ingredients: ['Cream', 'Vanilla', 'Egg yolks', 'Sugar'],
      tags: ['vegetarian'],
      prepTime: '15 mins',
      calories: 320
    },
    {
      id: 10,
      name: 'Tiramisu',
      description: 'Traditional Italian dessert with coffee and mascarpone',
      price: 350,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
      category: 'desserts',
      ingredients: ['Ladyfingers', 'Coffee', 'Mascarpone', 'Cocoa'],
      tags: ['vegetarian'],
      prepTime: '10 mins',
      calories: 380
    },

    // Beverages
    {
      id: 11,
      name: 'Artisan Coffee',
      description: 'Single-origin beans, expertly roasted and brewed',
      price: 120,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
      category: 'beverages',
      ingredients: ['Coffee beans', 'Filtered water'],
      tags: ['vegan'],
      prepTime: '5 mins',
      calories: 5
    },
    {
      id: 12,
      name: 'Fresh Juice Blend',
      description: 'Daily selection of fresh seasonal fruits',
      price: 180,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop',
      category: 'beverages',
      ingredients: ['Seasonal fruits', 'Ice'],
      tags: ['vegan', 'healthy'],
      prepTime: '3 mins',
      calories: 120
    },
    {
      id: 13,
      name: 'Craft Beer',
      description: 'Selection of local craft beers',
      price: 250,
      image: 'https://images.unsplash.com/photo-1615332579037-3c44b3660b53?w=400&h=300&fit=crop',
      category: 'beverages',
      ingredients: ['Hops', 'Malt', 'Yeast'],
      tags: ['alcoholic'],
      prepTime: '2 mins',
      calories: 150
    }
  ])

  const selectedCategory = ref('all')
  const searchQuery = ref('')

  // Computed properties
  const filteredDishes = computed(() => {
    let filtered = dishes.value

    // Filter by category
    if (selectedCategory.value !== 'all') {
      filtered = filtered.filter(dish => dish.category === selectedCategory.value)
    }

    // Filter by search query
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase().trim()
      filtered = filtered.filter(dish =>
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query) ||
        dish.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(query)
        )
      )
    }

    return filtered
  })

  const featuredDishes = computed(() => {
    return dishes.value.filter(dish => dish.tags.includes('popular')).slice(0, 6)
  })

  const dailySpecials = computed(() => {
    return dishes.value.filter(dish => dish.tags.includes('premium')).slice(0, 3)
  })

  // Actions
  function setCategory(categoryId) {
    selectedCategory.value = categoryId
  }

  function setSearchQuery(query) {
    searchQuery.value = query
  }

  function getDishById(id) {
    return dishes.value.find(dish => dish.id === id)
  }

  function getDishesByCategory(categoryId) {
    return dishes.value.filter(dish => dish.category === categoryId)
  }

  return {
    // State
    categories,
    dishes,
    selectedCategory,
    searchQuery,

    // Getters
    filteredDishes,
    featuredDishes,
    dailySpecials,

    // Actions
    setCategory,
    setSearchQuery,
    getDishById,
    getDishesByCategory
  }
})