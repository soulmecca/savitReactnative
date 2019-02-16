import React from "react";
import { AppLoading, Asset, Font } from "expo";
import { Iconicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

class App extends React.Component {
   state = {
      loading: true
   };
   render() {
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
         <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
         </View>
      );
   }

   loadAsssetsAsync = async () => {
      return Promise.all([
         Assets.loadAsync([
            require("./assets/images/logo.png"),
            require("./assets/images/logo-white.png"),
            require("./assets/images/profile.jpg"),
            require("./assets/images/photoPlaceholder.png")
         ]),
         Font.loadAsync([...Ionicons.font, ...MaterialIcons.font])
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

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
   }
});

export default App;
