import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push('/(auth)/onboarding');
  };

  const handleEditProfile = () => {
    // In a real app, you would navigate to edit profile screen
    console.log('Edit profile pressed');
  };

  const handleMenuItem = (item: string) => {
    // In a real app, you would navigate to respective screens
    console.log(`${item} pressed`);
  };

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.moreOptions}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Profile Information Card */}
          <View style={styles.profileCard}>
            <View style={styles.profileInfo}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' }}
                style={styles.profileImage}
              />
              <View style={styles.profileText}>
                <Text style={styles.userName}>Olivia</Text>
                <Text style={styles.userEmail}>Oliva@gmail.com</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
              <Ionicons name="pencil" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Account Settings Section */}
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItem('Address')}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Ionicons name="location-outline" size={20} color="#333" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuTitle}>Address</Text>
                  <Text style={styles.menuSubtitle}>Manage your saved address</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItem('Order History')}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Ionicons name="bag-outline" size={20} color="#333" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuTitle}>Order History</Text>
                  <Text style={styles.menuSubtitle}>View your past orders</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItem('Language')}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Ionicons name="globe-outline" size={20} color="#333" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuTitle}>Language</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItem('Notifications')}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Ionicons name="notifications-outline" size={20} color="#333" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuTitle}>Notifications</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          </View>

          {/* Support & Legal Section */}
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItem('Contact Us')}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Ionicons name="chatbubble-outline" size={20} color="#333" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuTitle}>Contact Us</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItem('Get Help')}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Ionicons name="help-circle-outline" size={20} color="#333" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuTitle}>Get Help</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItem('Privacy Policy')}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Ionicons name="shield-checkmark-outline" size={20} color="#333" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuTitle}>Privacy Policy</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItem('Terms and Conditions')}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Ionicons name="settings-outline" size={20} color="#333" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuTitle}>Terms and Conditions</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Ionicons name="log-out-outline" size={20} color="rgba(193, 70, 80, 1)" />
                </View>
                <View style={styles.menuText}>
                  <Text style={[styles.menuTitle, styles.logoutText]}>Log Out</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEE8', // Light soft pink background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  moreOptions: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileText: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    padding: 8,
  },
  menuCard: {
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
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#999',
  },
  logoutText: {
    color: 'rgba(193, 70, 80, 1)', // Reddish-pink for logout
  },
});
