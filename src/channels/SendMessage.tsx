import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Channel, SocketCallback } from "../types";
import { sendMessage } from "../connection/socketActions";
import { channelMessagesAdd } from "../redux/actions/channelMessages";

export default function SendMessage({ channel }: { channel: Channel }) {
  const [message, setMessage] = useState("");
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const socket = useSelector((state: RootStateOrAny) => state.socket);
  const dispatch = useDispatch();

  const send = () => {
    if (message) {
      sendMessage(socket, message, user, channel, (res: SocketCallback) => {
        dispatch(channelMessagesAdd(res.data));
      });
      setMessage("");
    }
  };

  const isEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") send();
  };

  return (
    <div className="sendMessage">
      <input
        className="messageInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={isEnter}
      />
      <button className="mainButton" onClick={send}>
        Send
      </button>
    </div>
  );
}