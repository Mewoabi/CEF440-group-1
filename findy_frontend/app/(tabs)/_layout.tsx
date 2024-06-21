import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      /> 
       <Tabs.Screen
        name="my_posts"
        options={{
          title: 'My Posts',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'post' : 'post-outline'} color={color} />
          ),
          headerTitle: 'My Posts',
          headerTitleAlign: 'center'
        }}
      />
       <Tabs.Screen
        name="create"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'plus-circle' : 'plus-circle-outline'} color={color} size={39}/>
          ),
          headerTitle: 'Create Post',
          headerTitleAlign: 'center'
        }}
      />
      <Tabs.Screen
      name="inbox"
      options={{
        title: 'Inbox',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'message' : 'message-outline'} color={color} />
        ),
        headerTitle: 'Messages',
        headerTitleAlign: 'center'
      }}
    />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            < TabBarIcon name={focused ? 'account' : 'account-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
