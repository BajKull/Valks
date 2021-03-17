import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  const signIn = () => {
    dispatch(modalScreen("signin"));
  };

  return (
    <div className="navbar">
      <ul>
        <li>About</li>
        <li>Categories</li>
        {user && user !== "noUser" ? (
          <li className="mainButton">{user.email}</li>
        ) : (
          <li className="mainButton" onClick={signIn}>
            Sign in
          </li>
        )}
      </ul>
    </div>
  );
}
