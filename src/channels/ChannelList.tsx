import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Channel } from "../types";

export default function ChannelList() {
  const channelList = useSelector((state: RootStateOrAny) => state.channelList);
  return (
    <div className="channelList">
      {channelList.map((channel: Channel) => (
        <div className="channel"></div>
      ))}
    </div>
  );
}
