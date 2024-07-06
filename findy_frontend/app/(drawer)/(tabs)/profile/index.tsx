import { View, Text, StyleSheet, Image, ScrollView, Touchable } from 'react-native'
import React from 'react'
// import { Button, Divider } from 'react-native-paper'
import { router } from 'expo-router'
// import { Dialog, Portal, } from 'react-native-paper';
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



export default function index() {
 
  const Divider = () => {
    return <View style={{width: "100%", height: 1, marginVertical: 5, borderBottomWidth: 1, borderColor: '#aaa'}}>

    </View>
  }

  return (
    <ScrollView>
      <View style={{
        marginBottom: 10,
        padding: 5,
        paddingHorizontal: 20
      }}>
        <View style={{
          marginBottom: 5
        }}>
          <View style={{
            ...styles.userInfoWrapper,
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'center'
          }}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
              width={80}
              height={80}
              style={styles.userImg}
            />
            <View style={styles.userDetailsWrapper}>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userEmail}>john@email.com</Text>
            </View>
          </View>
          {/* profile conatainer */}
          <View style={styles.view_box}>
            <Text style={styles.text_weight}>Name</Text>
            <View style={styles.semi_contain}>
              <Text style={styles.text_dark}>brunomike</Text>
              <Ionicons
                name="person"
                size={20}
                color="#6C63FF"
                style={{ padding: 5 }}
              />

            </View>

          </View>
          <Divider/>
          <View style={styles.view_box}>
            <Text style={styles.text_weight}>Email</Text>
            <View style={styles.semi_contain}>
              <Text style={styles.text_dark}>brunomike@gmail</Text>
              <AntDesign
                name="exclamationcircle"
                size={20}
                color="#6C63FF"
                style={{ padding: 5 }}
              />

            </View>

          </View>
          <Divider/>
          <View style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2
          }}>
            <Text style={{
              fontWeight: "bold"
            }}>Phone number</Text>
            <View style={{
              display: 'flex',
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <Text style={{
                color: "#888"
              }}>60891839</Text>
              <AntDesign
                name="phone"
                size={20}
                color="#6C63FF"
                style={{ padding: 5 }}
              />

            </View>

          </View>
          <Divider/>
          <View style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2
          }}>
            <Text style={{
              fontWeight: "bold"
            }}>Language</Text>
            <View style={{
              display: 'flex',
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <Text style={{
                color: "#888"
              }}>English</Text>
              <Ionicons
                name="language"
                size={20}
                color="#6C63FF"
                style={{ padding: 5 }}
              />

            </View>

          </View>
          <Divider/>
          <View style={styles.view_box}>
            <Text style={styles.text_weight}>Location</Text>
            <View style={styles.semi_contain}>
              <Text style={styles.text_dark}>Doula</Text>
              <Ionicons
                name="location"
                size={20}
                color="#6C63FF"
                style={{ padding: 5 }}
              />

            </View>

          </View>
          <Divider/>
        </View>


        <View style={styles.delete_account_view}>
 

          <ThemedView style={styles.photo_choice}>
            <TouchableOpacity style={{...styles.image_buttons, backgroundColor:"#6C63FF"}} onPress={() => router.push('/profile/EditProfile')}>
              <MaterialCommunityIcons name="pencil" size={24} color="#fff" />
              <ThemedText style={styles.photo_button_text}>Edit profile</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.image_buttons, backgroundColor: "#f26565"}}>
              <MaterialCommunityIcons name="delete" size={24} color="#fff" />
              <ThemedText style={styles.photo_button_text}>Delete account</ThemedText>
            </TouchableOpacity>
          </ThemedView> 
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {

    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  delete_account_view: {
    display: 'flex',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  view_box: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 2
  },
  text_weight: {
    fontWeight: "bold"
  },
  semi_contain: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text_dark: {
    color: '#888'
  },
  image_buttons: {
    // width: "40%", 
    backgroundColor: "#eee", 
    elevation: 3, 
    borderRadius: 10, 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: 'center', 
    alignItems: "center", 
    paddingVertical: 10,
    paddingHorizontal: 10

},

photo_choice: {
    display: "flex", 
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    width: "100%" ,  
    backgroundColor: 'transparent'
}, 

photo_button_text: {
    marginLeft: 5, 
    color: 'white'
}, 
});

// style={{color: "#F3A3A6"}} 