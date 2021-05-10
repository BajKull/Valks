type Action = { type: string; payload: string };

const DisplayError = (state = "", action: Action) => {
  switch (action.type) {
    case "SET_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default DisplayError;
