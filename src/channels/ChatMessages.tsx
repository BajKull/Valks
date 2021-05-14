import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Channel, Message } from "../types";
import ChatMessage from "./ChatMessage";

export default function ChatMessages({ channel }: { channel: Channel }) {
  const blockList: string[] = useSelector(
    (state: RootStateOrAny) => state.loginStatus.blockList
  );
  return (
    <div className="chatMessages">
      {channel.messages
        .filter((msg) => !blockList.includes(msg.author.email))
        .map((message: Message) => (
          <ChatMessage
            msg={message}
            key={message.id}
            author={
              channel.users.find((u) => u.email === message.author.email) ||
              message.author
            }
          />
        ))}
    </div>
  );
}
