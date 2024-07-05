import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { GiftedChat, IMessage, Bubble, InputToolbar, MessageProps } from 'react-native-gifted-chat';
import { RouteProp, useRoute } from '@react-navigation/native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import ChatHeader from './ChatHeader';
import { Button } from 'react-native-paper';

type ParamList = {
  Chat: {
    avatar: string;
    name: string;
  };
};

const audioRecorderPlayer = new AudioRecorderPlayer();

const ChatScreen: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'Chat'>>();
  const { avatar, name } = route.params;

  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'can I get proof',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Jhon Abraham',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'hey I saw an add on the missing airpods, they’re mine',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: name,
          avatar: avatar,
        },
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Example audio URL
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  const onPlayAudio = async (uri: string) => {
    await audioRecorderPlayer.startPlayer(uri);
    audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.currentPosition === e.duration) {
        audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
      }
      return;
    });
  };

  const renderMessageAudio = (props: MessageProps<IMessage>) => {
    const { currentMessage } = props;
    if (currentMessage?.audio) {
      return (
        <View style={styles.audioContainer}>
          <Button className='text-blue' onPress={() => onPlayAudio(currentMessage.audio as any)}>
            Play Audio
          </Button>
        </View>
      );
    }
    return null;
  };

  const renderBubble = (props: any) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#6646ee',
        },
        left: {
          backgroundColor: '#f0f0f0',
        },
      }}
      textStyle={{
        right: {
          color: '#fff',
        },
        left: {
          color: '#000',
        },
      }}
    />
  );

  const renderInputToolbar = (props: any) => (
    <InputToolbar
      {...props}
      containerStyle={styles.inputToolbar}
      primaryStyle={{ alignItems: 'center' }}
    />
  );

  return (
    <View style={styles.container}>
      <ChatHeader avatar={avatar} name={name} status="Active now" />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: name,
          avatar: avatar,
        }}
        renderMessageAudio={renderMessageAudio as any}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5ddd5',
  },
  audioContainer: {
    padding: 10,
  },
  audioText: {
    color: 'blue',
  },
  inputToolbar: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    padding: 5,
  },
});

export default ChatScreen;
