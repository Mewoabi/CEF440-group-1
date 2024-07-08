import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import UserContextProvider, { UserContext } from '@/contexts/userContext';
import { user } from '@/types/user';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { dispatch } = useContext(UserContext);

  const handleLoginUser = async () => {
    //for now i will not use the token for authentication. I will just do normal redirection.
    try {
      const response = await fetch('http://192.168.69.19:5500/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.status == 200) {
        // console.log('Success:', result);
        // Alert.alert("Login Successful!!"); 
        dispatch({type: 'LOGIN_USER', payload: result.user as user})
        router.push('../(drawer)')
      }
      if (response.status == 400) {
        throw new Error(result.error)
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
            <ThemedText style={styles.login}>Login</ThemedText>
          </ThemedView>
          <ThemedView>
            <ThemedText style={styles.text}>Email</ThemedText>
            <TextInput style={styles.textInput} value={email} onChangeText={(val) => setEmail(val)} />
          </ThemedView>
          <ThemedView>
            <ThemedText style={styles.text}>Password</ThemedText>
            <TextInput style={styles.textInput} value={password} onChangeText={(val) => setPassword(val)} />
            <ThemedText style={styles.forgot}>Forgot password?</ThemedText>
          </ThemedView>
          <ThemedView>
            <TouchableOpacity style={styles.button} onPress={() => {
              handleLoginUser()
            }}>
              <ThemedText style={styles.buttonText}>Login</ThemedText>
            </TouchableOpacity>
          </ThemedView>
          <ThemedView>
            <ThemedText style={styles.first}>Don't have an account? <Link href={'./signup'} style={styles.after}>Sign up</Link></ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView> 
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100
  },
  login: {
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  textInput: {
    color: '#444',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    marginBottom: 20,
    height: 60,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#eee",
    paddingHorizontal: 15,
    fontSize: 19
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
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 63
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  after: {
    color: 'blue',
    marginRight: 5,
    textDecorationLine: 'underline',
  },
  first: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  forgot: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'blue',
  },
  logo: {
    height: 80,
    width: 150,
    marginBottom: 80
  }
})