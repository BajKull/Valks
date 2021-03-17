import { combineReducers } from "redux";
import ModalScreen from "./modalScreen";
import LoginStatus from "./loginStatus";
import Socket from "./socket";
import ChannelList from "./channelList";

const allReducers = combineReducers({
  modalScreen: ModalScreen,
  loginStatus: LoginStatus,
  socket: Socket,
  channelList: ChannelList,
});

export { allReducers };
