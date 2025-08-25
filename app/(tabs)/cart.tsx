import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  brand: string;
  quantity: number;
}

interface WishlistItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  brand: string;
}

const mockCartItems: CartItem[] = [
  {
    id: 1,
    title: 'Essence Mascara - Volumizing',
    price: 24.99,
    thumbnail: 'https://dummyimage.com/100x100/FF6B9D/ffffff&text=Mascara',
    brand: 'Essence',
    quantity: 1,
  },
  {
    id: 2,
    title: 'Revlon Lipstick - Classic Red',
    price: 12.99,
    thumbnail: 'https://dummyimage.com/100x100/FF6B9D/ffffff&text=Lipstick',
    brand: 'Revlon',
    quantity: 2,
  },
  {
    id: 3,
    title: 'Maybelline Foundation - Natural Beige',
    price: 18.99,
    thumbnail: 'https://dummyimage.com/100x100/FF6B9D/ffffff&text=Foundation',
    brand: 'Maybelline',
    quantity: 1,
  },
];

const mockWishlistItems: WishlistItem[] = [
  {
    id: 4,
    title: 'Urban Decay Eyeshadow Palette',
    price: 54.99,
    thumbnail: 'https://dummyimage.com/100x100/FF6B9D/ffffff&text=Eyeshadow',
    brand: 'Urban Decay',
  },
  {
    id: 5,
    title: 'MAC Lipstick - Ruby Woo',
    price: 19.99,
    thumbnail: 'https://dummyimage.com/100x100/FF6B9D/ffffff&text=Lipstick',
    brand: 'MAC',
  },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(mockWishlistItems);
  const [activeTab, setActiveTab] = useState<'cart' | 'wishlist'>('cart');

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId: number) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from your cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
          },
        },
      ]
    );
  };

  const removeWishlistItem = (itemId: number) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from your wishlist?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setWishlistItems(prevItems => prevItems.filter(item => item.id !== itemId));
          },
        },
      ]
    );
  };

  const moveToCart = (item: WishlistItem) => {
    const newCartItem: CartItem = {
      ...item,
      quantity: 1,
    };
    setCartItems(prevItems => [...prevItems, newCartItem]);
    removeWishlistItem(item.id);
    Alert.alert('Success', 'Item moved to cart!');
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 50 ? 0 : 5.99;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Empty Cart', 'Please add some items to your cart before checkout.');
      return;
    }

    Alert.alert(
      'Checkout',
      'Proceed to checkout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Proceed', onPress: () => Alert.alert('Success', 'Order placed successfully!') },
      ]
    );
  };

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Ionicons
        name={activeTab === 'cart' ? 'bag-outline' : 'heart-outline'}
        size={64}
        color="#ccc"
      />
      <Text style={styles.emptyTitle}>
        {activeTab === 'cart' ? 'Your cart is empty' : 'Your wishlist is empty'}
      </Text>
      <Text style={styles.emptySubtitle}>
        {activeTab === 'cart'
          ? 'Add some beauty products to get started'
          : 'Save your favorite products for later'
        }
      </Text>
      <TouchableOpacity style={styles.shopNowButton}>
        <Text style={styles.shopNowButtonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Tab Header */}
        <View style={styles.tabHeader}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'cart' && styles.activeTabButton]}
            onPress={() => setActiveTab('cart')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'cart' && styles.activeTabButtonText]}>
              Cart ({cartItems.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'wishlist' && styles.activeTabButton]}
            onPress={() => setActiveTab('wishlist')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'wishlist' && styles.activeTabButtonText]}>
              Wishlist ({wishlistItems.length})
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'cart' ? (
          <>
            {cartItems.length === 0 ? (
              renderEmptyState()
            ) : (
              <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.cartItemsContainer}>
                  {cartItems.map((item) => (
                    <View key={item.id} style={styles.cartItem}>
                      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
                      <View style={styles.itemInfo}>
                        <Text style={styles.itemTitle} numberOfLines={2}>
                          {item.title}
                        </Text>
                        <Text style={styles.itemBrand}>{item.brand}</Text>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                      </View>

                      <View style={styles.itemActions}>
                        <View style={styles.quantityContainer}>
                          <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Ionicons name="remove" size={16} color="#FF6B9D" />
                          </TouchableOpacity>
                          <Text style={styles.quantityText}>{item.quantity}</Text>
                          <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Ionicons name="add" size={16} color="#FF6B9D" />
                          </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                          style={styles.removeButton}
                          onPress={() => removeItem(item.id)}
                        >
                          <Ionicons name="trash-outline" size={20} color="#FF6B9D" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>

                <View style={styles.summaryContainer}>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Subtotal</Text>
                    <Text style={styles.summaryValue}>${calculateSubtotal().toFixed(2)}</Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Shipping</Text>
                    <Text style={styles.summaryValue}>
                      {calculateShipping() === 0 ? 'Free' : `$${calculateShipping().toFixed(2)}`}
                    </Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Total</Text>
                    <Text style={styles.summaryTotal}>${calculateTotal().toFixed(2)}</Text>
                  </View>

                  <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                    <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
                  </TouchableOpacity>

                  <View style={styles.promoContainer}>
                    <Text style={styles.promoText}>Free shipping on orders over $50</Text>
                  </View>
                </View>
              </ScrollView>
            )}
          </>
        ) : (
          <>
            {wishlistItems.length === 0 ? (
              renderEmptyState()
            ) : (
              <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.cartItemsContainer}>
                  {wishlistItems.map((item) => (
                    <View key={item.id} style={styles.wishlistItem}>
                      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
                      <View style={styles.itemInfo}>
                        <Text style={styles.itemTitle} numberOfLines={2}>
                          {item.title}
                        </Text>
                        <Text style={styles.itemBrand}>{item.brand}</Text>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                      </View>

                      <View style={styles.wishlistActions}>
                        <TouchableOpacity
                          style={styles.moveToCartButton}
                          onPress={() => moveToCart(item)}
                        >
                          <Ionicons name="bag-add-outline" size={20} color="#FF6B9D" />
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.removeButton}
                          onPress={() => removeWishlistItem(item.id)}
                        >
                          <Ionicons name="heart-dislike-outline" size={20} color="#FF6B9D" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  tabHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: '#FF6B9D',
    borderRadius: 20,
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  activeTabButtonText: {
    color: 'white',
  },
  cartList: {
    padding: 16,
    paddingBottom: 20,
  },
  cartItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wishlistItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
    marginRight: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    lineHeight: 20,
  },
  itemBrand: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B9D',
  },
  itemActions: {
    alignItems: 'center',
  },
  wishlistActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  moveToCartButton: {
    padding: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  quantityButton: {
    padding: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 12,
    minWidth: 30,
    textAlign: 'center',
  },
  removeButton: {
    padding: 8,
  },
  summaryContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  summaryTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B9D',
  },
  checkoutButton: {
    backgroundColor: '#FF6B9D',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  promoContainer: {
    alignItems: 'center',
  },
  promoText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 24,
    marginBottom: 12,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  shopNowButton: {
    backgroundColor: '#FF6B9D',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  shopNowButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  cartItemsContainer: {
    padding: 16,
    paddingBottom: 20,
  },
});
