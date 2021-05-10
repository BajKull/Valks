import React, { useRef, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import DeleteModal from "./DeleteModal";
import PasswordModal from "./PasswordModal";
import { modalScreen } from "../redux/actions/modalScreen";
import ChangeAvatar from "./ChangeAvatar";

export default function Profile() {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootStateOrAny) => state.modalScreen);
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  if (user === "noUser") return <Redirect to="/" />;
  else if (user === null) return <></>;
  return (
    <div className="userProfile">
      {modal === "delete" && <DeleteModal />}
      {modal === "password" && <PasswordModal />}
      <h1 className="userProfileTitle">{user.name}</h1>
      <ChangeAvatar />
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
