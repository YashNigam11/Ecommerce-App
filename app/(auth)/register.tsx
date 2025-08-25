import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }
    
    // In a real app, you would create the account here
    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: () => router.push('/(auth)/login') }
    ]);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Top Section with Header */}
      <View style={styles.topSection}>
        <Text style={styles.headerTitle}>Join The Glow!</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <View style={styles.formContainer}>
          {/* Full Name Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#666"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#666"
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
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
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

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#666"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons 
                  name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#999" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Create Account Button */}
          <TouchableOpacity style={styles.createAccountButton} onPress={handleRegister}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already a Member? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text style={styles.loginLink}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 237, 232, 1)', // Light peachy-pink background
  },
  topSection: {
    backgroundColor: 'rgba(241, 176, 176, 1)', // Light pink header
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'rgba(184, 73, 83, 1)', // Darker reddish-pink
    textAlign: 'center',
    fontFamily: 'Playfair Display',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
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
  createAccountButton: {
    backgroundColor: 'rgba(193, 70, 80, 1)', // Reddish-pink button
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    shadowColor: 'rgba(193, 70, 80, 1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  createAccountButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 20,
  },
  loginText: {
    color: 'rgba(108, 108, 108, 1)', // Lighter reddish-pink
    fontSize: 14,
  },
  loginLink: {
    color: 'rgba(193, 70, 80, 1)', // Darker reddish-pink
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
