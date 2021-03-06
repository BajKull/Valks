import { Channel, Message, UserList } from "../../types";
type Action = {
  type: string;
  payload:
    | string
    | Channel[]
    | Channel
    | UserList
    | Message
    | Message[]
    | UserList;
};

const ChannelList = (state = [], action: Action) => {
  switch (action.type) {
    case "CHANNEL_LIST_SET":
      return action.payload;
    case "CHANNEL_LIST_ADD":
      return [...state, action.payload];
    case "CHANNEL_LIST_LEAVE":
      const id = action.payload as string;
      return state.filter((channel: Channel) => channel.id !== id);
    case "CHANNEL_USER_LIST":
      const users: UserList = action.payload as UserList;
      console.log(users.users);
      return state.map((channel: Channel) => {
        if (channel.id !== users.channel) return channel;
        else return { ...channel, users: users.users };
      });
    case "CHANNEL_MESSAGE_ADD":
      return state.map((channel: Channel) => {
        const msg = action.payload as Message;
        const msgTemp = { ...msg };
        delete msgTemp.channel;
        if (channel.id !== msg.channel) return channel;
        return { ...channel, messages: [...channel.messages, msgTemp] };
      });
    case "CHANNEL_MESSAGE_SET":
      return state.map((channel: Channel) => {
        const messages: Message[] = action.payload as Message[];
        if (channel.id !== messages[0].channel) return channel;
        else return { ...channel, messages };
      });
    default:
      return state;
  }
};

export default ChannelList;
