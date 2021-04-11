import React from "react";
import { useDispatch } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";

export default function InviteButton() {
  const dispatch = useDispatch();

  const inviteScreen = () => {
    dispatch(modalScreen("invite"));
  };

  return (
    <button className="secondaryButton invite" onClick={inviteScreen}>
      Invite
    </button>
  );
}
