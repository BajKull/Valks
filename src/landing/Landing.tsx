import React from "react";
import CreatePR from "../components/CreatePR";
import JoinPublic from "../components/JoinPublic";
import { ReactComponent as Illustration } from "./illustration.svg";
import { ReactComponent as Stripes } from "./stripes.svg";

export default function Landing() {
  return (
    <div className="landing">
      <div className="content">
        <Illustration className="illustration" />
        <Stripes className="stripes" />
        <h1 className="title">Find someone to chat with!</h1>
        <p className="description">
          Are you looking to talk with people that share your hobbies and
          passions? You came to the right place! Valks allows you to connect
          with members of the community around the world.
        </p>
        <div className="actions">
          <JoinPublic />
          <CreatePR />
        </div>
        <div className="screen"></div>
        <div className="stripes">
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
      </div>
    </div>
  );
}
