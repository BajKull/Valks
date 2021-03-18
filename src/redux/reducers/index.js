import { combineReducers } from "redux";
import ModalScreen from "./modalScreen";
import LoginStatus from "./loginStatus";
import Socket from "./socket";
import ChannelList from "./channelList";
import ChannelMessages from "./channelMessages";

const allReducers = combineReducers({
  modalScreen: ModalScreen,
  loginStatus: LoginStatus,
  socket: Socket,
  channelList: ChannelList,
  channelMessages: ChannelMessages,
});

export { allReducers };
