import { LOGIN, LOGOUT, REGISTER } from "../actions/user";

const INITIAL_STATE = {
  user: {},
  token: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        token: payload.token,
      };
    case REGISTER: {
      return {
        ...state,
        user: payload,
        token: payload.token,
      };
    }
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
