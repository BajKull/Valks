import React from "react";
import { Link } from "react-router-dom";
import InviteButton from "../components/InviteButton";
import { ReactComponent as Close } from "../images/close.svg";
import { Channel } from "../types";
import ChatMessages from "./ChatMessages";
import SendMessage from "./SendMessage";

export default function CurrentChannel({
  currentChannel,
}: {
  currentChannel: Channel;
}) {
  return (
    <div className="currentChannel">
      <div className="info">
        <InviteButton />
        <h2 className="channelName">{currentChannel.name}</h2>
        <Link to="/channels">
          <Close className="close" />
        </Link>
      </div>
      <div className="content">
        <ChatMessages channel={currentChannel} />
        <SendMessage channel={currentChannel} />
      </div>
    </div>
  );
}
