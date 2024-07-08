 
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as imagePicker from 'expo-image-picker'
import React, { useContext, useEffect, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import defaultImg from '../../../../assets/images/icon.png';
import { storage } from '@/connections/firebaseConfig';
import { ItemContext } from '@/contexts/itemContext';
import { itemInterface } from '@/types/item';
import { FullWindowOverlay } from 'react-native-screens';
import { PostContext } from '@/contexts/postContext';

export default function createPage() {
    const [imageUri, setImageUri] = useState(null);
    //state for storing the image once it is gotten from the camera
    const [image, setImage] = useState<string>('')
    const  {state: {item}, dispatch} = useContext(ItemContext)
    const  {dispatch: postDispatch} = useContext(PostContext)

//function to take image with the user's camera
const takePhotoWithCamera = async() => {
    try {
        await imagePicker.requestCameraPermissionsAsync();
        let result = await imagePicker.launchCameraAsync({
            cameraType: imagePicker.CameraType.back, 
            allowsEditing: true, 
            aspect: [1,1], 
            quality: 1, 
        })

        if (!result.canceled) {
            //save image
            console.log("this is the gallery image result: ", result)
            setImage(result.assets[0].uri)
        }
    } catch (error: any) {
        console.log("image choosing was cancelled", error)
        alert("error uploading image " + error.message)
    }
}

//function to choose image from gallery
    const chooseFromGallery = async () => {
        try {
            await imagePicker.requestMediaLibraryPermissionsAsync();
            let result = await imagePicker.launchImageLibraryAsync({
                mediaTypes: imagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            })
            if (!result.canceled) {
                //save image
                console.log("this is the gallery image result: ", result)
                setImage(result.assets[0].uri)
            }
        } catch (error: any) {
            console.log("image choosing was cancelled", error)
            alert("error uploading image " + error.message)
        }
    }

//function to save the chosen image to firebase storage  
    const saveImageToStorage = async (uri: string) => {
        if (uri)
            try {
                const response = await fetch(uri)
                const blob = await response.blob()

                const storageRef = ref(storage, 'itemImages/' + new Date().getTime())
                const uploadTask = uploadBytesResumable(storageRef, blob)

                uploadTask.on("state_changed", (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("you upload is " + progress + "% done")

                },
                    (error) => {
                        console.log(error.message)
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(async (donwloadUrl) => {
                            console.log("file availabe at: " + donwloadUrl)
                        })
                    }
                )
            } catch (error: any) {
                console.log(error.message)
            }
    }

    const addNewPost  = (image: string) => {
        let fullItem: itemInterface;
        fullItem = {...item, imageUrl: image}
        dispatch({type: 'ADD_ITEM', payload: fullItem}), 
        postDispatch({type: "ADD_POST", payload: {
            additionalInfo: fullItem.additionalInfo, 
            category: fullItem.category,
            date: 
        }})
    }
    return (
        //The savetostorage function is resposible for sending the image to the firebase storage while the choosefrom gallery function is for taking an  image from the user gallery
        //    <ScrollView>
        <ThemedView style={styles.container}>

            <ThemedText style={styles.label}>Take an image of the item</ThemedText>
 
                <Image style={styles.image} source={image ? { uri: image } : defaultImg as any} /> 

            <ThemedView style={styles.photo_choice}>
                <TouchableOpacity style={styles.image_buttons} onPress={() => chooseFromGallery()}>
                    <MaterialCommunityIcons name="file-image-outline" size={24} color="#555" />
                    <ThemedText style={styles.photo_button_text}>From gallery</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.image_buttons} onPress={() => takePhotoWithCamera()}>
                    <MaterialCommunityIcons name="camera" size={24} color="#555" />
                    <ThemedText style={styles.photo_button_text}>Take a photo</ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <TouchableOpacity style={styles.report_button} onPress={() => saveImageToStorage(image)}>
                <MaterialCommunityIcons name="briefcase" size={24} color="white" />
                <ThemedText style={styles.report_button_text}> Report Item </ThemedText>
            </TouchableOpacity>

        </ThemedView>
        //    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 70,
        paddingBottom: 180,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 40
    },
    image: {
        height: 300,
        width: 300,
        borderWidth: 2,
        borderColor: "#777",
        borderRadius: 50,
        marginBottom: 50
    },
    report_button: {
        paddingVertical: 20,
        backgroundColor: "#6C63FF",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        width: "90%",
        borderRadius: 10, 
        marginBottom: 50
    },

    image_buttons: {
        width: "40%", 
        backgroundColor: "#eee", 
        elevation: 3, 
        borderRadius: 10, 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: 'center', 
        alignItems: "center", 
        paddingVertical: 15
    },

    photo_choice: {
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 60,
        width: "100%" 
    }, 

    photo_button_text: {
        marginLeft: 5
    }, 
    report_button_text: {
        color: 'white',
        marginLeft: 5
    }
})