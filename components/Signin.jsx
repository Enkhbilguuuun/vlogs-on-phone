import React from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import SignInWithOAuth from "./SignInWithOAuth"


export function SignInScreen({onSignUpPress}) {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");


  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      console.log(err);
    }
  };
  return (
  
     <View style={styles.container}>
       <Text style={styles.header}>Signin</Text>
      <View style={styles.smallcont}>
      <View>
        <TextInput
         style={styles.input}
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.button} >Sign in</Text>
      </TouchableOpacity>
      <SignInWithOAuth/>
      <TouchableOpacity onPress={onSignUpPress}>
        <Text style={styles.blue}>if u dont have account, create one</Text>
      </TouchableOpacity>
      </View>
    </View>

  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"lightblue"

  },
  smallcont: {
    height:300,
    width:340,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-around",
    borderWidth:2,
    borderRadius:6
  },
  input:{
    width:200,
    borderBottomWidth:1,
    height:30,
    borderRadius:6,
  },
  button:{
    height:20,
    width:50,
    backgroundColor:"green",
    color:"white",
    textAlign:"center",
    borderRadius:6
  },
  blue:{
    color:"blue",
    width:250,
  },
  header:{
    fontSize:100,
    fontWeight:"bold",
    color:"white"
  }

});