import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as imagePicker from 'expo-image-picker'
import React, { useEffect, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import defaultImg from '../../assets/images/icon.png'
import { storage } from '@/connections/firebaseConfig';

export default function createPage() {
    //state for storing the image once it is gotten from the camera
    const [image, setImage] = useState<string>('') 
    const chooseFromGallery = async() => {
       try { 
        await imagePicker.requestMediaLibraryPermissionsAsync();
        let result = await imagePicker.launchImageLibraryAsync({
            mediaTypes: imagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1
        })
        if(!result.canceled) {
            //save image
            console.log("this is the gallery image result: ",result) 
            setImage(result.assets[0].uri)
        }
       } catch (error: any) {
        console.log("image choosing was cancelled",error)
        alert("error uploading image " + error.message)
       }
    }
    const saveImageToStorage = async (uri: string) => {
        if(uri)
        try {
            const response = await fetch(uri)
            const blob = await response.blob()   

            const storageRef = ref(storage, 'itemImages/' + new Date().getTime())
            const uploadTask = uploadBytesResumable(storageRef, blob)

            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ;
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
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.textmargin}>choose an image to submit</ThemedText>
            <TouchableOpacity onPress={() => chooseFromGallery()}>
                <Image style={styles.image} source={image ? {uri: image} : defaultImg} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => saveImageToStorage(image)}>
                <MaterialCommunityIcons name="file-image-outline" size={24} color="white" />
                <ThemedText>submit image</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textmargin: {
        marginBottom: 20
    },
    pageMargin: {
        marginTop: 80
    },
    image: {
        height: 150,
        width: 150,
        borderWidth: 2,
        borderColor: "#777",
        borderRadius: 50,
        marginBottom: 20
    },
    button: {
        paddingVertical: 20,
        backgroundColor: "#6C63FF",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        width: "60%",
        borderRadius: 10
    }
})