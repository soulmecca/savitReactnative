import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "../Screens/SearchScreen";
import shardRoutes, { sharedOptions } from "./sharedRoutes";

const SearchRoute = createStackNavigator(
   {
      Search: {
         screen: SearchScreen
      },
      ...shardRoutes
   },
   {
      ...sharedOptions
   }
);

export default createAppContainer(SearchRoute);
