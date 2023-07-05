import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Chip, PaperProvider } from "react-native-paper";
import { Avatar, Button, Card } from "react-native-paper";
import { useState, useEffect } from "react";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';


function Comments({ navigation, route }) {
    const {id} = route.params;
    const [comments, setComments] = useState([]);
    const { width } = useWindowDimensions();

    useEffect(() => {
        fetch(`https://dev.to/api/comments?a_id=${id}`)
          .then((res) => res.json())
          .then((data) => {
            setComments(data);
          });
      }, []);

      comments && console.log("this is comments")

      function map() {
        return comments.map((e) => {
          return (
            <Card style={{ gap: 5 }}>
            <RenderHtml contentWidth={width} source={{ html: e.body_html }} />
          </Card>
          );
        });
      }


    return (
      <View>
        <Text>Comments : </Text>
        <View>
            <ScrollView>
            {map()}
            </ScrollView>
        </View>
        <Chip icon="information" onPress={() => navigation.navigate("Home")}>
          back home
        </Chip>
        <Chip icon="information" onPress={() => navigation.navigate("details", {
            slug : slug
        })}>
          back details
        </Chip>
      </View>
    );
  }

  export default Comments