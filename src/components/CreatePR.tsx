import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";

export default function CreatePR() {
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const dispatch = useDispatch();

  const createRoom = () => {
    if (user === "noUser") dispatch(modalScreen("signin"));
    else dispatch(modalScreen("createRoom"));
  };

  return (
    <button className="secondaryButton" onClick={createRoom}>
      Create private chat room
    </button>
  );
}
