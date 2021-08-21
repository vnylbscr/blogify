import { LOGIN, LOGOUT, REGISTER, SET_USER } from '../actions/user';

const token = localStorage.getItem('token');
const INITIAL_STATE = {
   user: null,
   token: token ? token : '',
};

export const userReducer = (state = INITIAL_STATE, action) => {
   const { type, payload } = action;
   switch (type) {
      case SET_USER:
         return {
            ...state,
            user: payload,
         };
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
