import { Message } from "../../types";

export const channelMessagesSet = (status: Message[]) => {
  return {
    type: "CHANNEL_MESSAGE_SET",
    payload: status,
  };
};

export const channelMessagesAdd = (status: Message) => {
  return {
    type: "CHANNEL_MESSAGE_ADD",
    payload: status,
  };
};
