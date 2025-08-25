import { Stack } from 'expo-router';
import { StatusBar, useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar 
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={false}
      />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="product" options={{ headerShown: false }} />
        <Stack.Screen name="index" redirect />
      </Stack>
    </>
  );
}
