import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { TabBarIcon } from '@/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'rgba(204, 61, 61, 1)',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
          height: Platform.OS === 'ios' ? 90 : 70,
        },
        headerStyle: {
          backgroundColor: '#FF6B9D',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          title: 'Offers',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'pricetag' : 'pricetag-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: ' Wishlist',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bag' : 'bag-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
