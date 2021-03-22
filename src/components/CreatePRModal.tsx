import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../images/close.svg";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { createRoom } from "../connection/socketActions";
import { modalScreen } from "../redux/actions/modalScreen";
import { SocketCallback } from "../types";
import Modal from "./Modal";
import { channelListAdd } from "../redux/actions/channelList";

export default function CreatePRModal() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const socket = useSelector((state: RootStateOrAny) => state.socket);
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (user !== "noUser") {
      const u = { name: user.displayName, email: user.email };
      const data = { user: u, name, category };
      createRoom(socket, data, (res: SocketCallback) => {
        console.log(res);
        if (res.type === "success") {
          dispatch(modalScreen(""));
          dispatch(channelListAdd(res.data));
          history.push(`/channels/${res.data.id}`);
        } else {
          setError(true);
          setErrorMsg(res.message);
        }
      });
    }
  };

  return (
    <Modal>
      <h2>Create private room</h2>
      <div className="interface">
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
        <form onSubmit={handleCreate}>
          <label htmlFor="name">Room name</label>
          <input
            className="formInput"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="category">Room category</label>
          <input
            className="formInput"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Flowers"
          />
          <input type="submit" className="formSubmit" />
        </form>
      </div>
    </Modal>
  );
}
