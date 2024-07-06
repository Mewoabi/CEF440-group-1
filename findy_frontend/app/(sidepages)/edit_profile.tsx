import React from "react";
import { Text, View, TextInput, Pressable, StyleSheet, Button, TouchableOpacity, Image } from "react-native"; 
const AddButton = ({ }) => {
    <Pressable>

    </Pressable>
}

const EditProfile = () => {
    return (
        <View>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../../assets/images/profile.jpeg')}
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.cameraIconContainer}>
                    <Text style={styles.cameraIcon}>📷</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.Personal}>Personal Information</Text>
            </View>
            <View>
                <Text style={styles.text}>User name</Text>
                <TextInput style={styles.TextInput} placeholder="" />
            </View>
            <View>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.TextInput} placeholder="" />
            </View>
            <View>
                <Text style={styles.text}>Phone Number</Text>
                <TextInput style={styles.TextInput} placeholder="" />
            </View>
            <View>
                <Text style={styles.text}>Language</Text>
                <TextInput style={styles.TextInput} placeholder="" />
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ccc',
    },
    cameraIconContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#ADD8E6',
        borderRadius: 15,
        padding: 5,
    },
    cameraIcon: {
        fontSize: 18,
        color: '#fff',
    },
    Personal: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'semibold',
        marginBottom: 20
    },
    text: {
        marginBottom: 12,
        paddingLeft: 8,
        fontWeight: 'medium',
        fontSize: 18,
    },
    TextInput: {
        color: 'gray',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#D2CECE',
        marginBottom: 15,
        height: 50,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#6C63FF',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        marginLeft: 85,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }

});