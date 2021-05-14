import { activeUser } from "../../connection/socketActions";
import { SocketCallback, User } from "../../types";
import { channelListSet } from "./channelList";
import { changeLoadingScreen } from "./loadingScreen";
import { setNotifications } from "./notifications";

export const loginStatus = (status: any) => {
  return {
    type: "CHANGE_LOGIN_STATUS",
    payload: status,
  };
};

export const activeUserAction = (email: string) => {
  return async (dispatch: any) => {
    activeUser(email, (callback: SocketCallback) => {
      if (callback.type === "success") {
        const user: User = {
          name: callback.data.name,
          email: callback.data.email,
          avatar: callback.data.avatar,
          publicChannels: [],
          blockList: callback.data.blockList,
        };
        dispatch(loginStatus(user));
        dispatch(setNotifications(callback.data.notifications));
        dispatch(channelListSet(callback.data.channels));
        dispatch(changeLoadingScreen(false));
      }
    });
  };
};
