import React, {useState, useEffect, useCallback} from 'react';
import {
  Alert,
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Calendar from './Calendar.js';
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [login, setLogIn] = useState(false);
  const [create , setCreate] = useState(false)
  const [userId, setUserId] = useState('');
  const Stack = createNativeStackNavigator();
  // console.log("type", email);a
  console.log('userId', userId);

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId:
      '672793026180-8or68jbuk2iafplvke8s1al889ncqro9.apps.googleusercontent.com',
  });

  function createNameDB() {
    const request = {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({email: email, userId: userId}),
    };
    // console.log('request', request);
    console.log('userId1', userId);

    fetch('http://10.0.2.2.:5000/myname', request).then(res =>
      res
        .json()
        .then(d => console.log('d', d))
        .catch(err => {
          console.log('err', err);
        }),
    );
    setUserId('') 
  }
  useEffect(() => {
    if (userId != '') {
      createNameDB();
    }
  }, [userId]);

  if (true
    // login||create === true
    ) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Calendar">
          {props => <Calendar {...props} email={email} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
  // }, [login]);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  function creatAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user.user.email === email) {
          setUserId(user.user.uid)
          setCreate(true);
        }
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!')
          console.log('That email address is already in use!');
        }
      });
  }
  function logIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        if (user.user.email === email) {
          setLogIn(true);
          // setUserId(user.user.uid);
          // () => {

          // };
        }
        console.log('User account  signed in!', user.user.email);
      })

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={setPassword}
        keyboardType="default"
      />
      <Button title="log-in" onPress={() => logIn()} />
      <Button title="create-account" onPress={creatAccount} />
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        // disabled={this.state.isSigninInProgress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;
