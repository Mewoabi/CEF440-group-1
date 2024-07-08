import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router, usePathname } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, View } from 'react-native';
import { useContext, useEffect } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView'; 
import defaultImg from '../../assets/images/icon.png';
import { UserContext } from '@/contexts/userContext';

export default function Layout() {

  const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const pathname = usePathname()
    useEffect(() => {
      console.log(pathname)
    }, [pathname])

    const {state: {user}} = useContext(UserContext)

    return (
      <DrawerContentScrollView  {...props}>
        {/* <DrawerItem
        icon={({ color, focused }) => (<TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />)}
        label={"Home"}
        labelStyle={styles.drawerItemLabel}
        onPress={() => {
          router.push('/(tabs)')
        }}
      /> */}
        <ThemedView style={{...styles.userDetsWrapper,  borderColor: useThemeColor({light: "#ccc", dark: "#666"}, 'text')}}>
          {user.profileImage ? <Image style={styles.userImage} source={{uri: user.profileImage}}  /> :
          <Image style={styles.userImage} source={require('../../assets/images/profile.jpeg')}  />}
          <ThemedView>
            <ThemedText style={styles.userName}>{user.username}</ThemedText>
            <ThemedText style={styles.userEmail}>{user.email}</ThemedText>
          </ThemedView>
        </ThemedView>
        <DrawerItem
          icon={({ color, focused }) => (<TabBarIcon name={focused ? 'account' : 'account-outline'} color={color} />)}
          label={"Profile"}
          labelStyle={styles.drawerItemLabel}
          onPress={() => {
            router.push('../(drawer)/(tabs)/profile')
            // router.push('../../(sidepages)/profile')
          }}
        />
        <DrawerItem
          icon={({ color, focused }) => (<TabBarIcon name={focused ? 'card-account-details' : 'card-account-details-outline'} color={color} size={26} />)}
          label={"Transactions"}
          labelStyle={styles.drawerItemLabel}
          onPress={() => {
            router.push('../../(sidepages)/transactions')
          }}
        />
        <DrawerItem
          icon={({ color, focused }) => (<Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} size={28} color={color} />)}
          label={"Settings"}
          labelStyle={styles.drawerItemLabel}
          onPress={() => {
            router.push('../../(sidepages)/settings')
          }}
        />
        <DrawerItem
          icon={({ color, focused }) => (<TabBarIcon name={focused ? 'face-agent' : 'face-agent'} color={color} />)}
          label={"Help center"}
          labelStyle={styles.drawerItemLabel}
          onPress={() => {
            router.push('../../(sidepages)/help-center')
          }}
        />
        <DrawerItem
          icon={({ color, focused }) => (<TabBarIcon name={focused ? 'information' : 'information-outline'} color={color} />)}
          label={"About us"}
          labelStyle={styles.drawerItemLabel}
          onPress={() => {
            router.push('../../(sidepages)/about-us')
          }}
        />
        <DrawerItem
          icon={({ color, focused }) => (<TabBarIcon name={focused ? 'star' : 'star-outline'} color={color} />)}
          label={"Rate our app"}
          labelStyle={styles.drawerItemLabel}
          onPress={() => {
            router.push('/(tabs)/')
          }}
        />
      </DrawerContentScrollView>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        headerTintColor: useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'tint'), 
        headerShown: false
      }} 
      initialRouteName='/(tabs)' 
      drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />} 
      />
      {/* <Drawer.Screen
          name="(drawer)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        /> */}
      {/* <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerItemLabel: { marginLeft: -20, fontSize: 18 }, 
  userDetsWrapper: {
   display: "flex", 
   flexDirection: "column", 
   paddingHorizontal: 23, 
   paddingVertical: 35, 
   borderBottomWidth: 1, 
  }, 
  userImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50
  }, 
  userName: {
    fontSize: 16, 
    fontWeight: 'bold'
  },
  userEmail: {
    fontSize: 13, 
    fontStyle: 'italic', 
    textDecorationLine:"underline"
  }
})