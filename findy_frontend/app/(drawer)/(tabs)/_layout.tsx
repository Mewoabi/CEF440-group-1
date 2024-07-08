import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();


  const homeHeaderRight = ({ color, focused }: { color: string, focused: boolean }) => (
    <ThemedView>
      <TabBarIcon name={focused ? 'briefcase-search' : 'briefcase-search'} color={color} />
      <TabBarIcon name={focused ? 'bell' : 'bell-outline'} color={color} />
    </ThemedView>
  )

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerLeft: () => <DrawerToggleButton tintColor={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'tint')} />,
      }}>
      <Tabs.Screen
        name="index"
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          headerTitleAlign: 'center', 
          headerRight: () =>
            <ThemedView style={styles.homeHeaderRight}>
              <TabBarIcon name={'briefcase-search'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} style={{marginRight: 6}} />
              <TabBarIcon name={'bell'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} />
            </ThemedView>,
        }}
      />
      <Tabs.Screen
        name="myPost"
        options={{
          title: 'My Posts',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'post' : 'post-outline'} color={color} />
          ),
          headerTitle: 'My Posts',
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen
        name="(create)"
        options={{ 
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'plus-circle' : 'plus-circle-outline'} color={color} size={39} />
          ),
          headerTitle: 'Create Post',
          headerTitleAlign: 'center', 
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'message' : 'message-outline'} color={color} />
          ),
          headerTitle: 'Messages',
          headerTitleAlign: 'center', 
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            < TabBarIcon name={focused ? 'account' : 'account-outline'} color={color} />
          ),
          headerShown: false
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  homeHeaderRight: { 
      flexDirection: 'row', // Arrange icons horizontally
      marginRight: 20, // Add some spacing
    }
  })