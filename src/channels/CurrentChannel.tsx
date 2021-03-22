import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../images/close.svg";
import { Channel } from "../types";
import ChatMessages from "./ChatMessages";
import SendMessage from "./SendMessage";

export default function CurrentChannel() {
  const location = useLocation();
  const currentChannel: Channel = useSelector((state: RootStateOrAny) =>
    state.channelList.find(
      (channel: Channel) => channel.id === location.pathname.split("/").pop()
    )
  );
  if (!currentChannel) return <Redirect to="/channels" />;
  else
    return (
      <div className="currentChannel">
        <div className="info">
          <button className="secondaryButton">Invite</button>
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
