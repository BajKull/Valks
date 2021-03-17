type Action = { type: string; payload: any };

const ChannelList = (state = [], action: Action) => {
  switch (action.type) {
    case "SET_CHANNELS":
      return action.payload;
    case "ADD_CHANNEL":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ChannelList;
