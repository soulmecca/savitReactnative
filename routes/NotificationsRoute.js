import { createStackNavigator, createAppContainer } from "react-navigation";
import NotificationsScreen from "../Screens/NotificationsScreen";
import shardRoutes, { sharedOptions } from "./sharedRoutes";

const NotificationsRoute = createStackNavigator(
   {
      Notifications: {
         screen: NotificationsScreen,
         navigationOptions: {
            headerTitle: "Notifications"
         }
      },
      ...shardRoutes
   },
   {
      ...sharedOptions
   }
);

export default createAppContainer(NotificationsRoute);
