export const loginScreen = (screen: boolean) => {
  return {
    type: "CHANGE_SCREEN_LOGIN",
    payload: screen,
  };
};
