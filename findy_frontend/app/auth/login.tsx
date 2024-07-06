import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Link, router } from 'expo-router';

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView>
      <ThemedText style={styles.login}>Login</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.text}>Email</ThemedText>
        <TextInput style={styles.textInput}/>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.text}>Password</ThemedText>
        <TextInput style={styles.textInput}/>
        <ThemedText style={styles.forgot}>Forgot password?</ThemedText>
      </ThemedView>
      <ThemedView>
      <TouchableOpacity style={styles.button} onPress={() => router.push('../(drawer)')}>
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </TouchableOpacity>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.first}>Don't have an account? <Link href={'./signup'} style={styles.after}>Sign up</Link></ThemedText>
      </ThemedView>
    </ThemedView>
  );
};
    export default Login;

const styles= StyleSheet.create({
    container:{ 
        alignItems: 'center',
        justifyContent: 'center',
      paddingVertical: 210
    },
    login:{
      paddingTop:40,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom:30,
    },
    textInput:{
        color:'#EEEEEE',
        borderRadius:15,
        borderWidth:2,
        borderColor:'#D2CECE',
        marginBottom: 20,
        height:50,
        width:300,
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    text:{
        marginBottom:10,
        paddingLeft:8,
        fontWeight:'bold',
        fontSize:22
    },
    button:{
      backgroundColor: '#6C63FF',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 40,
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: 280,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight:'bold',
    },
    after:{
        color:'blue',
        marginRight:5,
        textDecorationLine:'underline',
    },
    first:{
        marginTop:10,
        marginHorizontal:10, 
    },
    forgot:{
      fontWeight:'bold',
      textAlign:'right',
      color: 'blue',    
    }

})