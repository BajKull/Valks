import { channelListAdd } from "./channelList";
import { SocketCallback } from "./../../types";
import { joinPublicChannel } from "./../../connection/socketActions";
import { User } from "../../types";

export const joinPublic = (
  user: User,
  category: string,
  cb: (res: string) => void
) => {
  return async (dispatch: any) => {
    joinPublicChannel(user, category, (callback: SocketCallback) => {
      if (callback.type === "success") {
        dispatch(channelListAdd(callback.data));
        cb("success");
      }
    });
  };
};
