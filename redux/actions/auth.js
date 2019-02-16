import { auth } from "../../apis/auth";
import { LOG_IN, LOG_OUT, SET_USER } from "./types";

function setUser(user) {
   return {
      type: SET_USERS,
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

export const logout = () => async dispatch => {
   return {};
};
