import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('person@gmail.com');
  const [password, setPassword] = useState('aiwillgo123');

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    // In a real app, you would validate credentials here
    router.push('/(tabs)/profile');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Top Section with Welcome Message */}
      <View style={styles.topSection}>
        <Text style={styles.welcomeTitle}>Hello Again!</Text>
        <Text style={styles.welcomeSubtitle}>Welcome back you&apos;ve been missed.</Text>
      </View>

      {/* Login Form Section */}
      <View style={styles.formSection}>
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Enter your email Id</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your email Id"
                placeholderTextColor="transparent"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
            </View>
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="transparent"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons 
                  name={showPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#999" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password Link */}
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Social Login Separator */}
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>Or Continue With</Text>
            <View style={styles.separatorLine} />
          </View>

          {/* Social Login Options */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <View style={styles.googleIcon}>
                <Ionicons name="logo-google" size={20} color="blue" />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <View style={styles.appleIcon}>
                <Ionicons name="logo-apple" size={24} color="black" />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <View style={styles.facebookIcon}>
                <Ionicons name="logo-facebook" size={20} color="#1877F2" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Registration Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Not a Member? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
              <Text style={styles.registerLink}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 237, 232, 1)',
    height:height,
    width:width, // Light peachy-pink background
  },
  topSection: {
    backgroundColor: 'rgba(241, 176, 176, 1)', // Light pink background
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: 'rgba(184, 73, 83, 1)', // Darker reddish-pink
    marginBottom: 8,
    fontFamily: 'serif',
  },
  welcomeSubtitle: {
    fontFamily: 'Inter',
    fontWeight: '500',
    color: 'rgba(173, 115, 115, 1)',
    // fontStyle: 'Medium',
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: 2,
    textAlign: 'center',
  },
  formSection: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333',
    paddingRight: 50, // Space for icon
  },
  inputIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    marginTop: -10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    marginTop: -10,
    padding: 4,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 32,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#E91E63',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: 'rgba(184, 73, 83, 1)', // Reddish-pink button
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#E91E63',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  separatorText: {
    color: '#999',
    marginHorizontal: 16,
    fontSize: 14,
    fontWeight: '500',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 40,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
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
  googleIcon: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4285F4',
  },
  appleIcon: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookIcon: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 20,
  },
  registerText: {
    color: 'rgba(108, 108, 108, 1)',
    fontSize: 14,
  },
  registerLink: {
    color: '#E91E63',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
