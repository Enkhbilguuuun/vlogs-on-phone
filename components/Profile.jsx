import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity } from "react-native";
import { Chip, PaperProvider } from "react-native-paper";
import { Avatar, Button, Card } from "react-native-paper";
import { useState, useEffect } from "react";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';


function Profile({ navigation,}) {
    // const {slug} = route.params;
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }

  export default Profile