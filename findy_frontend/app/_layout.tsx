import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import UserContextProvider from '@/contexts/userContext';
import PostContextProvider from '@/contexts/postContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins_Bold: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    Poppins_Medium: require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    Poppins_Regular: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    Poppins_SemiBold: require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    Poppins_Thin: require('../assets/fonts/Poppins/Poppins-Thin.ttf'),
    Poppins_Light: require('../assets/fonts/Poppins/Poppins-Light.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UserContextProvider>
      <PostContextProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{
            headerShown: false
          }}>
            {/* this index stands for the welcome page and it is the first page i want someone to see when the enter the app */}
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen name="(sidepages)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </PostContextProvider>
    </UserContextProvider>
  );
}
