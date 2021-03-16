import React from "react";
import { useDispatch } from "react-redux";
import { loginScreen } from "../redux/actions/loginScreen";

export default function Navbar() {
  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(loginScreen("signin"));
  };

  return (
    <div className="navbar">
      <ul>
        <li>About</li>
        <li>Categories</li>
        <li className="mainButton" onClick={signIn}>
          Sign in
        </li>
      </ul>
    </div>
  );
}
