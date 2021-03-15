type Action = { type: string; payload: boolean };

const LoginStatus = (state = null, action: Action) => {
  switch (action.type) {
    case "CHANGE_LOGIN_STATUS":
      return action.payload;
    default:
      return state;
  }
};

export default LoginStatus;
