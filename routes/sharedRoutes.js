import React from "react";
import LikesScreen from "../Screens/LikesScreen";
import CommentsScreen from "../Screens/CommentsScreen";
import NavButton from "../components/NavButton";

export const sharedOptions = {
   navigationOptions: {
      title: "Detail Penginapan",
      headerTitleStyle: {
         fontSize: 14,
         textAlign: "center",
         flex: 1
      },
      tabBarVisible: false,
      headerStyle: {
         backgroundColor: "#4A94FB",
         borderBottomColor: "transparent"
      },
      headerTintColor: "white",
      headerBackTitle: null,
      headerLeft: props => <NavButton {...props} iconName={"ios-arrow-back"} />
   }
};

const sharedRoutes = {
   Likes: {
      screen: LikesScreen
   },

   Comments: {
      screen: CommentsScreen
   }
};

export default sharedRoutes;
