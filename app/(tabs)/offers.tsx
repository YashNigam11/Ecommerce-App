import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OffersScreen() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const offers = [
    {
      id: 1,
      title: 'Summer Sale',
      description: 'Up to 50% off on selected beauty products',
      discount: '50% OFF',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=200&fit=crop&crop=center',
      validUntil: '2024-08-31'
    },
    {
      id: 2,
      title: 'New Customer Discount',
      description: 'Get 20% off on your first order',
      discount: '20% OFF',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=200&fit=crop&crop=center',
      validUntil: '2024-12-31'
    },
    {
      id: 3,
      title: 'Bundle Deals',
      description: 'Buy 2 get 1 free on skincare products',
      discount: 'BUY 2 GET 1',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=200&fit=crop&crop=center',
      validUntil: '2024-09-30'
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Special Offers</Text>
        <Text style={styles.headerSubtitle}>Discover amazing deals and discounts</Text>
      </View>

      <View style={styles.offersContainer}>
        {offers.map((offer) => (
          <TouchableOpacity key={offer.id} style={styles.offerCard}>
            {!imageErrors[offer.id] ? (
              <Image 
                source={{ uri: offer.image }} 
                style={styles.offerImage}
                onError={() => handleImageError(offer.id)}
                defaultSource={require('../../assets/images/icon.png')}
              />
            ) : (
              <View style={[styles.offerImage, styles.fallbackImage]}>
                <Text style={styles.fallbackText}>{offer.title}</Text>
              </View>
            )}
            <View style={styles.offerContent}>
              <View style={styles.offerHeader}>
                <Text style={styles.offerTitle}>{offer.title}</Text>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{offer.discount}</Text>
                </View>
              </View>
              <Text style={styles.offerDescription}>{offer.description}</Text>
              <View style={styles.offerFooter}>
                <Text style={styles.validUntil}>Valid until: {offer.validUntil}</Text>
                <TouchableOpacity style={styles.claimButton}>
                  <Text style={styles.claimButtonText}>Claim Offer</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEE8',
  },
  header: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: 'rgba(241, 176, 176, 1)',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  offersContainer: {
    padding: 20,
  },
  offerCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  offerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  offerContent: {
    padding: 20,
  },
  offerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 12,
  },
  discountBadge: {
    backgroundColor: '#FF6B9D',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  offerDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  offerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  validUntil: {
    fontSize: 14,
    color: '#999',
  },
  claimButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  claimButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  fallbackImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // A neutral background for the fallback
  },
  fallbackText: {
    color: '#888',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
