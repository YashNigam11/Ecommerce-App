import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: number;
  brand: string;
  discountPercentage: number;
  stock: number;
}

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://dummyjson.com/products');
      // Get all products from the API
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };

  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => router.push(`/product/${item.id}`)}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.heartButton}>
        <Ionicons name="heart-outline" size={20} color="#FF6B9D" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ActivityIndicator size="large" color="#FF6B9D" />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor="white" /> */}
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.brandName}>Viorra</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="bag-outline" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for all products"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Best Products Section */}
        <View style={styles.bestProductsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Best Products</Text>
              <Text style={styles.productCount}>{products.length} products</Text>
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Apply Filter</Text>
              <Ionicons name="chevron-down" size={16} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Product Grid */}
          <FlatList
            data={products}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.productRow}
            contentContainerStyle={styles.productList}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    // paddingTop: 60,
    // paddingBottom: 20,
    backgroundColor: 'white',
  },
  brandName: {
    fontFamily: 'Italiana',
    fontWeight: '400',
    color: 'rgba(204, 61, 61, 1)',
    // fontStyle: 'Regular',
    fontSize: 30,
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: 'center',
    
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(143, 143, 143, 1)',
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 15,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  bestProductsSection: {
    flex: 1,
    backgroundColor: '#FCEEE8',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    // paddingHorizontal: 20,
    // marginBottom: 20,
  },
  sectionTitleContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    // marginBottom: 4,
  },
  productCount: {
    fontSize: 14,
    color: '#666',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginRight: 8,
  },
  productList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 15,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    position: 'relative',
  },
  productImage: {
    backgroundColor: '#ecc3d1',
    width: '100%',
    height: 152,
    borderRadius: 12,
    marginBottom: 12,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    lineHeight: 18,
  },
  productPrice: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'rgba(75, 75, 75, 1)',
  },
  heartButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
});
