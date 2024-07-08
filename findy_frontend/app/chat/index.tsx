 import { Link, useRouter } from 'expo-router';
import  { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const ENDPOINT = 'http://192.168.0.196:5500'; // Replace with your server's URL

const MessagesScreen = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/auth/user/users`);
        
        setUsers(response?.data);
        console.log(users)
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  const renderItem = ({ item }:any) => (
    <Link 
      href={{
        pathname: '/chat',
        params: { 
          name: item.username,
          avatar: item.profileImage,
          session: 'new session', // You might want to dynamically generate or fetch the session
        }
      }}>
      <View style={styles.messageContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.messageContent}>
          <View style={styles.messageHeader}>
            <Text style={styles.name}>{item.username}</Text>
            <Text style={styles.time}>Active now</Text>
          </View>
          <Text style={styles.message}>Start chatting with {item.username}</Text>
        </View>
      </View>
    </Link>
  );

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item?._id}
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
    paddingVertical: 15,
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