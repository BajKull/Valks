type Action = { type: string; payload: string };

const LoginScreen = (state = null, action: Action) => {
  switch (action.type) {
    case "CHANGE_SCREEN_LOGIN":
      return action.payload;
    default:
      return state;
  }
};

export default LoginScreen;
