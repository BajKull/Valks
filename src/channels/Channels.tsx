import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import ChannelLanding from "./ChannelLanding";
import ChannelList from "./ChannelList";
import CurrentChannel from "./CurrentChannel";
import Notifications from "./Notifications";

export default function Channel() {
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  return (
    <div className="channels">
      <ChannelList />
      <Route path="/channels" exact component={ChannelLanding} />
      <Route path="/channels" component={CurrentChannel} />
      <Notifications />
      {user === "noUser" && <Redirect to="/" />}
    </div>
  );
}
