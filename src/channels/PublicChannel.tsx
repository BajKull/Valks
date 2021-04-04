import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router";
import { Channel } from "../types";
import { categories } from "../components/categories";
import CurrentChannel from "./CurrentChannel";

export default function PublicChannel() {
  const location = useLocation();
  const currentChannel: Channel = useSelector((state: RootStateOrAny) =>
    state.channelList.find(
      (channel: Channel) =>
        channel.category === location.pathname.split("/").pop()
    )
  );
  if (!currentChannel || !categories.includes(currentChannel.category))
    return <Redirect to="/channels" />;
  return <CurrentChannel currentChannel={currentChannel} />;
}
