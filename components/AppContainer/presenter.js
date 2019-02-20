import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../Navigation/LoggedOutNavitation";
import RootNavigation from "../../Navigation/RootNavigation";

class AppContainer extends Component {
   static propTypes = {
      isLoggedIn: PropTypes.bool.isRequired
   };

   render() {
      const { isLoggedIn, profile } = this.props;

      return (
         <View style={styles.container}>
            {/* <StatusBar hidden={false} /> */}
            {isLoggedIn && profile ? (
               <RootNavigation screenProps={{ username: profile.username }} />
            ) : (
               <LoggedOutNavigation />
            )}
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   }
});

export default AppContainer;
