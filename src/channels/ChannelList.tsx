import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Channel } from "../types";

export default function ChannelList() {
  const dispatch = useDispatch();
  const channelList = useSelector((state: RootStateOrAny) => state.channelList);
  return (
    <div className="channelList">
      <h1 className="channelTitle">Your channels</h1>
      {channelList.map((channel: Channel) => (
        <Link
          to={`/channels/${channel.id}`}
          className="channel"
          key={channel.id}
        >
          <img
            src={channel.avatar}
            alt={channel.name}
            className="channelAvatar"
          />
          <div className="channelInfo">
            <h2 className="channelName">{channel.name}</h2>
            <p className="channelUsers">{channel.users.length} users</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
