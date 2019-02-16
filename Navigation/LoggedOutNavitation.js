import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../Screens/LoginScreen";
const LoggedOutNavigation = createStackNavigator({
   Login: {
      screen: LoginScreen,
      navigationOptions: {
         header: null
      }
   }
});

export default createAppContainer(LoggedOutNavigation);
