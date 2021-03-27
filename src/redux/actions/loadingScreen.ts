export const changeLoadingScreen = (status: boolean) => {
  return {
    type: "CHANGE_LOADING_SCREEN",
    payload: status,
  };
};
