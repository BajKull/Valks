type Action = { type: string; payload: string };

const ModalScreen = (state = [], action: Action) => {
  switch (action.type) {
    case "BLOCK_USER":
      const index = state.findIndex((u) => u === action.payload);
      if (index === -1) return [...state, action.payload];
      return state.filter((u) => u !== action.payload);

    default:
      return state;
  }
};

export default ModalScreen;
