import React, { Component } from "react";
import LoginScreen from "./presenter";

class LoginContainer extends Component {
   state = {
      username: "",
      password: "",
      isSubmitting: false
   };

   // static navigationOptions = ({ navigation }) => ({
   //    title: "Log in"
   // });

   render() {
      return <LoginScreen {...this.state} />;
   }
}

export default LoginContainer;
