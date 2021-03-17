type Action = { type: string; payload: string };

const ModalScreen = (state = null, action: Action) => {
  switch (action.type) {
    case "CHANGE_MODAL_SCREEN":
      return action.payload;
    default:
      return state;
  }
};

export default ModalScreen;
