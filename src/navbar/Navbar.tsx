import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";
import { ReactComponent as Logo } from "../images/logo.svg";
import { auth } from "../firebase/firebase";
import { loginStatus } from "../redux/actions/loginStatus";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
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
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </li>
        <li>About</li>
        <li>Categories</li>
        <div className="user">
          {user && user !== "noUser" ? (
            <>
              {!location.pathname.includes("channels") && (
                <li>
                  <Link to="/channels" className="mainButton">
                    Open Valks
                  </Link>
                </li>
              )}
              <li onClick={signOut} className="secondaryButton">
                Sign out
              </li>
            </>
          ) : (
            <li className="mainButton" onClick={signIn}>
              Sign in
            </li>
          )}
        </div>
      </ul>
    </div>
  );
}
