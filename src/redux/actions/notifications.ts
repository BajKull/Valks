import { UserNotification } from "../../types";

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
