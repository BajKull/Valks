import React from "react";
import CreatePR from "../components/CreatePR";
import JoinPublic from "../components/JoinPublic";
import { ReactComponent as Logo } from "../images/logo.svg";

export default function ChannelLanding() {
  return (
    <div className="channelLanding">
      <div className="info">
        <JoinPublic />
        <CreatePR />
      </div>
      <div className="content">
        <h2 className="channelLandingTitle">
          Click on a channel to join the conversation!
        </h2>
        <Logo className="logo" />
        <div className="recommended">
          <h3 className="category">
            Category of the day <span className="tag">Space</span>
          </h3>
          <button className="secondaryButton">Join now!</button>
        </div>
      </div>
    </div>
  );
}
