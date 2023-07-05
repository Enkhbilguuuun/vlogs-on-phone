import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import { Chip, PaperProvider } from "react-native-paper";
import { Avatar, Button, Card } from "react-native-paper";
import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Homescreen from "./components/Homepage";
import Details from "./components/Details";
import Comments from "./components/Comments";
import Profile from "./components/Profile";
import {SignUpScreen} from "./components/Signup";
import {SignInScreen} from "./components/Signin";
import Flow from "./components/Flow";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CLERK_PUBLISHABLE_KEY =
  "pk_test_YWxsb3dlZC10ZXJyaWVyLTMwLmNsZXJrLmFjY291bnRzLmRldiQ";

function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Stack"
        component={Stacks}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="easter egg" component={Profile} />
    </Drawer.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="comments" component={Comments} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <PaperProvider>
          <NavigationContainer>
            <Drawers />
          </NavigationContainer>
        </PaperProvider>
      </SignedIn>
      <SignedOut>
        <Flow/>
      </SignedOut>
    </ClerkProvider>
  );
}
