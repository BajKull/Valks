import React from "react";
import CreatePR from "../components/CreatePR";
import JoinPublic from "../components/JoinPublic";

export default function ChannelLanding() {
  return (
    <div className="channelLanding">
      <div className="info">
        <JoinPublic />
        <CreatePR />
      </div>
      <h2>Click on a channel to start a conversation!</h2>
      <div className="recommended">
        <h3>Recommended category for today: </h3>
        <button>Join now!</button>
      </div>
    </div>
  );
}
