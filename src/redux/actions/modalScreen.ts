export const modalScreen = (screen: string) => {
  return {
    type: "CHANGE_MODAL_SCREEN",
    payload: screen,
  };
};
