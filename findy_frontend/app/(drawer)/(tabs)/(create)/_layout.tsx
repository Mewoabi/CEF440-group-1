import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIconTwo } from '@/components/navigation/TabBarIcon';
import { TouchableOpacity } from 'react-native';
import ItemContextProvider, { ItemContext } from '@/contexts/itemContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();


  return (
    <ItemContextProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* this index stands for the welcome page and it is the first page i want someone to see when the enter the app */}
        <Stack.Screen name="index" options={{
          headerTitle: "Report Item  ( 1 of 2 )",
          headerTitleAlign: "center", 
          headerLeft: () =>  <TouchableOpacity onPress={() => router.back()}><TabBarIconTwo name={'arrow-back'} size={24} /></TouchableOpacity> 
        }}/>
        <Stack.Screen name="create_two" options={{
          headerTitle: "Report Item  ( 2 of 2 )",
          headerTitleAlign: "center"
        }} />
      </Stack>
    </ThemeProvider>
    </ItemContextProvider>
  );
}
