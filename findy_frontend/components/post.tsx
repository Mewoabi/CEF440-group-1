import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { StyleSheet, Image } from 'react-native'
import { TabBarIconThree, TabBarIconTwo } from './navigation/TabBarIcon'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Colors } from '@/constants/Colors'
import { Link } from 'expo-router'


export interface postInterface {
  id: string;
  title: string;
  name: string;
  description: string;
  additionalInfo: {
    color: string,
    brand: string,
    state: string,
    content: string,
  },
  location: string;
  type: 'lost' | 'found',
  reporterId: string,
  category: string,
  imageUrl: string,
  reporterName: string,
  reporterProfile: string,
  date: string
}

interface postProps {
  post: postInterface
}


const Post = ({ post }: postProps) => {

  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <ThemedView style={styles.post_container}>
      {/* poster profile image with name and date poster */}
      <ThemedView style={styles.post_profile}>
        <Image source={{ uri: post.reporterProfile }} style={styles.post_profile_image} />
        <ThemedView style={styles.post_profile_info}>
          <ThemedText>{post.reporterName}</ThemedText>
          <ThemedText>{post.date}</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* the actual image with lost or found tag */}
      <ThemedView style={styles.post_content}>
        <Image source={{ uri: post.imageUrl }} style={styles.post_content_image} />
        <ThemedView style={styles.post_content_info}>
          <ThemedView style={styles.post_content_info_details}>
            <ThemedView style={styles.post_content_item_location}>
              <ThemedText style={styles.post_content_item}>{post.name}</ThemedText>
              <ThemedView style={styles.post_content_location}>
                <TabBarIconTwo name={'location'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} size={24} style={styles.post_content_location_icon} />
                <ThemedText>{post.location}</ThemedText>
              </ThemedView>
            </ThemedView>
            <Link style={styles.post_content_link} href={'../../../(sidepages)/details/[id]'}>view more &gt;</Link>
          </ThemedView>
          <ThemedView style={styles.post_content_info_icons}>
            <ThemedView style={styles.post_content_icons_unit}>
              <TabBarIconTwo name={'eye-outline'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} style={{ marginRight: 6 }} />
              <ThemedText style={styles.post_content_icon_text}>viewed</ThemedText>
            </ThemedView>
            <ThemedView style={styles.post_content_icons_unit}>
              <TabBarIconThree name={'handshake'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} style={{ marginRight: 6 }} />
              <ThemedText style={styles.post_content_icon_text}>claim</ThemedText>
            </ThemedView>
            <ThemedView style={styles.post_content_icons_unit}>
            <TabBarIconTwo name={'share-social-outline'} color={useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')} style={{ marginRight: 6 }} />
              <ThemedText style={styles.post_content_icon_text}>share</ThemedText>
            </ThemedView>

          </ThemedView>
        </ThemedView>
        <ThemedView style={{...styles.post_tag, backgroundColor: post.type === 'lost' ? "#C3FDC2": "#6C63FF"}}>
            <ThemedText
            style={{...styles.post_tag_text, color: post.type === 'lost' ? "#555": "#fff"}}
            >
              {capitalize(post.type)}
              </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

export default Post


const styles = StyleSheet.create({
  post_container: { 
    width: 345,
    height: 370,
    gap: 10, 
    marginBottom: 20, 
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  post_content: { 
    width: "100%",
    height: 314,
    borderRadius: 15,  
    elevation: 10,
    shadowOffset: { height: 1, width: 1 }, 
    position: 'relative'
  },
  post_profile: {
    height: 46,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10, 
  },
  post_profile_image: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  post_profile_info: {
    display: 'flex',
    flexDirection: "column",
  },
  post_content_image: {
    width: "100%",
    height: "60%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  post_content_info: {
    width: "100%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  post_content_info_details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "55%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    paddingHorizontal: 10,
  },
  post_content_item_location: {
    display: "flex",
    flexDirection: "column",
    width: "70%"
  },
  post_content_item: {
    marginBottom: 5
  },
  post_content_location: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
  },
  post_content_link:{
    fontSize: 16, 
    color: "#6C63FF"
  },
  post_content_location_icon: {
    marginLeft: -6,
    marginRight: 5
  }, 
  post_content_info_icons: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingVertical: 5, 
    height: "44%", 
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  post_content_icons_unit: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: "center",  
  }, 
  post_content_icon_text: {
    fontSize: 13
  }, 
  post_tag: {
    width: 95, 
    height: 35, 
    borderRadius: 8,
    borderTopRightRadius:15 , 
    borderBottomRightRadius:0 , 
    position: 'absolute', 
    right: 0, 
    top: 0, 
    display: 'flex', 
    justifyContent: "center"
  }, 
  post_tag_text: {
    textAlign: 'center', 
  }
})