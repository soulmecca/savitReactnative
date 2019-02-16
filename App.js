import React from "react";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/store";
import AppContainer from "./components/AppContainer";

class App extends React.Component {
   state = {
      loading: true
   };

   render() {
      const { persistor, store } = configureStore();

      if (this.state.loading) {
         return (
            <AppLoading
               startAsync={this.loadAsssetsAsync}
               onError={this.handleLoadingError}
               onFinish={this.handleFinishLoading}
            />
         );
      }
      return (
         <Provider store={store}>
            <PersistGate persistor={persistor}>
               <AppContainer />
            </PersistGate>
         </Provider>
      );
   }

   loadAsssetsAsync = async () => {
      return Promise.all([
         Asset.loadAsync([
            require("./assets/images/logo.png"),
            require("./assets/images/logo-white.png"),
            require("./assets/images/profile.jpg"),
            require("./assets/images/photoPlaceholder.png")
         ]),
         Font.loadAsync({ ...Ionicons.font, ...MaterialIcons.font })
      ]);
   };

   handleFinishLoading = async () => {
      this.setState({
         loading: false
      });
   };

   handleLoadingError = error => {
      console.log(error);
   };
}

export default App;
