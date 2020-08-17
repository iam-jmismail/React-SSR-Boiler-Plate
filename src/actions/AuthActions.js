import axios from "axios";
import { returnErrors, clearErrors } from "./ErrorActions";
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

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("auth/user", configHeaders(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const register = ({ email, password }) => (dispatch) => {
  //  Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Body
  const body = JSON.stringify({ email, password });

  axios
    .post("/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  //  Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Body
  const body = JSON.stringify({ email, password });

  axios
    .post("/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

export const configHeaders = (getState) => {
  // Token
  const token = getState().auth.token;

  //  Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
