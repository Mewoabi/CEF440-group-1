import { Image, StyleSheet, Platform, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Post from '@/components/post';
import { test_posts } from '@/utils/testPost'; 
import { postInterface } from '@/components/post';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}> 
       {/* <Post post={test_posts[0]}/> */}
       <FlatList 
       keyExtractor={(item) => item.id}
        data={test_posts}
        renderItem={({item}) => (<Post post={item}/>)}
       />
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15, 
    paddingTop: 15, 
    display: "flex", 
    flexDirection: "column", 
    alignItems:"center"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  }, 
});
