import { User } from "../../types";
import { changeAvatar } from "../../connection/socketActions";

export const changeAvatarAction = (user: User, url: string) => {
  console.log(url);
  changeAvatar(user, url);
  return {
    type: "CHANGE_AVATAR",
    payload: url,
  };
};
