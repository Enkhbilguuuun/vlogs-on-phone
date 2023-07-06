import * as React from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import SignInWithOAuth from "./SignInWithOAuth";


export function SignUpScreen({onSignInPress}) {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");


  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err ) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
   
      <View style={styles.container}>
        <Text style={styles.header}>
          Signup
        </Text>
        <View>
        {!pendingVerification && (
        <View style={styles.smallcunt}>
          <View>
            <TextInput
            style={styles.input}
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(email) => setEmailAddress(email)}
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

          <TouchableOpacity onPress={onSignUpPress}>
            <Text style={styles.button}>Sign up</Text>
          </TouchableOpacity>
          <SignInWithOAuth/>
          <TouchableOpacity onPress={onSignInPress}>
            <Text style={styles.blue}>if u already have account, Sign in here</Text>
          </TouchableOpacity>
        </View>
      )}
      {pendingVerification && (
        <View>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
              />
          </View>
          <TouchableOpacity onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
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
  smallcunt: {
    height:300,
    width:340,
    backgroundColor:"white",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
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
