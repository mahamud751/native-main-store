
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Image, StyleSheet, Text, TextInput, Alert, TouchableOpacity, View } from "react-native";


import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { authentication } from '../../firebase'

import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login() {

  const [check, setCheck] = useState(false)
  const [isLogIn, setIsLogIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return unsubscribe
  // }, [])



  const registerUser = () => {

    createUserWithEmailAndPassword(authentication, email, password)
      .then(userCredentials => {
        const user = userCredentials.user
        navigation.navigate('Home')
        console.log('register with', user.email)
      })
      .catch(error => alert(error.message))
  }
  const handleLogIn = () => {

    signInWithEmailAndPassword(authentication, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;

        setIsLogIn(true)
        navigation.navigate('Home')
        console.log('logged with', user.email)
      })
      .catch(error => alert(error.message))
  }

  // const googleSignIn = () => {
  //   signInWithRedirect(authentication, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       // const credential = GoogleAuthProvider.credentialFromResult(result);
  //       // const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;

  //       // name = user.displayName
  //       // email = user.email
  //       // photo = user.photoURL

  //       // your code here
  //       alert(user.displayName);
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       console.log(errorMessage);
  //       // ...
  //     }); signInWithRedirect(authentication, provider)
  //       .then((result) => {
  //         // This gives you a Google Access Token. You can use it to access the Google API.
  //         // const credential = GoogleAuthProvider.credentialFromResult(result);
  //         // const token = credential.accessToken;
  //         // The signed-in user info.
  //         const user = result.user;

  //         // name = user.displayName
  //         // email = user.email
  //         // photo = user.photoURL

  //         // your code here
  //         alert(user.displayName);
  //       })
  //       .catch((error) => {
  //         // Handle Errors here.
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         // The email of the user's account used.
  //         const email = error.email;
  //         // The AuthCredential type that was used.
  //         const credential = GoogleAuthProvider.credentialFromError(error);
  //         console.log(errorMessage);
  //         // ...
  //       });
  // }


  return (
    <View style={{ backgroundColor: 'black' }}>
      <View style={{ padding: 20 }}>

        <View style={{ marginTop: 10 }}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require("../../assets/Online_Groceries-pana-removebg-preview.png")}
              style={{ width: 160, height: 140 }}
            />
          </View>
          <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold", color: 'white' }}>Hello Dear</Text>
          <Text style={{ textAlign: "center", color: 'white', fontSize: 20, marginTop: 10 }}>Welcome back you've been missed!</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <TextInput style={{ padding: 10, backgroundColor: "whitesmoke", borderRadius: 20 }} placeholder="Enter username"
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <View style={{ marginTop: 15 }}>
            <TextInput style={{ padding: 10, backgroundColor: "whitesmoke", borderRadius: 20 }} placeholder="Enter password"
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
        </View>
        <View style={[styles.dividePart, { marginVertical: 10 }]}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Checkbox
              value={check}
              onValueChange={() => setCheck(!check)}
              color={check ? '#4630EB' : undefined}
            />
            <Text style={{ marginLeft: 10 }}>Please check this</Text>
          </View>

        </View>
        <View>
          <TouchableOpacity
            onPress={handleLogIn}
            style={{ backgroundColor: check ? '#4630EB' : 'gray', padding: 20, borderRadius: 30 }}

            disabled={!check}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>Login</Text>
          </TouchableOpacity>

        </View>
        <View>
          <TouchableOpacity
            onPress={registerUser}
            style={{ backgroundColor: check ? '#4630EB' : 'gray', padding: 20, borderRadius: 30, marginTop: 30 }}
            disabled={!check}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }} >Sing up</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginTop: 30,
          }}
        />
        <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
          <TouchableOpacity>
            <Icon.Button
              name="facebook"
              backgroundColor="black"
              size={30} color="white"
            >
            </Icon.Button>
          </TouchableOpacity>

          <Icon.Button
            name="google"
            backgroundColor="black"
            size={30} color="white"
          // onPress={googleSignIn}
          >
          </Icon.Button>


          <Icon.Button
            name="twitter"
            backgroundColor="black"
            size={30} color="white"
            onPress={() => Alert.alert('yes')}
          >
          </Icon.Button>
          {/* <GoogleButton onClick={googleSignIn} /> */}
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
});
