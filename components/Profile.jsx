import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { Chip, PaperProvider } from "react-native-paper";
import { Avatar, Button, Card } from "react-native-paper";
import { useState, useEffect } from "react";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { useUser } from "@clerk/clerk-react";


function Profile({ navigation,}) {

  const { isSignedIn, user, isLoaded } = useUser();
  const image = {uri: user.imageUrl};

  console.log(user.emailAddress)

  if(!isLoaded){
    return <Text>null at the moment</Text>
  }
  if(isSignedIn){
    return <View style={styles.container}>
      <View style={styles.smallcont}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Profile</Text>
      </View>
      <View style={styles.mainpart}>
      <View style={styles.circle}>
      <ImageBackground source={image} resizeMode="cover">
    </ImageBackground>
      </View>
      <View style={styles.namecont}>
      <Text style={styles.fullname}>{user.fullName}</Text>
        <Text style={styles.email}>{user.emailAddress}</Text>
      </View>
      </View>
      </View>
    </View>
  }

  return <Text>Not signed in</Text>

  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"purple"
    },
    smallcont:{
      height:800,
      width:385,
      backgroundColor:"white",
      position:"relative",
      alignItems:"center"
    },
    header:{
      height:120,
      width:375,
      backgroundColor:"yellow",
      borderRadius:20,
      top:10,
      display:"flex",
      alignItems:"flex-start",
      justifyContent:"flex-end",
      padding:15
    },
    mainpart:{
      height:80,
      width:365,
      backgroundColor:"#0601B4",
      marginTop:12,
      borderRadius:20,
      position:"relative",
      display:"flex",
      flexDirection:"row"
    },
    circle:{
      height:60,
      width:60,
      backgroundColor:"white",
      marginLeft:10,
      borderRadius:100,
      top:10,
      backgroundColor:"yellow",
      borderWidth:3,
      borderColor:"white"
    },
    namecont:{
      position:"absolute",
      top:10,
      left:100
    },
    fullname:{
      color:"white"
    },
    email:{
      color:"#b5b5b5"
    },
    headertext:{
      fontSize:20,
      fontWeight:"bold",

    }


  
  });

  export default Profile