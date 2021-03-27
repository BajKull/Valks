type Action = { type: string; payload: boolean };

const LoadingScreen = (state = true, action: Action) => {
  switch (action.type) {
    case "CHANGE_LOADING_SCREEN":
      return action.payload;
    default:
      return state;
  }
};

export default LoadingScreen;
