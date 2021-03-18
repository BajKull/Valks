import { Channel } from "../../types";

export const channelListSet = (status: Channel[]) => {
  return {
    type: "CHANNEL_LIST_SET",
    payload: status,
  };
};

export const channelListAdd = (status: Channel) => {
  return {
    type: "CHANNEL_LIST_ADD",
    payload: status,
  };
};
