import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";
import { ReactComponent as Logo } from "../images/logo.svg";
import { auth } from "../firebase/firebase";
import { loginStatus } from "../redux/actions/loginStatus";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [showPanel, setShowPanel] = useState(false);
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

  useEffect(() => {
    const clickHide = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const accepted = ["userAvatar", "userPanel", "userPanelEl"];
      console.log(target.classList[0]);
      if (accepted.includes(target.classList[0])) return;
      setShowPanel(false);
    };
    window.addEventListener("click", clickHide);
    return () => window.removeEventListener("click", clickHide);
  }, []);

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
              <li
                className="userPanelContainer"
                onClick={() => setShowPanel(true)}
              >
                <img className="userAvatar" src={user.avatar} alt={user.name} />
                {showPanel && (
                  <ul className="userPanel">
                    <li className="userPanelEl">
                      <Link className="userPanelPadding" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li className="userPanelEl">
                      {" "}
                      <Link
                        className="userPanelPadding"
                        to="/profile/settings "
                      >
                        Settings
                      </Link>
                    </li>
                    <li
                      className="userPanelEl userPanelPadding"
                      onClick={signOut}
                    >
                      Sign out
                    </li>
                  </ul>
                )}
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
