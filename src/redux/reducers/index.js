import LoginScreen from "./loginScreen";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  loginScreen: LoginScreen,
});

export { allReducers };
