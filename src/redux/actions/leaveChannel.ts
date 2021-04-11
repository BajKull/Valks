import { Channel, SocketCallback, User } from "./../../types";
import { leaveChannel } from "./../../connection/socketActions";

const leave = (channel: Channel) => {
  return {
    type: "CHANNEL_LIST_LEAVE",
    payload: channel,
  };
};

export const leaveChannelAction = (user: User, channel: string) => {
  return async (dispatch: any) => {
    leaveChannel(user, channel, (callback: SocketCallback) => {
      if (callback.type === "success") {
        console.log(callback);
        dispatch(leave(callback.data));
      }
    });
  };
};
