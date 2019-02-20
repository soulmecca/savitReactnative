import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileScreen from "../Screens/ProfileScreen";
import shardRoutes, { sharedOptions } from "./sharedRoutes";

const ProfileRoute = createStackNavigator(
   {
      Profile: {
         screen: ProfileScreen,
         navigationOptions: ({ screenProps }) => ({
            headerTitle: screenProps.username
         })
      },
      ...shardRoutes
   },
   {
      ...sharedOptions
   }
);

export default createAppContainer(ProfileRoute);
