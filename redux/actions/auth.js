import { auth, socialLogin } from "../../apis/auth";
import { Facebook } from "expo";
import { LOG_IN, LOG_OUT, SET_USER } from "./types";
import { FB_APP_ID } from "../../constants";

function setUser(user) {
   return {
      type: SET_USER,
      payload: user
   };
}

export const usernameLogin = (username, password) => async dispatch => {
   try {
      const response = await auth.post("/login/", { username, password });
      console.log(response);
      const {
         data: { token, user }
      } = response;

      if (token && user) {
         dispatch({
            type: LOG_IN,
            payload: token
         });
         dispatch(setUser(user));
      }
      return true;
   } catch (err) {
      console.log("Error: ", err);
      return false;
   }
};

export const logout = () => {
   return {};
};

export const facebookLogin = () => async dispatch => {
   try {
      const { token, type } = await Facebook.logInWithReadPermissionsAsync(
         FB_APP_ID,
         {
            permissions: ["public_profile", "email"]
         }
      );

      if (type === "success") {
         const res = await socialLogin.post("/facebook/", {
            access_token: token
         });

         const fb_token = res.data.token;
         const user = res.data.user;
         if (fb_token && user) {
            dispatch({
               type: LOG_IN,
               payload: fb_token
            });
            dispatch(setUser(user));
         }
         return true;
      }
   } catch (err) {
      console.log(err);
      return false;
   }
};
