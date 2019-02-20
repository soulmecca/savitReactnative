import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import {
   Ionicons,
   Foundation,
   MaterialIcons,
   Feather
} from "@expo/vector-icons";
import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";

const TabsNavigation = createBottomTabNavigator(
   {
      Home: {
         screen: HomeRoute,
         navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
               <Foundation name={"home"} size={30} color={tintColor} />
            )
         }
      },
      Search: {
         screen: SearchRoute,
         navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
               <MaterialIcons name={"search"} size={33} color={tintColor} />
            )
         }
      },
      AddPhoto: {
         screen: View,
         navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => (
               <Feather name={"plus-square"} size={30} color={tintColor} />
            ),
            tabBarOnPress: () => {
               navigation.navigate("TakePhoto");
            }
         })
      },
      Notifications: {
         screen: NotificationsRoute,
         navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
               <Ionicons
                  name={focused ? "ios-heart" : "ios-heart-empty"}
                  size={30}
                  color={tintColor}
               />
            )
         }
      },
      Profile: {
         screen: ProfileRoute,
         navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
               <MaterialIcons
                  name={focused ? "person" : "person-outline"}
                  size={32}
                  color={tintColor}
               />
            )
         }
      }
   },
   {
      tabBarPosition: "bottom",
      tabBarOptions: {
         showLabel: false,
         style: {
            backgroundColor: "#FBFBFB",
            height: 45
         },
         activeTintColor: "black"
      }
   }
);

export default TabsNavigation;
