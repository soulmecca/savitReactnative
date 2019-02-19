import { createStackNavigator, createAppContainer } from "react-navigation";
import TakePhotoScreen from "../Screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigations";

const RootNavigation = createStackNavigator(
   {
      Tabs: {
         screen: TabsNavigation,
         navigationOptions: {
            header: null
         }
      },
      TakePhoto: {
         screen: TakePhotoScreen,
         navigationOptions: {
            header: null
         }
      }
   },
   {
      mode: "modal",
      defaultNavigationOptions: {
         gesturesEnabled: true
      }
   }
);

export default createAppContainer(RootNavigation);
