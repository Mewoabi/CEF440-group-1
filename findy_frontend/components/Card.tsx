// components/Card.js
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  image: string,
  title: string,
  location: string,
  time: string,
  color: string,
  item:string
}

const Card = ({ image, color, title, location, time,item }: Props) => {
  return (
    <View style={[styles.card]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View className='flex flex-row gap-3'>
          <Ionicons name='location-outline' size={20} />
          <Text style={styles.location}>{location}</Text>
        </View>
        <View className='flex flex-row gap-3'>
          <Ionicons name='time-outline' size={20} />
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <Text style={[styles.status, { backgroundColor: color }]}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
   
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#6C63FF'
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  status: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    width: '100%',
    marginTop: 8,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor:'red'
  },
});

export default Card;
