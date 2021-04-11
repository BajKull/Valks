import { blockUser } from "../../connection/socketActions";
import { User } from "../../types";

export const blockUserAction = (user: User, blocked: string) => {
  blockUser(user, blocked);
  return {
    type: "BLOCK_USER",
    payload: blocked,
  };
};
