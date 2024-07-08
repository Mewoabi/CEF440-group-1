import { View, Text } from 'react-native'
import React from 'react'
import {  Tabs, withLayoutContext } from 'expo-router'
import { createMaterialTopTabNavigator,MaterialTopTabNavigationEventMap,MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
const{ Navigator} = createMaterialTopTabNavigator();
export const TabsNavigator = withLayoutContext<MaterialTopTabNavigationOptions, typeof Navigator, TabNavigationState<ParamListBase>,MaterialTopTabNavigationEventMap>(Navigator);
 
export default function _layout() {
  return (
    <TabsNavigator>
      <TabsNavigator.Screen name="index" options={{title:"Lost"}}/>
      <TabsNavigator.Screen name="found" options={{title:"Found"}}/>
    </TabsNavigator>
 
  )
}