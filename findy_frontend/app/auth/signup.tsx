import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';

const Signup = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView>
        <ThemedText style={styles.signup}>Sign up</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.text}>Name</ThemedText>
        <TextInput style={styles.textInput} />
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.text}>Email</ThemedText>
        <TextInput style={styles.textInput} />
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.text}>Phone</ThemedText>
        <TextInput style={styles.textInput} />
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.text}>Password</ThemedText>
        <ThemedView>
          <TextInput style={styles.textInput} />
        </ThemedView>
      </ThemedView>
      <ThemedView>
        <TouchableOpacity style={styles.button}  onPress={() => router.push('../(drawer)')}>
          <ThemedText style={styles.buttontext}>Signup</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.first}>Already have an account? <Link href={'./login'} style={styles.after}>Log in</Link></ThemedText>
      </ThemedView>
    </ThemedView>
  );
};
export default Signup;


const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 180
  },
  signup: {
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    color: '#EEEEEE',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#DDDDDD',
    marginBottom: 15,
    height: 50,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginBottom: 10,
    paddingLeft: 8,
    fontWeight: 'bold',
    fontSize: 22
  },
  button: {
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,

  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  after: {
    color: 'blue',
    marginRight: 5,
    textDecorationLine: 'underline'
  },
  first: {
    marginTop: 20,
    marginHorizontal: 10,
    textAlign: 'center'
  }

})