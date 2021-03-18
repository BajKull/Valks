import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Channel } from "../types";

export default function ChannelList() {
  const channelList = useSelector((state: RootStateOrAny) => state.channelList);
  return (
    <div className="channelList">
      <h1 className="channelTitle">Your channels</h1>
      {channelList.map((channel: Channel) => (
        <div className="channel">
          <img
            src={channel.avatar}
            alt={channel.name}
            className="channelAvatar"
          />
          <div className="channelInfo">
            <h2 className="channelName">{channel.name}</h2>
            <p className="channelUsers">{channel.users.length} users</p>
          </div>
        </div>
      ))}
    </div>
  );
}
