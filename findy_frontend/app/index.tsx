import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { StyleSheet, Button, TouchableOpacity } from 'react-native'; 
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';


const Welcome = ( ) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.welcomeText}>Welcome</ThemedText>
      <TouchableOpacity style={styles.button} onPress={() => router.push('./auth/signup')} >
        <ThemedText style={styles.buttonText}>Sign Up</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('./auth/login')} >
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({ 
  container: {
    display: "flex", 
    alignItems: "center", 
    paddingTop: 250, 
    paddingBottom: 400
  },
  welcomeText: { 
    paddingTop: 50,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom:50,
    fontStyle: 'italic', 
  },
  button: {
    backgroundColor: '#6C63FF',
    display: "flex", 
    flexDirection:"column",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 65
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: "bold"
  },
});

export default Welcome;

