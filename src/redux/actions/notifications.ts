import { channelListAdd } from "./channelList";
import { acceptInvitation } from "../../connection/socketActions";
import { SocketCallback, UserNotification } from "../../types";

export const addNotification = (notification: UserNotification) => {
  return {
    type: "ADD_NOTIFICATION",
    payload: notification,
  };
};

export const removeNotification = (notification: UserNotification) => {
  return {
    type: "REMOVE_NOTIFICATION",
    payload: notification,
  };
};

export const setNotifications = (notifications: UserNotification[]) => {
  return {
    type: "SET_NOTIFICATIONS",
    payload: notifications,
  };
};

export const acceptNotification = (notification: UserNotification) => {
  return async (dispatch: any) => {
    acceptInvitation(notification, (callback: SocketCallback) => {
      if (callback.type === "success") {
        console.log(callback);
        dispatch(channelListAdd(callback.data));
        dispatch(removeNotification(notification));
      }
    });
  };
};
