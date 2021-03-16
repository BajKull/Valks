type Action = { type: string; payload: any };

const LoginStatus = (state = null, action: Action) => {
  switch (action.type) {
    case "CHANGE_LOGIN_STATUS":
      return action.payload;
    default:
      return state;
  }
};

export default LoginStatus;
