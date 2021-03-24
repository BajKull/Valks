import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";
import { ReactComponent as Logo } from "../images/logo.svg";
import { auth } from "../firebase/firebase";
import { loginStatus } from "../redux/actions/loginStatus";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  const signIn = () => {
    dispatch(modalScreen("signin"));
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(loginStatus("noUser"));
    });
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
          <li onClick={signOut} className="mainButton">
            {user.email}
          </li>
        ) : (
          <li className="mainButton" onClick={signIn}>
            Sign in
          </li>
        )}
      </ul>
    </div>
  );
}
