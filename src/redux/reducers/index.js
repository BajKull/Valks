import { combineReducers } from "redux";
import ModalScreen from "./modalScreen";
import LoginStatus from "./loginStatus";
import Socket from "./socket";
import ChannelList from "./channelList";
import ChannelMessages from "./channelMessages";
import Notifications from "./notifications";

const allReducers = combineReducers({
  modalScreen: ModalScreen,
  loginStatus: LoginStatus,
  socket: Socket,
  channelList: ChannelList,
  channelMessages: ChannelMessages,
  notifications: Notifications,
});

export { allReducers };
