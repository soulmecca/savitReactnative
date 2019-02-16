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

      if (token) {
         dispatch({
            type: LOG_IN,
            payload: token
         });
      }
      if (user) {
         dispatch(setUser(user));
      }
   } catch (err) {
      console.log("Error: ", err);
   }
};

export const logout = () => async dispatch => {
   return {};
};
