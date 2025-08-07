# 🔥 FlameBite Restaurant Website

A modern, responsive restaurant food ordering website built with Vue.js 3, featuring a premium design, seamless user experience, and comprehensive ordering functionality.

## ✨ Features

### 🎨 Design & UI
- **Modern Design**: Clean, premium aesthetic with warm color palette (deep red, golden yellow, charcoal black, off-white)
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Custom Typography**: Playfair Display for headings, Lato/Open Sans for body text
- **Smooth Animations**: Fade-in effects, hover animations, and transitions
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

### 🏠 Homepage
- **Hero Section**: Full-width background with compelling tagline and CTA
- **Featured Dishes**: Showcase of chef's signature creations
- **How It Works**: 3-step ordering process explanation
- **Daily Specials**: Premium dishes with special offers
- **Customer Reviews**: Testimonial carousel
- **Newsletter Signup**: Email subscription form

### 🍽️ Menu System
- **Categorized Menu**: Starters, Mains, Desserts, Beverages
- **Advanced Filtering**: Search by name, ingredients, dietary preferences
- **Sorting Options**: Price, name, preparation time
- **Detailed Dish Info**: Ingredients, calories, prep time, tags
- **High-Quality Images**: Professional food photography
- **Add to Cart**: Quick add functionality with animations

### 🛒 Shopping Cart
- **Cart Management**: Add, remove, update quantities
- **Real-time Calculations**: Subtotal, delivery fee, tax, total
- **Free Delivery**: Threshold-based free delivery (₹500+)
- **Sidebar Cart**: Quick access floating cart
- **Persistent Storage**: Cart items saved across sessions

### 💳 Checkout Process
- **User Information**: Delivery address, contact details
- **Payment Options**: Cash on Delivery, UPI, Credit/Debit Cards
- **Order Summary**: Complete breakdown of charges
- **Special Instructions**: Custom delivery notes
- **Order Confirmation**: Success feedback with estimated delivery time

### 👤 User Authentication
- **Login/Signup**: Email-based authentication
- **Social Login**: Google and Facebook integration options
- **Form Validation**: Real-time validation with error messages
- **Password Strength**: Visual password strength indicator
- **Remember Me**: Session persistence option

### 📞 Additional Pages
- **About Us**: Company story, team, values, awards
- **Contact**: Contact form, location info, social media links
- **Interactive Elements**: Hover effects, form submissions

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Notifications**: Vue Toastification
- **Icons**: Font Awesome 6
- **Typography**: Google Fonts (Playfair Display, Lato)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd restaurant
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Build for production**
   \`\`\`bash
   npm run build
   # or
   yarn build
   \`\`\`

5. **Preview production build**
   \`\`\`bash
   npm run preview
   # or
   yarn preview
   \`\`\`

## 📁 Project Structure

\`\`\`
src/
├── assets/          # Static assets and global styles
├── components/      # Reusable Vue components
│   ├── layout/      # Header, Footer, Navigation
│   ├── sections/    # Page sections
│   └── ui/          # UI components (Cart, Modals)
├── stores/          # Pinia state management
├── views/           # Page components
└── router/          # Route definitions
\`\`\`

## 🎯 Key Components

### State Management (Pinia)
- **Cart Store**: Shopping cart functionality
- **Menu Store**: Menu items, filtering, search

### Custom Components
- **Navbar**: Responsive navigation with cart indicator
- **Footer**: Links, contact info, newsletter signup
- **CartSidebar**: Sliding cart with order summary
- **Food Cards**: Interactive dish display cards

### Pages
- **Home**: Marketing landing page
- **Menu**: Complete menu with filtering
- **Cart**: Shopping cart management
- **Checkout**: Order placement form
- **About**: Company information
- **Contact**: Contact form and details
- **Auth**: Login/Signup forms

## 🎨 Design System

### Colors
- **Primary**: Deep Red (#dc2626)
- **Secondary**: Golden Yellow (#fbbf24)
- **Charcoal**: Dark Gray (#1f2937)
- **Cream**: Off-white (#fffffe)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Lato, Open Sans (Sans-serif)

### Components
- **Buttons**: Rounded, gradient backgrounds
- **Cards**: Rounded corners, subtle shadows
- **Forms**: Clean inputs with focus states

## 🔧 Customization

### Adding New Dishes
Edit \`src/stores/menu.js\` to add new dishes to the menu array.

### Styling Changes
Modify \`tailwind.config.js\` for color palette changes or \`src/assets/main.css\` for custom styles.

### New Pages
1. Create component in \`src/views/\`
2. Add route in \`src/router/index.js\`
3. Update navigation in \`src/components/layout/Navbar.vue\`

## 📱 Mobile Responsiveness

- **Breakpoints**: Tailwind CSS responsive design system
- **Touch Friendly**: Large buttons, easy scrolling
- **Optimized Layout**: Stacked layouts for mobile
- **Performance**: Lazy loading, optimized images

## 🔒 Security Features

- **Form Validation**: Client-side validation
- **Input Sanitization**: XSS prevention
- **HTTPS Ready**: Production-ready security headers

## 📈 Performance

- **Lazy Loading**: Images and components
- **Code Splitting**: Route-based code splitting
- **Optimized Bundle**: Tree shaking with Vite
- **Fast Development**: HMR (Hot Module Replacement)

## 🌟 Future Enhancements

- **Real API Integration**: Backend service connection
- **Payment Gateway**: Stripe, PayPal integration
- **Order Tracking**: Real-time order status
- **Admin Dashboard**: Menu management interface
- **Multi-language**: i18n internationalization
- **PWA Features**: Offline functionality, push notifications

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Created with ❤️ for modern restaurant businesses.

---

**FlameBite** - *Savor Every Bite, Delivered Right* 🔥
