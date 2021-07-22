import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  userReducer,
  postReducer,
});
