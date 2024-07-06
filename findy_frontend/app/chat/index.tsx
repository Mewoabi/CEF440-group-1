import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { GiftedChat, Send, IMessage, InputToolbar } from 'react-native-gifted-chat';
import Icon from '@expo/vector-icons/MaterialIcons';
import { RouteProp, useRoute } from '@react-navigation/native';

type RouteParams = {
  ChatScreen: {
    name: string;
    avatar: string;
  };
};

const ChatScreen: React.FC = () => {
  const route = useRoute<RouteProp<RouteParams, 'ChatScreen'>>();
  const { name, avatar } = route.params;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Can I get proof?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Jhon Abraham',
          avatar: 'https://example.com/avatar.jpg',
        },
      },
      {
        _id: 2,
        text: 'Hey, I saw an ad on the missing Addidas bag. They\'re mine.',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'User',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages: IMessage[] = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
    setInput('');
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: IMessage = {
        _id: messages.length + 1,
        text: input,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'User',
        },
      };
      onSend([newMessage]);
    }
  };

  const renderSend = (props: any) => (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <Icon name="send" size={28} color="#007AFF" />
      </View>
    </Send>
  );

  const renderInputToolbar = (props: any) => (
    <View >
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.icon}>
        <Icon name="attach-file" size={28} color="#007AFF" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Write your message..."
        value={input}
        onChangeText={setInput}
        onSubmitEditing={handleSend}
      />
      <TouchableOpacity style={styles.icon} onPress={handleSend}>
        <Icon name="send" size={28} color="#007AFF" />
      </TouchableOpacity>
    </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.status}>Active now</Text>
        </View>
      </View>
   
      <GiftedChat
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
          name: 'User',
        }}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        placeholder="Write your message..."
      />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  status: {
    color: 'green',
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingBottom:5
  },
  bottomBar: {
   
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  icon: {
    padding: 10,
  },
});

export default ChatScreen;
