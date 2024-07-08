import { StyleSheet, Text, View,Image, FlatList } from 'react-native'
import React from 'react'
import { Appbar, Button } from 'react-native-paper'
import { useNavigation } from 'expo-router'

type Props = {}

const index = (props: Props) => {
    const navigate=useNavigation()
    const messages = [
        {
          id: '1',
          name: 'New item alert!',
          message: 'Hey the system has found a match for your missing item, click to view',
          time: '12:30 PM',
          avatar: './assets/favicon.png', // Replace with actual image URL
          button:<Button style={styles.button} className='w-20 p-2' buttonColor='#6C63FF' textColor='white' onPress={()=>{}}> View</Button>
        },
        {
          id: '2',
          name: 'Samantha Brenda',
          message: 'new message from samnatha Brenda',
          time: '5:00 PM',
          avatar: 'https://randomuser.me/api/portraits/men/26.jpg', // Replace with actual image URL
        },
        {
            id: '3',
            name: 'Samantha Brenda',
            message: 'new message from samnatha Brenda',
            time: '5:00 PM',
            avatar: 'https://randomuser.me/api/portraits/men/26.jpg', // Replace with actual image URL
          },
          {
            id: '4',
            name: 'Samantha Brenda',
            message: 'new message from samnatha Brenda',
            time: '5:00 PM',
            avatar: 'https://randomuser.me/api/portraits/men/26.jpg', // Replace with actual image URL
          },
        // Add more messages as needed
      ];
      const renderItem = ({ item }:any) => (
        
      
        <View style={styles.messageContainer}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.messageContent}>
            <View style={styles.messageHeader}>
                {item.id!=2 &&(
                    <Text style={styles.name}>{item.name}</Text>

                )}
              <Text></Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text className='mb-3' style={styles.message}>{item.message}</Text>
            {item.button}
          </View>
        </View>
        
      );
  return (
    <View style={styles.mainContainer}>
        <Appbar.Header className='mb-10'  style={styles.header}>
      
      <Appbar.BackAction onPress={() => navigate.goBack()} />   
      <Appbar.Content title="Notifications"  />
    </Appbar.Header>
    {/* body div */}
    <View >
    <FlatList
    className='gap-10'
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
    </View>

    </View>
      
    
  )
}

export default index

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'white'

    },
    button:{
        borderRadius:5

    },
    header:{
        backgroundColor:'white'

    },
    list: {
      padding: 16,
     
     //backgroundColor: 'white',
    },
    messageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 16,
    },
    messageContent: {
      flex: 1,
    },
    messageHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    time: {
      color: 'gray',
      fontSize: 12,
    },
    message: {
      color: 'gray',
      fontSize: 14,
    },
  });
  