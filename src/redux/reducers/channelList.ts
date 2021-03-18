import { Channel } from "../../types";
type Action = { type: string; payload: Channel[] | Channel };

const ChannelList = (state = [], action: Action) => {
  switch (action.type) {
    case "CHANNEL_LIST_SET":
      return action.payload;
    case "CHANNEL_LIST_ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ChannelList;
