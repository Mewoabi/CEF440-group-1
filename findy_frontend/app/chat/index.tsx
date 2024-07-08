import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, Send, IMessage } from 'react-native-gifted-chat';
import Icon from '@expo/vector-icons/MaterialIcons';
import { RouteProp, useRoute } from '@react-navigation/native';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import ChatHeader from './ChatHeader';

type RouteParams = {
  ChatScreen: {
    name: string;
    avatar: string;
    session: string; // Add session parameter
  };
};

const ENDPOINT = 'http://192.168.8.105:5500'; // Replace with your server's URL

const ChatScreen: React.FC = () => {
  const route = useRoute<RouteProp<RouteParams, 'ChatScreen'>>();
  const { name, avatar, session } = route.params;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [input, setInput] = useState('');
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    // Join the session room
    socket.emit('joinSession', { session, user: name });

    socket.on('receiveMessage', (message: IMessage) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));
    });

    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/api/message/${session}`);
        setMessages(response.data.map((msg: any) => ({
          _id: msg._id,
          text: msg.content,
          createdAt: new Date(msg.createdAt),
          user: {
            _id: msg.sender === 'User' ? 1 : 2,
            name: msg.sender,
            avatar: msg.sender === 'User' ? '' : avatar, // Adjust as needed
          },
        })));
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();

    return () => {
      socket.disconnect();
    };
  }, [session]);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
    const message = {
      session,
      sender: 'User',
      content: newMessages[0].text,
    };
    socket.emit('sendMessage', message);

    // Save message to the backend
    axios.post(`${ENDPOINT}/api/message`, message)
      .then(response => {
        console.log('Message saved:', response.data);
      })
      .catch(error => {
        console.error('Failed to save message:', error);
      });
  }, [session]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: IMessage = {
        _id: messages.length + 1,
        text: input,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: name,
        },
      };
      onSend([newMessage]);
      setInput('');
    }
  };

  const renderSend = (props: any) => (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <Icon name="send" size={28} color="#007AFF" />
      </View>
    </Send>
  );

  return (
    <View style={styles.container}>
      <ChatHeader name={name} avatar={avatar} status='online'/>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: 'User',
        }}
        renderSend={renderSend}
        placeholder="Write your message..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
});

export default ChatScreen;
