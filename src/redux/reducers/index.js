import { combineReducers } from "redux";
import ModalScreen from "./modalScreen";
import LoginStatus from "./loginStatus";
import ChannelList from "./channelList";
import Notifications from "./notifications";
import LoadingScreen from "./loadingScreen";
import DisplayError from "./displayError";

const allReducers = combineReducers({
  modalScreen: ModalScreen,
  loginStatus: LoginStatus,
  channelList: ChannelList,
  notifications: Notifications,
  loadingScreen: LoadingScreen,
  displayError: DisplayError,
});

export { allReducers };
