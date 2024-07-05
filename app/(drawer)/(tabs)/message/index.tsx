import { Link, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

const messages = [
  {
    id: '1',
    name: 'Bruno Mars',
    message: 'I found the Brown bag in class',
    time: '12:30 PM',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg', // Replace with actual image URL
  },
  {
    id: '2',
    name: 'Samantha Brenda',
    message: 'Send proofs',
    time: '5:00 PM',
    avatar: 'https://randomuser.me/api/portraits/men/26.jpg', // Replace with actual image URL
  },
  // Add more messages as needed
];

const MessagesScreen = () => {
  const router = useRouter();
  const renderItem = ({ item }:any) => (
    <Link 
   href={{
    pathname: '/chat',
    params: { name: item.name,avatar:item.avatar, time: item.time, message: item.message }
   }}>
    <View style={styles.messageContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
    </Link>
  );

  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
    backgroundColor: 'white',
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

export default MessagesScreen;
