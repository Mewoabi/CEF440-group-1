import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import myAxios from '@/utils/axios';
import axios from 'axios';
import { Link, router } from 'expo-router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { StyleSheet, Button, TouchableOpacity, TextInput, Image, NativeSyntheticEvent, TextInputChangeEventData, ScrollView, Alert } from 'react-native';

const Signup = () => {

  const [username, setUsername] = useState<string>("");
  const [nameVerified, setNameVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneVerified, setPhoneVerified] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordVerfied, setPasswordVerified] = useState(false)


  const handleSignupUser = async () => { 

    try {
      const response = await fetch('http://192.168.69.19:5500/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, phoneNumber, password }),
      });
  
      const result = await response.json();
      if(response.status== 200) { 
        console.log('Success:', result);
        Alert.alert("Registration Successful!!");
        router.push({
          pathname: './login', 
          params: {email, password}
        })
      } 
      if(response.status == 400) { 
        throw new Error (result.error)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
 

  return (
    <ScrollView keyboardShouldPersistTaps={'always'}>
      <ThemedView style={styles.container}>
        <Image source={require('../../assets/images/findy_transparent.png')} style={styles.logo} />
        <ThemedView>
          <ThemedText style={styles.signup}>Sign up</ThemedText>
        </ThemedView>
        <ThemedView style={styles.group}>
          <ThemedText style={styles.text}>Name</ThemedText>
          <TextInput style={styles.textInput} value={username} onChangeText={(val) => setUsername(val)} />
          {/* {(name.trim().length==1) && <ThemedText style = {styles.error_text}>name must be more than 2 characters long</ThemedText>} */}
        </ThemedView>
        <ThemedView style={styles.group}>
          <ThemedText style={styles.text}>Email</ThemedText>
          <TextInput style={styles.textInput} value={email} onChangeText={(val) => setEmail(val)} />
          {/* {name.length==1 && <ThemedText style = {styles.error_text}>name must be more than 2 characters long</ThemedText>} */}
        </ThemedView>
        <ThemedView style={styles.group}>
          <ThemedText style={styles.text}>Phone</ThemedText>
          <TextInput style={styles.textInput} value={phoneNumber} onChangeText={(val) => setPhoneNumber(val)} />
        </ThemedView>
        <ThemedView style={styles.group}>
          <ThemedText style={styles.text}>Password</ThemedText>
          <TextInput style={styles.textInput} value={password} onChangeText={(val) => setPassword(val)} />
        </ThemedView>
        <ThemedView>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              //  router.push('../(drawer)')
              handleSignupUser()
            }
            }>
            <ThemedText style={styles.buttontext}>Signup</ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.have_account}>
          <ThemedText style={styles.first}>Already have an account? <Link href={'./login'} style={styles.after}>Log in</Link></ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};
export default Signup;


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
  signup: {
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  textInput: {
    color: '#444',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    height: 60,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#eee",
    paddingHorizontal: 15,
    fontSize: 19
  },
  group: {
    marginBottom: 15,
  },
  text: {
    marginBottom: 10,
    paddingLeft: 8,
    fontWeight: 'bold',
    fontSize: 22
  },
  button: {
    backgroundColor: '#6C63FF',
    borderRadius: 15,
    // paddingVertical: 15,
    // paddingHorizontal: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 63

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
  },
  logo: {
    height: 80,
    width: 150
  },
  have_account: {
    marginBottom: 40
  },
  error_text: {
    color: 'red',
    fontSize: 12
  }
})