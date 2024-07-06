import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const Profile = () =>{
    return(
        <View>
            <View>
            <Text style={styles.Personal}>Personal Information</Text>
        </View>
        <View>
            <Text style={styles.text}>User name</Text>
            <TextInput style={styles.TextInput} placeholder=""/>
        </View>
        <View>
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.TextInput} placeholder=""/>
        </View>
        <View>
            <Text style={styles.text}>Phone Number</Text>
            <TextInput style={styles.TextInput} placeholder=""/>
        </View>
        <View>
            <Text style={styles.text}>Language</Text>
            <TextInput style={styles.TextInput} placeholder=""/>
        </View>
        <View>
            <Text style={styles.text}>Location</Text>
            <TextInput style={styles.TextInput} placeholder=""/>
        </View>
        </View>
    );
};

export default Profile;

const styles=StyleSheet.create({
    TextInput:{
        color:'gray',
        borderRadius:10,
        borderWidth:1,
        borderColor:'gray',
        marginBottom: 15,
        height:45,
        width:280,
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    Personal:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:20,
    },
    text:{
        marginBottom:6,
        paddingLeft:8,
    },
});