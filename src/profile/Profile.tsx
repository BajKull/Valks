import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import DeleteModal from "./DeleteModal";
import PasswordModal from "./PasswordModal";
import { modalScreen } from "../redux/actions/modalScreen";

export default function Profile() {
  const dispatch = useDispatch();

  const modal = useSelector((state: RootStateOrAny) => state.modalScreen);
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  const changeAvatar = () => {};

  if (user === "noUser") return <Redirect to="/" />;
  else if (user === null) return <></>;
  return (
    <div className="userProfile">
      {modal === "delete" && <DeleteModal />}
      {modal === "password" && <PasswordModal />}
      <h1 className="userProfileTitle">{user.name}</h1>
      <div className="section">
        <h2 className="sectionTitle">Avatar</h2>
        <div className="content">
          <img className="userAvatar" src={user.avatar} alt={user.name} />
          <div className="info">
            <button className="mainButton" onClick={changeAvatar}>
              Change avatar
            </button>
            <p className="tip">
              Picture has to be formatted as .jpg, .jpeg or .png
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Password</h2>
        <div className="content">
          <button
            className="mainButton"
            onClick={() => dispatch(modalScreen("password"))}
          >
            Change password
          </button>
        </div>
      </div>
      <div className="section">
        <h2>Delete account</h2>
        <div className="content">
          <button
            className="mainButton"
            onClick={() => dispatch(modalScreen("delete"))}
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
