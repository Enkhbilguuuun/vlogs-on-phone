import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Chip, PaperProvider } from "react-native-paper";
import { Avatar, Button, Card } from "react-native-paper";
import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

function Homescreen({ navigation }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=whitep4nth3r")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  function map() {
    return articles.map((e) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("details", {
              slug: e.slug,
            });
          }}
        >
          <Card style={{ gap: 5 }}>
            <Card.Cover source={{ uri: e.cover_image }} />
            <Card.Title title={e.title} subtitle="Etc..." />
          </Card>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View>
      <ScrollView>{map()}</ScrollView>
    </View>
  );
}

export default Homescreen;
