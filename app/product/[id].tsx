import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
  rating: number;
  brand: string;
  category: string;
  stock: number;
  discountPercentage: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
}

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      Alert.alert('Error', 'Failed to load product details');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToBag = () => {
    Alert.alert('Success', 'Product added to bag!', [
      { text: 'Continue Shopping' },
      { text: 'View Bag', onPress: () => router.push('/(tabs)/cart') }
    ]);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={16}
          color={i <= rating ? '#FFD700' : '#ccc'}
        />
      );
    }
    return stars;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6B9D" />
        <Text style={styles.loadingText}>Loading product...</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={64} color="#ccc" />
        <Text style={styles.errorText}>Product not found</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF6B9D',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 8
          }}
          onPress={() => router.back()}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Image Section with Navigation Buttons */}
      <View style={styles.imageContainerBackground}>

        <View style={styles.imageContainer}>
          <Image source={{ uri: product.images[selectedImageIndex] || product.thumbnail }} style={styles.mainImage} />

          {/* Navigation Buttons Overlay */}
          <View style={styles.navigationOverlay}>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => {
                console.log('Back button pressed');
                if (router.canGoBack()) {
                  router.back();
                } else {
                  router.push('/(tabs)');
                }
              }}
            >
              <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="bag-outline" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Action Buttons and Title Section */}
      <View style={styles.actionSection}>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.viewSimilarButton}>
            <Text style={styles.viewSimilarText}>View Similar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>
        <Text style={styles.productTitle}>{product.title}</Text>
      </View>

      {/* Product Details */}
      <View style={styles.content}>
        <Text style={styles.productDescription}>{product.description}</Text>

        {/* Rating Section */}
        <View style={styles.ratingSection}>
          <View style={styles.stars}>{renderStars(product.rating)}</View>
          <Text style={styles.ratingText}>{product.rating}/5</Text>
        </View>

        {/* Sold By */}
        <View style={styles.soldByContainer}>
          <Text style={styles.soldBy}>Sold by: {product.brand}</Text>
        </View>

        {/* Pricing Section */}
        <View style={styles.pricingContainer}>
        <View style={styles.pricingSection}>
          <Text style={styles.currentPrice}>${product.price}</Text>
          <Text style={styles.originalPrice}>${(product.price * 1.1).toFixed(2)}</Text>

          </View>
          {/* Add to Bag Button */}
          <TouchableOpacity style={styles.addToBagButton} onPress={handleAddToBag}>
            <Text style={styles.addToBagText}>Add to Bag</Text>
          </TouchableOpacity>
        </View>
        {/* Highlights Section */}
        <View style={styles.highlightsSection}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <View style={styles.highlightGrid}>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightLabel}>Width</Text>
              <Text style={styles.highlightValue}>{product.dimensions.width}</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightLabel}>Height</Text>
              <Text style={styles.highlightValue}>{product.dimensions.height}</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightLabel}>Warranty</Text>
              <Text style={styles.highlightValue}>{product.warrantyInformation}</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightLabel}>Shipping</Text>
              <Text style={styles.highlightValue}>{product.shippingInformation}</Text>
            </View>
          </View>
        </View>

        {/* Ratings & Reviews Section */}
        <View style={styles.reviewsSection}>
          <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
          {product.reviews.map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewUserInfo}>
                  <Text style={styles.reviewUserName}>{review.reviewerName}</Text>
                  <Text style={styles.reviewUserEmail}>{review.reviewerEmail}</Text>
                </View>
                <View style={styles.reviewStars}>{renderStars(review.rating)}</View>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEE8', // Light pink background matching the image
  },
  imageContainerBackground: {

    padding: 20,
  },
  imageContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ecc3d1',
    backgroundColor: '#ecc3d1',
    // paddingTop: 60,
    position: 'relative',
    // padding: 50,
  },
  mainImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  navigationOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    // paddingTop: 60,
    zIndex: 1,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    elevation: 3,
  },
  actionSection: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: '#FCEEE8',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  viewSimilarButton: {
    // color: '#FF6B9D',
    // padding: 6,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#FF6B9D',
    // backgroundColor: '#FF6B9D',
    paddingHorizontal: 10,
    paddingVertical: 10,
    // borderRadius: 8,
  },
  viewSimilarText: {
    color: '#FF6B9D',
    fontSize: 14,
    fontWeight: '600',
  },
  shareButton: {
    padding: 10,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FCEEE8',
  },
  productTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    lineHeight: 24,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  soldBy: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  pricingContainer: {
    flexDirection: 'row',
    boxSizing: 'border-box',
    // gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  pricingSection: {
    flexDirection: 'column',
    // alignItems: 'baseline',
    marginBottom: 24,
  },
  currentPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    fontSize: 28,
    color: 'rgba(118, 118, 118, 1)',
    textDecorationLine: 'line-through',
    // marginLeft: 10,
  },
  addToBagButton: {
    backgroundColor: 'rgba(184, 73, 83, 1)', // Muted red/maroon color from the image
    borderRadius: 12,
    paddingVertical: 16,
    width: 200,
    alignItems: 'center',
    marginBottom: 14,
  },
  addToBagText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  soldByContainer: {
    // marginTop: 24,
    // borderWidth: 1,
    borderTopWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  highlightsSection: {
    marginBottom: 24,
  },
  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  highlightItem: {
    width: '48%',
    marginBottom: 12,
  },
  highlightLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  highlightValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  reviewsSection: {
    marginBottom: 100,
  },
  reviewItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(152, 150, 150, 1)',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewUserInfo: {
    marginRight: 10,
  },
  reviewUserName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  reviewUserEmail: {
    fontSize: 12,
    color: '#999',
  },
  reviewStars: {
    flexDirection: 'row',
  },
  reviewComment: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCEEE8',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCEEE8',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    marginTop: 16,
    marginBottom: 24,
  },
});
