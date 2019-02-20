import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FeedScreen from "../Screens/FeedScreen";
import shardRoutes, { sharedOptions } from "./sharedRoutes";
import { Image } from "react-native";
import NavButton from "../components/NavButton";

const HomeRoute = createStackNavigator(
   {
      Home: {
         screen: FeedScreen,
         navigationOptions: ({ navigation }) => ({
            headerTitle: (
               <Image
                  source={require("../assets/images/logo.png")}
                  style={{ height: 35 }}
                  resizeMode={"contain"}
               />
            ),
            headerLeft: (
               <NavButton
                  iconName={"camera"}
                  brand={"feather"}
                  onPress={() => navigation.navigate("TakePhoto")}
               />
            )
         })
      },
      ...shardRoutes
   },
   {
      ...sharedOptions
   }
);

export default createAppContainer(HomeRoute);
