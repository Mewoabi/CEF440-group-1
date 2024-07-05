import { View, Text,StyleSheet,Image,ScrollView } from 'react-native'
import React from 'react'
import { Button, Divider } from 'react-native-paper'
import { router } from 'expo-router'
import { Dialog, Portal, } from 'react-native-paper';
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";



export default function index() {
  const [visible, setVisible] = React.useState(false);
  const DialogComponent = () => {

  
    const hideDialog = () => setVisible(false);
  
    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title className='items-center'>Account Deleted</Dialog.Title>
          <Dialog.Content>
            <Text>na u delete ur account, na ur businesss</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button className='text-[#F3A3A6]' onPress={() => console.log("bye")}>Logout</Button>
        
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  };
  
 
  return (
    <ScrollView>
    <View className='mb-10 p-5'>
      <View className=' mb-5'>
      <View className='flex flex-col justify-between items-center self-center' style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
          width={80}
          height={80}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john@email.com</Text>
        </View>
      </View>
      {/* profile conatainer */}
      <View className='flex justify-between gap-2'>
        <Text className='font-bold'>Name</Text>
        <View className='flex flex-row justify-between'>
          <Text className='text-[#888888]'>brunomike</Text>
          <Ionicons 
            name="person"
            size={20}
            color="#6C63FF"
            style={{ padding: 5 }}
          />

        </View>

      </View>
      <Divider/>
      <View className='flex justify-between gap-2'>
        <Text className='font-bold'>Email</Text>
        <View className='flex flex-row justify-between'>
          <Text className='text-[#888888]'>brunomike@gmail</Text>
          <AntDesign 
            name="exclamationcircle"
            size={20}
            color="#6C63FF"
            style={{ padding: 5 }}
          />

        </View>

      </View>
      <Divider/>
      <View className='flex justify-between gap-2'>
        <Text className='font-bold'>Phone number</Text>
        <View className='flex flex-row justify-between'>
          <Text className='text-[#888888]'>60891839</Text>
          <AntDesign 
            name="phone"
            size={20}
            color="#6C63FF"
            style={{ padding: 5 }}
          />

        </View>

      </View>
      <Divider/>
      <View className='flex justify-between gap-2'>
        <Text className='font-bold'>Language</Text>
        <View className='flex flex-row justify-between'>
          <Text className='text-[#888888]'>English</Text>
          <Ionicons 
            name="language"
            size={20}
            color="#6C63FF"
            style={{ padding: 5 }}
          />

        </View>

      </View>
      <Divider/>
      <View className='flex justify-between gap-2'>
        <Text className='font-bold'>Location</Text>
        <View className='flex flex-row justify-between'>
          <Text className='text-[#888888]'>Doula</Text>
          <Ionicons 
            name="location"
            size={20}
            color="#6C63FF"
            style={{ padding: 5 }}
          />

        </View>

      </View>
      <Divider/>
      </View>


      <View className='flex mt-5 flex-row justify-between'>
        <Button
        buttonColor='#6C63FF'
        icon='pencil' 
        textColor='white'
        
        onPress={()=>{
          
            router.push('/profile/EditProfile')
        }}>
            editProfile
        </Button>
        <Button  textColor='white' buttonColor='red' icon='delete' onPress={()=>setVisible(true)}>
           Delete Account
        </Button>
        <DialogComponent/>
      </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize:16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  }
});