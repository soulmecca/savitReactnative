import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import {
   View,
   Text,
   Image,
   StyleSheet,
   Dimensions,
   TouchableOpacity,
   TextInput,
   StatusBar,
   ActivityIndicator
} from "react-native";

const { width, height } = Dimensions.get("window");

const LoginScreen = props => (
   <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.header}>
         <Image
            source={require("../../assets/images/logo-white.png")}
            resizeMode="stretch"
            style={styles.logo}
         />
      </View>
      <View style={styles.content}>
         <TextInput
            placeholder="Username"
            style={styles.textInput}
            autoCapitalize={"none"}
            autoCorrect={false}
            value={props.username}
            onChangeText={props.changeUsername}
            returnKeyType={"send"}
            onSubmitEditing={props.onSubmit}
         />
         <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
            value={props.password}
            onChangeText={props.changePassword}
            returnKeyType={"send"}
            onSubmitEditing={props.onSubmit}
         />
         <TouchableOpacity style={styles.touchable} onPressOut={props.onSubmit}>
            <View style={styles.button}>
               {props.isSubmitting ? (
                  <ActivityIndicator size="small" color="white" />
               ) : (
                  <Text style={styles.btnText}>Login</Text>
               )}
            </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.fbContainer}>
            <View style={styles.fbView}>
               <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
               <Text style={styles.fbText}>Login with Facebook</Text>
            </View>
         </TouchableOpacity>
      </View>
   </View>
);

LoginScreen.propTypes = {
   isSubmitting: PropTypes.bool.isRequired,
   username: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
   changePassword: PropTypes.func.isRequired,
   changeUsername: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   header: {
      flex: 1,
      backgroundColor: "#4E65B4",
      alignItems: "center",
      justifyContent: "center",
      width: width
   },
   logo: {
      marginTop: 14,
      width: 180,
      height: 60
   },
   content: {
      flex: 4,
      backgroundColor: "white",
      paddingTop: 20,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 50
   },
   fbContainer: {
      marginTop: 50
   },
   fbView: {
      flexDirection: "row",
      alignItems: "center"
   },
   fbText: {
      color: "#3E99EE",
      marginLeft: 10,
      fontWeight: "600",
      fontSize: 14
   },
   textInput: {
      height: 50,
      borderColor: "#bbb",
      borderWidth: StyleSheet.hairlineWidth,
      width: width - 80,
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: "#FAFAFA",
      fontSize: 14
   },
   touchable: {
      borderRadius: 5,
      backgroundColor: "#3E99EE",
      marginTop: 25
   },
   button: {
      paddingHorizontal: 7,
      paddingVertical: 20,
      width: width - 80
   },
   btnText: {
      color: "white",
      fontWeight: "600",
      textAlign: "center",
      fontSize: 14
   }
});

export default LoginScreen;
