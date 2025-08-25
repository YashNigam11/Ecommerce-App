# Viorra - Beauty E-commerce App

A React Native beauty e-commerce application built with Expo Router, featuring a complete shopping experience for cosmetic and beauty products.

## Features

### 🎨 **Authentication Flow**
- **Onboarding Screen**: Beautiful welcome screen with app branding and pagination lines
- **Login Screen**: Email/password authentication with social login options
- **Register Screen**: User registration with validation and visible placeholders

### 🛍️ **Shopping Experience**
- **Home Screen**: Product listing with search functionality and "Best Products" grid
- **Product Details**: Comprehensive product information with image gallery, reviews, pricing, and action buttons
- **Cart & Wishlist**: Combined cart and wishlist management with tabbed interface

### 👤 **User Profile**
- **Profile Management**: User information, profile image, and account statistics
- **Settings Menu**: Address, notifications, language preferences, and support options
- **Account Actions**: Edit profile and logout functionality

### 🎯 **Special Features**
- **Offers Screen**: Special deals and discounts with attractive offer cards
- **Responsive Design**: Scrollable pages with modern UI components

## Technical Stack

- **React Native** with Expo Router for navigation
- **TypeScript** for type safety and better development experience
- **Axios** for API calls to DummyJSON products API
- **Ionicons** for consistent iconography across the app
- **StyleSheet API** for styling (no Tailwind-RN)
- **FlatList** for optimized product rendering
- **ScrollView** for scrollable content areas

## API Integration

The app integrates with [DummyJSON](https://dummyjson.com/products) to fetch real product data, displaying:
- Product images, titles, and descriptions
- Pricing information and discount percentages
- Brand details and product categories
- Stock availability and ratings

## Project Structure

```
app/
├── (auth)/           # Authentication screens
│   ├── onboarding.tsx
│   ├── login.tsx
│   └── register.tsx
├── (tabs)/           # Main app tabs
│   ├── index.tsx     # Home/Products
│   ├── offers.tsx    # Special Offers
│   ├── cart.tsx      # Cart & Wishlist
│   └── profile.tsx   # User Profile
├── product/          # Product details
│   └── [id].tsx     # Dynamic product route
└── _layout.tsx       # Root navigation
```

## Tab Navigation

The app features 4 main tabs:
1. **Profile** - User account and settings
2. **Home** - Product browsing and search
3. **Cart** - Saved items and cart management
4. **Offers** - Special deals and promotions

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

- **ProductCard**: Reusable product display component with heart button
- **TabBarIcon**: Custom tab bar icons using Ionicons
- **CartItem**: Shopping cart item with quantity controls
- **OfferCard**: Special offer display with claim buttons

## Future Enhancements

- [ ] Real authentication backend integration
- [ ] Payment gateway integration
- [ ] Push notifications
- [ ] Advanced filtering and sorting
- [ ] Order tracking system
- [ ] User reviews and ratings
- [ ] Dark mode support
- [ ] Offline data caching
- [ ] Image lazy loading optimization
- [ ] Advanced animations and transitions

## Development Notes

- **Styling**: Uses React Native's StyleSheet API exclusively
- **Navigation**: Expo Router with stack and tab navigation
- **State Management**: React hooks (useState, useEffect) for local state
- **Performance**: Optimized with FlatList for large datasets
- **Cross-platform**: Works on iOS, Android, and Web

## Contributing

This is a demonstration project showcasing React Native development skills with modern e-commerce UI/UX patterns. Feel free to use as a reference or starting point for your own applications.

## License

This project is for educational and demonstration purposes.

## 📱 App Screenshots

### Core Features
| Feature | Screenshot |
|---------|------------|
| **Onboarding** | ![Onboarding](assets/images/1.jpg) |
| **Login** | ![Login](assets/images/2.jpg) |
| **Register** | ![Register](assets/images/3.png) |
| **Profile** | ![Profile](assets/images/4.jpg) |
| **Home Screen** | ![Home](assets/images/5.jpg) |
| **Product Details** | ![Product](assets/images/6.jpg) ![Details](assets/images/7.jpg) |
| **Offers** | ![Offers](assets/images/8.jpg) |
| **Cart & Wishlist** | ![Cart](assets/images/9.jpg) |



*Beautiful, modern UI showcasing the Viorra beauty e-commerce experience*