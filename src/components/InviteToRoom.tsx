import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { CSSTransition } from "react-transition-group";
import { sendInvitation } from "../connection/socketActions";
import { Channel } from "../types";
import { ReactComponent as Close } from "../images/close.svg";
import Modal from "./Modal";
import { modalScreen } from "../redux/actions/modalScreen";

export default function InviteToRoom() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const location = useLocation();
  const dispatch = useDispatch();
  const currentChannel: Channel = useSelector((state: RootStateOrAny) =>
    state.channelList.find(
      (channel: Channel) => channel.id === location.pathname.split("/").pop()
    )
  );

  const invite = () => {
    sendInvitation(user, currentChannel, name, (callback) => {
      if (callback.type === "error") {
        setError(true);
        setErrorMsg(callback.message);
      } else {
        dispatch(modalScreen(""));
      }
    });
  };

  return (
    <Modal>
      <CSSTransition
        in={error}
        unmountOnExit
        timeout={500}
        classNames="fadeout"
      >
        <>
          <p className="error">{errorMsg}</p>
          <Close className="close" onClick={() => setError(false)} />
        </>
      </CSSTransition>
      <h2>
        Invite user to room <span>{currentChannel.name}</span>
      </h2>
      <div className="interface">
        <label htmlFor="name">Username</label>
        <input
          name="name"
          className="formInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="mainButton formSubmit" onClick={invite}>
          Invite
        </button>
      </div>
    </Modal>
  );
}
