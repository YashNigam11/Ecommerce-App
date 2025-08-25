# GlowCart - Beauty E-commerce App

A React Native CLI beauty e-commerce application built with Expo Router, featuring a complete shopping experience for cosmetic and beauty products.

## Features

### 🎨 **Authentication Flow**
- **Onboarding Screen**: Beautiful welcome screen with app branding
- **Login Screen**: Email/password authentication with social login options
- **Register Screen**: User registration with validation

### 🛍️ **Shopping Experience**
- **Home Screen**: Product listing with search and filtering
- **Product Details**: Comprehensive product information with images, reviews, and add-to-cart

- **Shopping Cart**: Cart management with quantity controls and checkout

### 👤 **User Profile**
- **Profile Management**: User information and statistics
- **Settings**: Address, notifications, language preferences
- **Support**: Contact, help, privacy policy, terms & conditions

## Technical Stack

- **React Native CLI** with Expo Router
- **TypeScript** for type safety
- **Axios** for API calls to DummyJSON
- **Expo Linear Gradient** for beautiful UI gradients
- **Ionicons** for consistent iconography
- **FlatList** for optimized product rendering

## API Integration

The app integrates with [DummyJSON](https://dummyjson.com/products) to fetch product data, filtering for beauty and cosmetic products based on:
- Product titles (mascara, lipstick, foundation, etc.)
- Brand names
- Categories

## Project Structure

```
app/
├── (auth)/           # Authentication screens
│   ├── onboarding.tsx
│   ├── login.tsx
│   └── register.tsx
├── (tabs)/           # Main app tabs
│   ├── index.tsx     # Home/Products
│   ├── offers.tsx    # offers
│   ├── cart.tsx      # Shopping Cart
│   └── profile.tsx   # User Profile
├── product/          # Product details
│   └── [id].tsx     # Dynamic product route
└── _layout.tsx       # Root navigation
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Run on device/simulator**:
   ```bash
   npm run android  # Android
   npm run ios      # iOS
   npm run web      # Web
   ```

## Key Components

- **ProductCard**: Reusable product display component
- **TabBarIcon**: Custom tab bar icons using Ionicons
- **CartItem**: Shopping cart item with quantity controls

## Design System

- **Primary Color**: #FF6B9D (Pink)
- **Secondary Color**: #FF8E53 (Orange)
- **Background**: #f8f9fa (Light Gray)
- **Text Colors**: #333 (Dark), #666 (Medium), #999 (Light)

## Features Implemented

✅ **Complete Authentication Flow**
✅ **Product Listing & Search**
✅ **Product Details with Reviews**
✅ **Shopping Cart Management**
✅ **User Profile & Settings**
✅ **Responsive Design**
✅ **TypeScript Support**
✅ **API Integration**
✅ **Navigation Structure**

## Future Enhancements

- [ ] Real authentication backend
- [ ] Payment gateway integration
- [ ] Push notifications
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] User reviews system
- [ ] Dark mode support
- [ ] Offline support

## Contributing

This is a demonstration project showcasing React Native development skills. Feel free to use as a reference or starting point for your own e-commerce applications.

## License

This project is for educational and demonstration purposes.
