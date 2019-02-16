import axios from "axios";
import { API_URL } from "../constants";

export const auth = axios.create({
   baseURL: `${API_URL}/rest-auth`,
   headers: {
      "Content-type": "application/json"
   }
});

export const socialLogin = axios.create({
   baseURL: "/users/login",
   headers: {
      "Content-type": "application/json"
   }
});
