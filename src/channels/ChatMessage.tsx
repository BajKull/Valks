import React from "react";
import { Message, User } from "../types";
import { displayDate } from "../components/displayDate";

export default function ChatMessage({
  msg,
  author,
}: {
  msg: Message;
  author: User;
}) {
  return (
    <div className="chatMessage">
      {!msg.system && <img src={author.avatar} alt="" className="msgAvatar" />}
      <div>
        <div className="messageInfo">
          {!msg.system && <p className="messageAuthor">{author.name}</p>}
          <p className="messageDate">{displayDate(msg.date)}</p>
        </div>
        <p className="message">{msg.msg}</p>
      </div>
    </div>
  );
}
