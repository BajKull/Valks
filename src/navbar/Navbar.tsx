import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";
import { ReactComponent as Logo } from "../landing/logo.svg";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  const signIn = () => {
    dispatch(modalScreen("signin"));
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <Logo className="logo" />
        </li>
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
