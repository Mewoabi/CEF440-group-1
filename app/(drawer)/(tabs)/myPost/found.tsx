import { View, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import Card from '../../../../components/Card';
import { ScrollView } from 'react-native-gesture-handler';

export default function found() {
    const lostItems = [
        { id: '1', name: 'Bag Pack', location: 'Classroom', time: '2 days ago',avatar:'https://randomuser.me/api/portraits/women/26.jpg' },
        { id: '3', name: 'Black Bag', location: 'Classroom', time: '3 days ago',avatar:'https://randomuser.me/api/portraits/women/26.jpg' },
        { id: '3', name: 'Umbrella', location: 'Classroom', time: '6 days ago',avatar:'https://randomuser.me/api/portraits/women/20.jpg' },
        { id: '3', name: 'Umbrella', location: 'Classroom', time: '7 days ago',avatar:'https://randomuser.me/api/portraits/women/20.jpg' },
        { id: '3', name: 'Umbrella', location: 'Classroom', time: '2 days ago',avatar:'https://randomuser.me/api/portraits/women/20.jpg' },
        { id: '3', name: 'Umbrella', location: 'Classroom', time: '2 days ago',avatar:'https://randomuser.me/api/portraits/women/20.jpg' },
      ];
    
  return (
    <ScrollView>
    <View style={styles.container}>
    {lostItems.map((item, index) => (
      <View key={index} style={styles.cardWrapper}>
        <Card
          image={item.avatar}
          title={item.name}
          location={item.location}
          time={item.time}
          color='#C3FDC2'
        />
      </View>
    ))}
  </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  cardWrapper: {
    width: '48%', // Adjust this value based on your requirement
    
    marginBottom: 16,
  },
});
