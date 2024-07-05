import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {  Tabs, useNavigation, withLayoutContext } from 'expo-router'
import { createMaterialTopTabNavigator,MaterialTopTabNavigationEventMap,MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { Appbar, Searchbar } from 'react-native-paper';
const{ Navigator} = createMaterialTopTabNavigator();
export const TabsNavigator = withLayoutContext<MaterialTopTabNavigationOptions, typeof Navigator, TabNavigationState<ParamListBase>,MaterialTopTabNavigationEventMap>(Navigator);
 
export default function _layout() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <>

<Appbar.Header mode='center-aligned' className=' bg-sky-400'>
      
        <Appbar.BackAction onPress={() => navigation.goBack()} />   
        <Appbar.Content title="Messages"  />
      </Appbar.Header>
      <View style={styles.titleContainer}>
        <Searchbar onChangeText={setSearchQuery}  placeholder="Search" style={styles.searchbar} value={searchQuery} />
      </View>

    
    <TabsNavigator screenOptions={
      {
        lazy:true
      }
    
    }>
      <TabsNavigator.Screen name="index" options={{title:"Lost"}}/>
      <TabsNavigator.Screen name="inbox" options={{title:"Found"}}/>
    </TabsNavigator>
    </>
  )
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  titleContainer: {
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchbar: {
    marginTop: 8,
    width: '95%',
    height:50,
    color:"green",
    backgroundColor: 'white',
    borderColor:"#D9D9D9",
    borderWidth:1,
    // borderRadius:10,
  },
});