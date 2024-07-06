import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { TabBarIconTwo } from '@/components/navigation/TabBarIcon'
import { ThemedView } from '@/components/ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function _layout() {
  return (
    <Stack>
       <Stack.Screen name="index" options={{
        title: 'Profile',
        headerTitleAlign:"center", 
        headerLeft: () =>  <TouchableOpacity onPress= {()=>router.back()}><TabBarIconTwo name={'arrow-back'} size={24} /></TouchableOpacity> 
        }} /> 
    <Stack.Screen name="EditProfile"  options={{title: 'EditProfile'}} />
</Stack>
  )
}