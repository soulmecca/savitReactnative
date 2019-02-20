import React from "react";
import { View, Text } from "react-native";

const FeedScreen = props => {
   return <Text onPress={() => props.navigation.navigate("Likes")}>Feed</Text>;
};

export default FeedScreen;
