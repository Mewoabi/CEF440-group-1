import {  useRouter,Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ENDPOINT = 'http://192.168.8.105:5500'; // Replace with your server's URL

const MessagesScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${ENDPOINT}/auth/user/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  };

  const handleChatPress = async (user:any) => {
    try {
      const currentUser = { _id: '666f3875e1400843374ec080' }; // Replace with the actual current user ID
      const response = await axios.post(`${ENDPOINT}/api/session/getOrCreateSession`, {
        user1: currentUser._id,
        user2: user._id,
      });
      
      const session = response.data;
      console.log(session._id)
      router.push({
        pathname: '/chat',
        params: { 
          name: user.username,
          avatar: user.profileImage || "https://randomuser.me/api/portraits/women/26.jpg",
          session: session?._id,
        }
      });
    } catch (error) {
      console.error('Failed to create or get session:', error);
    }
  };

  const renderItem = ({ item }:any) => (
    <Link href={'/chat'} onPress={() => handleChatPress(item)}>
      <View style={styles.messageContainer}>
        <Image source={{ uri: item.profileImage || "https://randomuser.me/api/portraits/women/26.jpg" }} style={styles.avatar} />
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
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
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
