import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Chip, PaperProvider } from "react-native-paper";
import { Avatar, Button, Card } from "react-native-paper";
import { useState, useEffect } from "react";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { useUser } from "@clerk/clerk-react";
import { Feather } from '@expo/vector-icons';
import { Image } from "expo-image"
function Profile({ navigation,}) {

  const { isSignedIn, user, isLoaded } = useUser();
  const image = user.profileImageUrl

  // console.log(user.profileIma)

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
    <Image style={styles.circle} source={image} transition={1000}>
    </Image>
      <View style={styles.namecont}>
      <Text style={styles.fullname}>{user.fullName}</Text>
        <Text style={styles.email}>{user.primaryEmailAddress.emailAddress}</Text>
      </View>
     <TouchableOpacity>
     <Feather style={styles.edit} name="edit-2" size={30} color="white" />
     </TouchableOpacity>
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
      backgroundColor:"#C4C4C4",
      position:"relative",
      alignItems:"center"
    },
    header:{
      height:120,
      width:375,
      backgroundColor:"white",
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
    },
    edit:{
      display:"flex",
      top:22,
      left:240
    }


  
  });

  export default Profile