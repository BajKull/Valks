import { Channel, Message, UserList } from "../../types";
type Action = {
  type: string;
  payload: Channel[] | Channel | UserList | Message | Message[];
};

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
    case "CHANNEL_MESSAGE_ADD":
      return state.map((channel: Channel) => {
        const msg = action.payload as Message;
        if (channel.id !== msg.channel.id) return channel;
        return { ...channel, messages: [...channel.messages, msg] };
      });
    case "CHANNEL_MESSAGE_SET":
      return state.map((channel: Channel) => {
        const messages: Message[] = action.payload as Message[];
        if (channel.id !== messages[0].channel.id) return channel;
        else return { ...channel, messages };
      });
    default:
      return state;
  }
};

export default ChannelList;
