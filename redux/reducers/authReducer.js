import { AsyncStorage } from "react-native";
import { LOG_IN, LOG_OUT, SET_USER } from "../actions/types";

const initialState = {
   isLoggedIn: false
};

export default (state = initialState, action) => {
   switch (action.type) {
      case LOG_IN:
         return applyLogin(state, action);
      case LOG_OUT:
         return applyLogout(state);
      case SET_USER:
         return applySetUser(state, action);
      default:
         return state;
   }
};

function applyLogin(state, action) {
   return {
      ...state,
      isLoggedIn: true,
      token: action.payload
   };
}

function applyLogout(state) {
   AsyncStorage.clear();
   return {
      ...state,
      isLoggedIn: false,
      token: ""
   };
}

function applySetUser(state, action) {
   return {
      ...state,
      profile: action.payload
   };
}
