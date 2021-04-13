import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../images/close.svg";
import { blockUserAction } from "../redux/actions/blockUser";
import { User } from "../types";

export default function UserListSelected(props: any) {
  const dispatch = useDispatch();
  const user: User = props.user;
  const loggedUser = useSelector((state: RootStateOrAny) => state.loginStatus);

  const blockUser = () => {
    if (loggedUser.email === user.email) return;
    dispatch(blockUserAction(loggedUser, user.email));
  };

  return (
    <div className="userSelected">
      <Close className="close" onClick={() => props.selUser(null)} />
      <div className="info">
        <img src={user.avatar} alt={user.name} className="userAvatar" />
        <p className="userName">{user.name}</p>
      </div>
      <button
        className="mainButton"
        disabled={user.email === loggedUser.email}
        onClick={blockUser}
      >
        {loggedUser.blockList.includes(user.email) ? "Unblock" : "Block"}
      </button>
    </div>
  );
}
