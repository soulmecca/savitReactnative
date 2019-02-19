import { createStackNavigator, createAppContainer } from "react-navigation";
import FeedScreen from "../Screens/FeedScreen";
import shardRoutes, { sharedOptions } from "./sharedRoutes";

const HomeRoute = createStackNavigator(
   {
      Home: {
         screen: FeedScreen
      },
      ...shardRoutes
   },
   {
      ...sharedOptions
   }
);

export default createAppContainer(HomeRoute);
