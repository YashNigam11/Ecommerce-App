import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          source={require('@/assets/images/bgpic.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomContent}>

        <Text style={styles.brandName}>Viorra</Text>
        <Text style={styles.tagline}>Your Beauty, Delivered.</Text>


        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => router.push('/(auth)/login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>


        <View style={styles.paginationContainer}>
          <View style={[styles.paginationLine, styles.activeLine]} />
          <View style={styles.paginationLine} />

        </View>
      </View>

    </View>
  );
}
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const IMAGE_WIDTH = SCREEN_WIDTH; // For full-width image
const IMAGE_HEIGHT = (695 / 430) * IMAGE_WIDTH; // Maintain 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2c1ba",
  },
  background: {
    // flex: 1,
    // justifyContent: 'flex-end',
    position: 'relative',
  },
  backgroundImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    position: 'absolute',
    top: -20,
    left: 0,
    // bottom:50
  },
  bottomContent: {
    position: "absolute",
    bottom: 0,
    left: 30,
    alignItems: 'center',
    paddingHorizontal: 32,
    // paddingBottom: 50,
    paddingTop: 20,
    // marginTop: 100,
  },
  brandName: {
    fontSize: 60,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Italiana',
    letterSpacing: -0.32,
  },
  tagline: {
    fontSize: 24,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    marginBottom: 28,
    fontFamily: 'Inter',
    letterSpacing: -0.32,
  },
  getStartedButton: {
    backgroundColor: 'rgba(184, 73, 83, 1)',
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 16,
    // width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  paginationLine: {
    width: 40,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 6,
  },
  activeLine: {
    backgroundColor: 'white',
    width: 40,
    height: 5,
  },
});
