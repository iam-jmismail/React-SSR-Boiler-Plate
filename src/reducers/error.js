import { CLEAR_ERRORS, GET_ERRORRS } from "../constants/index";

const initState = {
  msg: {},
  status: null,
  id: null,
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ERRORRS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };

    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };

    default:
      return state;
  }
}
