import React, { Component } from "react";
import LoginScreen from "./presenter";
import { Alert } from "react-native";

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
      return (
         <LoginScreen
            {...this.state}
            changeUsername={this.changeUsername}
            changePassword={this.changePassword}
            onSubmit={this.onSubmit}
         />
      );
   }

   changeUsername = text => {
      this.setState({
         username: text
      });
   };

   changePassword = text => {
      this.setState({
         password: text
      });
   };

   onSubmit = () => {
      const { username, password } = this.state;
      if (!this.isSubmitting) {
         if (username && password) {
            this.setState({
               isSubmitting: true
            });
            this.props.usernameLogin(username, password);
         } else {
            Alert.alert("All fields are requesd");
         }
      }
   };
}

export default LoginContainer;
