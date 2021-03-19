import { UserNotification } from "../../types";
import moment from "moment";

type Action = { type: string; payload: UserNotification };

const def: UserNotification = {
  id: "asdasd",
  type: "mention",
  message: "Test test test test test test test test test test test.",
  date: moment().format("YYYY-MM-DD HH:MM"),
};

const def2: UserNotification = {
  id: "asdasdasd",
  type: "invitation",
  message: "Test test test test test test test test test test test.",
  date: moment().format("YYYY-MM-DD HH:MM"),
};

const Notifications = (state = [def, def2], action: Action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, action.payload];
    case "REMOVE_NOTIFICATION":
      const index = state.findIndex(
        (el: UserNotification) => el.id === action.payload.id
      );
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};

export default Notifications;
