import React from "react";
import { Channel, Message } from "../types";
import ChatMessage from "./ChatMessage";

export default function ChatMessages({ channel }: { channel: Channel }) {
  console.log(channel.messages);
  return (
    <div className="chatMessages">
      {channel.messages.map((message: Message) => (
        <ChatMessage msg={message} />
      ))}
    </div>
  );
}
