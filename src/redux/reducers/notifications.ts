import { UserNotification } from "../../types";

type Action = { type: string; payload: UserNotification };

const Notifications = (state = [], action: Action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, action.payload];
    case "REMOVE_NOTIFICATION":
      const index = state.findIndex(
        (el: UserNotification) => el.id === action.payload.id
      );
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case "SET_NOTIFICATIONS":
      return action.payload;
    default:
      return state;
  }
};

export default Notifications;
