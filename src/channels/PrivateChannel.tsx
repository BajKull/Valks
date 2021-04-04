import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { Channel } from "../types";
import CurrentChannel from "./CurrentChannel";

export default function PrivateChannel() {
  const location = useLocation();
  const currentChannel: Channel = useSelector((state: RootStateOrAny) =>
    state.channelList.find(
      (channel: Channel) => channel.id === location.pathname.split("/").pop()
    )
  );
  if (!currentChannel) return <Redirect to="/channels" />;
  return <CurrentChannel currentChannel={currentChannel} />;
}
