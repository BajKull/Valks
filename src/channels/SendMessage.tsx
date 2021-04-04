import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Channel, SocketCallback } from "../types";
import { sendMessage } from "../connection/socketActions";

export default function SendMessage({ channel }: { channel: Channel }) {
  const [message, setMessage] = useState("");
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  const send = () => {
    if (message) {
      sendMessage(message, user, channel, (res: SocketCallback) => {
        if (res.type === "error") console.log(res.message);
        const body = document.querySelector(".chatMessages");
        if (body) body.scrollTop = body.scrollHeight;
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
