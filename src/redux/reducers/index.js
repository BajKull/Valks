import { combineReducers } from "redux";
import LoginScreen from "./loginScreen";
import LoginStatus from "./loginStatus";

const allReducers = combineReducers({
  loginScreen: LoginScreen,
  loginStatus: LoginStatus,
});

export { allReducers };
