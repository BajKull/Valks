import { Channel, Message } from "../../types";

type Action = { type: string; payload: Channel | Message };

const CurrentChannel = (state: Channel | null = null, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_CHANNEL":
      return action.payload;
    case "CURRENT_CHANNEL_ADD_MESSAGE":
      return { ...state, messages: [state?.messages, action.payload] };
    default:
      return state;
  }
};

export default CurrentChannel;
