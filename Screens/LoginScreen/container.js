import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginScreen from "./presenter";
import { Alert } from "react-native";

class LoginContainer extends Component {
   state = {
      username: "",
      password: "",
      isSubmitting: false
   };

   static propTypes = {
      usernameLogin: PropTypes.func.isRequired,
      facebookLogin: PropTypes.func.isRequired
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
            facebookLogin={this.handleFacebookLogin}
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

   onSubmit = async () => {
      const { username, password } = this.state;
      if (!this.isSubmitting) {
         if (username && password) {
            this.setState({
               isSubmitting: true
            });
            const result = await this.props.usernameLogin(username, password);

            if (!result) {
               Alert.alert("Something went wrong, try agina");
               this.setState({
                  isSubmitting: false
               });
            }
         } else {
            Alert.alert("All fields are requesd");
         }
      }
   };

   handleFacebookLogin = async () => {
      this.setState({
         isSubmitting: true
      });
      const result = await this.props.facebookLogin();
      if (!result) {
         this.setState({ isSubmitting: false });
      }
   };
}

export default LoginContainer;
