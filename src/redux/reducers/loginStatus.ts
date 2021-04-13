import { User } from "../../types";

type Action = { type: string; payload: any };

const LoginStatus = (state: User | null = null, action: Action) => {
  switch (action.type) {
    case "CHANGE_LOGIN_STATUS":
      return action.payload;
    case "BLOCK_USER":
      const index = state?.blockList.findIndex((u) => u === action.payload);
      if (!state) return state;
      if (index === -1)
        return { ...state, blockList: [...state.blockList, action.payload] };
      return {
        ...state,
        blockList: state.blockList.filter((b) => b !== action.payload),
      };
    default:
      return state;
  }
};

export default LoginStatus;
