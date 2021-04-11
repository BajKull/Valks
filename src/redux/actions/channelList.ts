import { Channel, UserList } from "../../types";

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

export const channelUserList = (data: UserList) => {
  return {
    type: "CHANNEL_USER_LIST",
    payload: { users: data.users, channel: data.channel },
  };
};
