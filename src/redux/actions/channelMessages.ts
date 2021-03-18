import { Message } from "../../types";

export const channelMessagesSet = (status: Message[]) => {
  return {
    type: "CHANNEL_MESSAGES_SET",
    payload: status,
  };
};

export const channelMessagesAdd = (status: Message) => {
  return {
    type: "CHANNEL_MESSAGES_ADD",
    payload: status,
  };
};
