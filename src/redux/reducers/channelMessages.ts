import { Message } from "../../types";

type Action = { type: string; payload: Message[] | Message[] };

const ChannelMessages = (state = [], action: Action) => {
  switch (action.type) {
    case "CHANNEL_MESSAGES_SET":
      return action.payload;
    case "CHANNEL_MESSAGES_ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ChannelMessages;
