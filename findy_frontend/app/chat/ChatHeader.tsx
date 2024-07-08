import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, IconButton, Icon } from 'react-native-paper';
import { useNavigation } from 'expo-router';
interface ChatHeaderProps {
  avatar: string;
  name: string;
  status: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ avatar, name, status }) => {
  const Navigate=useNavigation()
  return (
    <View style={styles.container}>
      <IconButton onPress={()=>Navigate.goBack()} icon='status'/>
      <Avatar.Image size={40} source={{ uri: avatar }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
      <View style={styles.iconContainer}>
        <IconButton
          icon="phone"
          size={24}
          onPress={() => {}}
        />
        <IconButton
          icon="video"
          size={24}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop:10,
    paddingTop:25,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
    color: 'grey',
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default ChatHeader;
