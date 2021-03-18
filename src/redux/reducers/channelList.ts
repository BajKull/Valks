import { Channel, UserList } from "../../types";
type Action = { type: string; payload: Channel[] | Channel | UserList };

const ChannelList = (state = [], action: Action) => {
  switch (action.type) {
    case "CHANNEL_LIST_SET":
      return action.payload;
    case "CHANNEL_LIST_ADD":
      return [...state, action.payload];
    case "CHANNEL_USER_LIST":
      return state.map((channel: Channel) => {
        const users: UserList = action.payload as UserList;
        if (channel.id !== users.channel) return channel;
        else return { ...channel, users: users.users };
      });
    default:
      return state;
  }
};

export default ChannelList;
