import cookies from "browser-cookies";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../constants/index";

const initState = {
  token: typeof window !== "undefined" ? cookies.get("token") : null,
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      if (typeof window !== "undefined") {
        cookies.set("token", payload.token, { expires: 365 });
      }
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      if (typeof window !== "undefined") {
        cookies.erase("token");
      }
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };

    default:
      return state;
  }
}
