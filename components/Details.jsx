import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Chip, PaperProvider } from "react-native-paper";
import { Avatar, Button, Card } from "react-native-paper";
import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

function Details({ navigation, route }) {
  const { slug } = route.params;
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetch(`https://dev.to/api/articles/whitep4nth3r/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      });
  }, []);

  const [article, setArticle] = useState();

  if (!article) return;
  <Text>Loading...</Text>;

  article && console.log(article.id);

  return (
    <View>
      <ScrollView>
        <Text>{article && article.title}</Text>
        <RenderHtml contentWidth={width} source={{ html: article.body_html }} />
        <Chip
          icon="information"
          onPress={() =>
            navigation.navigate("comments",{
                id : article.id
            })
          }
        >
          Comments
        </Chip>
      </ScrollView>
    </View>
  );
}

export default Details;
