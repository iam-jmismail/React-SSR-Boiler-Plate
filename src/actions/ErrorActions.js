import { GET_ERRORRS, CLEAR_ERRORS } from "../constants/index";

export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORRS,
    payload: { msg, status, id },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
