import React from "react";
import CreatePR from "../components/CreatePR";
import JoinCatOfDay from "../components/JoinCatOfDay";
import JoinPublic from "../components/JoinPublic";
import { ReactComponent as Logo } from "../images/logo.svg";
import { images } from "./ChannelLandingBg";

const bgImage = (category: string) => {
  const Svg = images.find((img) => img.name === category)?.svg;
  return <Svg className="categoryImage" />;
};

export default function ChannelLanding() {
  return (
    <div className="channelLanding">
      <div className="content">
        {bgImage("space")}
        <div className="wrapper">
          <h2 className="channelLandingTitle">
            Click on a channel to join the conversation!
          </h2>
          <Logo className="logo" />
          <div className="actions">
            <JoinPublic />
            <CreatePR />
          </div>
          <JoinCatOfDay />
        </div>
      </div>
    </div>
  );
}
