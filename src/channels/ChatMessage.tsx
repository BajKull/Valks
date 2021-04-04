import React from "react";
import { Message } from "../types";
import { displayDate } from "../components/displayDate";

export default function ChatMessage({ msg }: { msg: Message }) {
  return (
    <div className="chatMessage">
      <div className="messageInfo">
        {!msg.system && <p className="messageAuthor">{msg.author.name}</p>}
        <p className="messageDate">{displayDate(msg.date)}</p>
      </div>
      <p className="message">{msg.msg}</p>
    </div>
  );
}
